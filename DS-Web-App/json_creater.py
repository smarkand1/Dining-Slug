import scraper
import requests
import dhpop
import json

def print_menu(file, term, menu, i):
    '''
    Outputs the data from menu in an object format for each menu
    Object contains attributes: title (string), menu(list of strings)  
    Arguments:
        file - (file) output file
        term - (str) when to stop parsing master list containg food for all sections of the day
        menu - (list) list of strings of food items
        i - (int) where to start in the list
    returns:
        i - (int) where we left off in the master list
    raises:
        None
    '''
    if(i > len(menu) - 1):
        return i
    title = menu[i]
    file.write("\t\t{\n")
    file.write("\t\t\t\"Title\": \"" + title + "\",\n")
    file.write("\t\t\t\"Food\": [")

    i += 1
    food = menu[i]
    if food != term :
        file.write("\"" + food + "\"")
        i += 1
        if(i > len(menu) - 1):
            file.write("]\n\t\t}")
            return i
        food = menu[i]

    while food != term :
        file.write(", \"" + food + "\"")
        i += 1
        if(i > len(menu) - 1):
            break
        food = menu[i]

    file.write("]\n\t\t}")
    return i

def print_search_menu(file, menu):
    '''
    Outputs the data from menu in an object format for each menu
    Object contains attributes: title (string), menu(list of strings)  
    Arguments:
        file - (file) output file
        menu - (list) list of strings of food items for a dining hall
        id - (int) id for the dining hall
    returns:
        None
    raises:
        None
    '''
    #First 4 letters of a phrase that is not a food
    ILLEGAL_PHRASES = ("Brea", "Lunc", "Dinn", "Late", "Menu")
    #Keeps track of what was added so as to not add it again
    added = set()
    #Header for json object
    file.write("\t\t{\n")
    file.write("\t\t\t\"Food\": [")
    #Writes food items to array
    for item in menu[:-1]:
        if item[:4] in ILLEGAL_PHRASES:
            continue
        if item in added:
            continue
        added.add(item)
        file.write("\"" + item + "\", ")
    #Write last item to list so as to avoid comma formatting issues
    if menu[-1][:4] not in ILLEGAL_PHRASES:
        file.write("\"" + menu[-1] + "\"")
    #Closes off list
    file.write("]\n\t\t}") 

'''
Run to get the current menu from each dining hall. The output is dailyMenu.json
The data is output in a JSON format with 5 JSON objects each representing
a dining hall menu. Each JSON object contains: the name of the dining hall,
current date that the menu was pulled from, hours of operation for that date,
and the menu.

This file creates 4 json files
times.json
food.json
dailyMenu.json
dhRating.json
'''

prev_ratings_json = json.load(open('DS-Web-App/src/components/dhRating.json'))
prev_times_json = json.load(open('DS-Web-App/src/components/poptimes.json'))
prev_ratings = prev_ratings_json["Halls"]
prev_times = prev_times_json["Halls"]

data_file = open("DS-Web-App/src/components/dailyMenu.json", "w")
search_file = open("DS-Web-App/src/components/food.json", "w")
ratings_file = open("DS-Web-App/src/components/dhRating.json", "w")
times_file = open("DS-Web-App/src/components/poptimes.json", "w")

#Write Data for times and ratings using google data
dhpop.print_google_data(ratings_file, times_file, prev_ratings, prev_times)

count = 0
MAX_DINING_HALL_COUNT = 5
#Menu consisting of every item regardless of dining hall
full_menu = []
#Starts the JSON file for dailyMenu.json
data_file.write("{\n\"data\":[")
#Starts the JSON file for food.json
search_file.write("{\n\t\"Ids\": [\n")

for url in scraper.get_dining_hall_URLs():
    #Purpose is to stop after the standard dining halls
    #First 5 links are the 5 dining halls
    count += 1
    if count > MAX_DINING_HALL_COUNT :
        break
    elif(count > 1):
        data_file.write(",\n")
    #tests if we get a valid response from the dining hall menu
    #if valid, gets the menu and stores in 'menu' variable
    try:
        menu = scraper.get_menu(url[1])
        full_menu.extend(menu)
    except:
        print("Not a valid link: " + url[1])
        continue

    #Starts outputing data to json file for food.json
    print_search_menu(search_file, menu)
    search_file.write(",\n")

    #Starts outputing data to json file for dailyMenu.json
    data_file.write("{\n")

    #Tests if the dining hall has a name
    try:
        data_file.write("\t\"Title\": \"" + url[0] + "\",\n")
    except:
        data_file.write("\tTitle: \"\",\n")

    #Formatting for data    
    data_file.write("\t\"Date\": \"" + menu[0] + "\",\n")
    data_file.write("\t\"Hours\": " + "\"Hours go here\"," + "\n")
    data_file.write("\t\"Menu\": [\n")
    
    #Prints the food for that dining hall
    if len(menu) >= 4 :
        i = 1
        #Print the items for breakfast
        i = print_menu(data_file, "Lunch", menu, i)
        data_file.write(",\n")
        #Print items for lunch
        i = print_menu(data_file, "Dinner", menu, i)
        data_file.write(",\n")
        #Print items for Dinner
        i = print_menu(data_file, "Late Night", menu, i)
        #Print items for late night if it exists
        if i != len(menu) :
            data_file.write(",\n")
            i = print_menu(data_file, "", menu, i)
            data_file.write("\n")
        else:
            data_file.write(",\n")
            data_file.write("\t\t{\n")
            data_file.write("\t\t\t\"Title\": \"Late Night\",\n")
            data_file.write("\t\t\t\"Food\": []")
            data_file.write("\n\t\t}\n")
    data_file.write("\t]\n}")

#Closes off the JSON files
data_file.write("]\n}")
print_search_menu(search_file, full_menu)
search_file.write("\n\t]\n}")

#Close the files
data_file.close()   
search_file.close()   
ratings_file.close()
times_file.close()  


        


