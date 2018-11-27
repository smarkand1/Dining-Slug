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
        menu - (list) list of lists of [food items, pref]
        i - (int) where to start in the list
    returns:
        i - (int) where we left off in the master list
    raises:
        None
    '''
    if(i > len(menu) - 1):
        return i
    NAME = 0
    title = menu[i][NAME]
    file.write("\t\t{\n")
    file.write("\t\t\t\"Title\": \"" + title + "\",\n")
    file.write("\t\t\t\"Food\": [")

    i += 1
    food = menu[i][NAME]
    if food != term :
        file.write("\"" + food + "\"")
        i += 1
        if(i > len(menu) - 1):
            file.write("]\n\t\t}")
            return i
        food = menu[i][NAME]

    while food != term :
        file.write(", \"" + food + "\"")
        i += 1
        if(i > len(menu) - 1):
            break
        food = menu[i][NAME]

    file.write("]\n\t\t}")
    return i

def print_search_menu(file, menu):
    '''
    Outputs the data from menu in an object format for each menu
    Object contains attributes: title (string), menu(list of strings)  
    Arguments:
        file - (file) output file
        menu - (list) list of strings of food items for a dining hall
    returns:
        None
    raises:
        None
    '''
    NAME = 0
    #First 4 letters of a phrase that is not a food
    ILLEGAL_PHRASES = ("Brea", "Lunc", "Dinn", "Late", "Menu")

    #Keeps track of what was added so as to not add it again
    added = set()
    
    #Header for json object
    file.write("\t\t{\n")
    file.write("\t\t\t\"Food\": [")

    #Writes food items to array if it isnt there already
    for item in menu[:-1]:
        if item[NAME][:4] in ILLEGAL_PHRASES:
            continue
        if item[NAME] in added:
            continue
        added.add(item[NAME])
        file.write("\"" + item[NAME] + "\", ")

    #Write last item to list so as to avoid comma formatting issues
    if menu[-1][NAME][:4] not in ILLEGAL_PHRASES:
        file.write("\"" + menu[-1][NAME] + "\"")

    #Closes off list
    file.write("]\n\t\t}") 

def print_detailed_menu(file, menu):
    '''
    Outputs the data from menu in an object format for each menu
    Object contains attributes: title (string), menu(list of strings)  
    Arguments:
        file - (file) output file
        menu - (list) list of strings of food items for a dining hall
    returns:
        None
    raises:
        None
    '''
    NAME = 0
    PREFS = 1
    DH = 2
    #First 4 letters of a phrase that is not a food
    ILLEGAL_PHRASES = ("Brea", "Lunc", "Dinn", "Late", "Menu")

    #Keeps track of what was added so as to not add it again
    added = {}
    
    #Header for json object
    file.write("{\n")

    #Sifts out duplicates and combines which dining hall food is served in
    for item in menu[:-1]:
        #If its not a food item, it skips over it
        if item[NAME][:4] in ILLEGAL_PHRASES:
            continue
        #If the items is there update the set of dining halls the food is served in
        if item[NAME] in added:
            if (item[DH] not in added[item[NAME]]["Dining Halls"]):
                added[item[NAME]]["Dining Halls"].append(item[DH])
            continue
        added[item[NAME]] = {"Preferences" : item[PREFS], "Dining Halls" : [item[DH]]}

    print(added)

    #Write each food item to the file
    for food in added:
        file.write("\t\"" + food + "\": {\n")
        file.write("\t\t\"Preferences\": " + json.dumps(added[food]["Preferences"]) + ",\n")
        file.write("\t\t\"Dining Halls\": " + json.dumps(added[food]["Dining Halls"]) + "\n")
        file.write("\t}")
        del added[food]
        break
    for food in added:
        file.write(",\n")
        file.write("\t\"" + food + "\": {\n")
        file.write("\t\t\"Preferences\": " + json.dumps(added[food]["Preferences"]) + ",\n")
        file.write("\t\t\"Dining Halls\": " + json.dumps(added[food]["Dining Halls"]) + "\n")
        file.write("\t}")

def append_urls(menu, nutr_menu):
    #First 4 letters of a phrase that is not a food
    ILLEGAL_PHRASES = ("Brea", "Lunc", "Dinn", "Late", "Menu")
    NAME = 0
    PREFS = 1

    nutr_index = 0
    for menu_index in range(len(menu)):
        if menu[menu_index][NAME][:4] in ILLEGAL_PHRASES:
            continue
        else:
            menu[menu_index].append(nutr_menu[nutr_index])
            nutr_index += 1

'''
Run to get the current menu from each dining hall. The output is dailyMenu.json
The data is output in a JSON format with 5 JSON objects each representing
a dining hall menu. Each JSON object contains: the name of the dining hall,
current date that the menu was pulled from, hours of operation for that date,
and the menu.

This file creates 5 json files
poptimes.json - google data popular times data for the file
search.json - Food items in each dining hall
dailyMenu.json - Daily menu with title, hours, and menu sorted by meal
dhRating.json - google data ratings data for each dining hall
food.json - food data with specifics
'''

#Old data to overwrite
prev_ratings_json = json.load(open('DS-Web-App/src/components/dhRating.json'))
prev_times_json = json.load(open('DS-Web-App/src/components/poptimes.json'))
prev_ratings = prev_ratings_json["Halls"]
prev_times = prev_times_json["Halls"]

#Output files
data_file = open("DS-Web-App/src/components/dailyMenu.json", "w")
search_file = open("DS-Web-App/src/components/search.json", "w")
food_file = open("DS-Web-App/src/components/food.json", "w")
ratings_file = open("DS-Web-App/src/components/dhRating.json", "w")
times_file = open("DS-Web-App/src/components/poptimes.json", "w")

#Write Data for times and ratings using google data
dhpop.print_google_data(ratings_file, times_file, prev_ratings, prev_times)

count = 0
MAX_DINING_HALL_COUNT = 5
NAME = 0

#Menu consisting of every item regardless of dining hall
full_menu = []

#Menu consisting of links to nutrition of every item regardless of dining hall
full_link_menu = []

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
    #also stores the link to the nutrition info for each item in the 'nutrition' variable
    #While the links and the food items are in different arrays, the order is the same
    #Menu does contain data such as date, and meal type (lunch, dinner, etc), so once its cleaned
    #The first index in menu is the food and the first index in nutrition is the link for it
    try:
        menu = scraper.get_menu(url[1])
        nutrition_menu = scraper.get_nutrion_info(url[1])
        #Add the link member to each food item
    except:
        print("Not a valid link: " + url[1])
        continue

    #Fills in which dining hall the food is being served at
    #Menu at first index (0) is name of item, menu at second index (1) is dining hall its from
    for item in menu:
        item.append(url[0])
    append_urls(menu, nutrition_menu)
    full_menu.extend(menu)

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
    data_file.write("\t\"Date\": \"" + menu[0][NAME] + "\",\n")
    data_file.write("\t\"Hours\": " + "\"Hours go here\"," + "\n")
    data_file.write("\t\"Menu\": [\n")
    
    #Prints the food for that dining hall
    if len(menu) >= 4 :
        i = 1
        #Print the items for breakfast
        if(menu[i][NAME] == "Breakfast"):
            i = print_menu(data_file, "Lunch", menu, i)
            data_file.write(",\n")
        #Print items for lunch
        if(menu[i][NAME] == "Lunch"):
            i = print_menu(data_file, "Dinner", menu, i)
            data_file.write(",\n")
        #Print items for Dinner
        if(menu[i][NAME] == "Dinner"):  
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

#Writes the search menu file
print_search_menu(search_file, full_menu)
search_file.write("\n\t]\n}")

#Writes the food menu file
print_detailed_menu(food_file, full_menu)
food_file.write("\n}")

#Close the files
data_file.close()   
search_file.close()   
ratings_file.close()
times_file.close()  
