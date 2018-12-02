import scraper
import requests
import dhpop
import json
import sys

def print_menu(file, term, menu, food_index):
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
    NAME = 0
    OUT_OF_BOUNDS = len(menu) - 1

    if(food_index > len(menu) - 1):
        return food_index
    title = menu[food_index][NAME]
    file.write("\t\t{\n")
    file.write("\t\t\t\"Title\": \"" + title + "\",\n")
    file.write("\t\t\t\"Food\": [")

    food_index += 1
    food = menu[food_index][NAME]
    if food != term :
        file.write("\"" + food + "\"")
        food_index += 1
        if(food_index > OUT_OF_BOUNDS):
            file.write("]\n\t\t}")
            return food_index
        food = menu[food_index][NAME]

    while food != term :
        file.write(", \"" + food + "\"")
        food_index += 1
        if(food_index > OUT_OF_BOUNDS):
            break
        food = menu[food_index][NAME]

    file.write("]\n\t\t}")
    return food_index

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
    #First 4 letters of a phrase that is not a food
    ILLEGAL_PHRASES = ("Brea", "Lunc", "Dinn", "Late", "Menu")
    NAME = 0
    LAST = -1

    #Keeps track of what was added so as to not add it again
    added = set()
    
    #Header for json object
    file.write("\t\t{\n")
    file.write("\t\t\t\"Food\": [")

    #Writes food items to array if it isnt there already
    for item in menu[:LAST]:
        if item[NAME][:4] in ILLEGAL_PHRASES:
            continue
        if item[NAME] in added:
            continue
        added.add(item[NAME])
        file.write("\"" + item[NAME] + "\", ")

    #Write last item to list so as to avoid comma formatting issues
    if menu[LAST][NAME][:4] not in ILLEGAL_PHRASES:
        file.write("\"" + menu[LAST][NAME] + "\"")

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
    #First 4 letters of a phrase that is not a food
    ILLEGAL_PHRASES = ("Brea", "Lunc", "Dinn", "Late", "Menu")
    NAME = 0
    PREFS = 1
    URL = 2
    DH = 3
    LAST = -1

    #Keeps track of what was added so as to not add it again
    added = {}
    
    #Header for json object
    file.write("{\n")

    #Sifts out duplicates and combines which dining hall food is served in
    for item in menu[:LAST]:
        #If its not a food item, it skips over it
        if item[NAME][:4] in ILLEGAL_PHRASES:
            continue
        #If the items is there update the set of dining halls the food is served in
        if item[NAME] in added:
            if (item[DH] not in added[item[NAME]]["Dining Halls"]):
                added[item[NAME]]["Dining Halls"].append(item[DH])
            continue
        added[item[NAME]] = {"Preferences" : item[PREFS], "URL" : item[URL], "Dining Halls" : [item[DH]]}

    print(added)

    #Write each food item and its information to the file
    #writes the first item then deletes it for formatting purposes with commas
    for food in added:
        file.write("\t\"" + food + "\": {\n")
        file.write("\t\t\"Preferences\": " + json.dumps(added[food]["Preferences"]) + ",\n")
        file.write("\t\t\"URL\": " + json.dumps(added[food]["URL"]) + ",\n")
        file.write("\t\t\"Dining Halls\": " + json.dumps(added[food]["Dining Halls"]) + "\n")
        file.write("\t}")
        del added[food]
        break

    #Writes the rest of the items in the list
    for food in added:
        file.write(",\n")
        file.write("\t\"" + food + "\": {\n")
        file.write("\t\t\"Preferences\": " + json.dumps(added[food]["Preferences"]) + ",\n")
        file.write("\t\t\"URL\": " + json.dumps(added[food]["URL"]) + ",\n")
        file.write("\t\t\"Dining Halls\": " + json.dumps(added[food]["Dining Halls"]) + "\n")
        file.write("\t}")

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

#Output files for google api
ratings_file = open("DS-Web-App/src/components/dhRating.json", "w")
times_file = open("DS-Web-App/src/components/poptimes.json", "w")

#Write Data for times and ratings using google data
dhpop.print_google_data(ratings_file, times_file, prev_ratings, prev_times)
ratings_file.close()
times_file.close()

urls = scraper.get_dining_hall_URLs()
if(urls == -1):
    sys.exit()

#Output files for webscraper
data_file = open("DS-Web-App/src/components/dailyMenu.json", "w")
search_file = open("DS-Web-App/src/components/search.json", "w")
food_file = open("DS-Web-App/src/components/food.json", "w")

count = 0
NAME = 0
DINING_HALL = 0
DATE = 0
URL = 1
FIRST = 1
INCREMENT_BY_ONE = 1
MIN_VALID = 4
MAX_DINING_HALL_COUNT = 5

#Menu consisting of every item regardless of dining hall
full_menu = []

#Menu consisting of links to nutrition of every item regardless of dining hall
full_link_menu = []

#Starts the JSON file for dailyMenu.json
data_file.write("{\n\"data\":[")

#Starts the JSON file for food.json
search_file.write("{\n\t\"Ids\": [\n")

for url in urls:
    #Purpose is to stop after the standard dining halls
    #First 5 links are the 5 dining halls
    count += INCREMENT_BY_ONE
    if count > MAX_DINING_HALL_COUNT :
        break
    elif(count > FIRST):
        data_file.write(",\n")
    #tests if we get a valid response from the dining hall menu
    #if valid, gets the menu and stores in 'menu' variable
    #menu is a list of lists. Each item in menu is a list with the following at each index:
    #0: name, 1: preferences (vegan, soy, etc), 2: link to nutrition
    try:
        menu = scraper.get_menu(url[URL])
    except:
        print("Not a valid link: " + url[URL])
        continue

    #Fills in which dining hall the food is being served at
    #0: name, 1: preferences (vegan, soy, etc), 2: link to nutrition, 3: dining hall
    for item in menu:
        item.append(url[DINING_HALL])
    full_menu.extend(menu)

    #Starts outputing data to json file for search.json
    print_search_menu(search_file, menu)
    search_file.write(",\n")

    #Starts outputing data to json file for dailyMenu.json
    data_file.write("{\n")

    #Tests if the dining hall has a name
    try:
        data_file.write("\t\"Title\": \"" + url[DINING_HALL] + "\",\n")
    except:
        data_file.write("\tTitle: \"\",\n")

    #Formatting for data    
    data_file.write("\t\"Date\": \"" + menu[DATE][NAME] + "\",\n")
    data_file.write("\t\"Menu\": [\n")
    
    #Prints the food for that dining hall
    if len(menu) >= MIN_VALID :
        index = 1
        #Print the items for breakfast
        if(menu[index][NAME] == "Breakfast"):
            index = print_menu(data_file, "Lunch", menu, index)
            data_file.write(",\n")
        #Print items for lunch
        if(menu[index][NAME] == "Lunch"):
            index = print_menu(data_file, "Dinner", menu, index)
            data_file.write(",\n")
        #Print items for Dinner
        if(menu[index][NAME] == "Dinner"):  
            index = print_menu(data_file, "Late Night", menu, index)
        #Print items for late night if it exists
        if index != len(menu) :
            data_file.write(",\n")
            index = print_menu(data_file, "", menu, index)
            data_file.write("\n")
        else:
            data_file.write(",\n")
            data_file.write("\t\t{\n")
            data_file.write("\t\t\t\"Title\": \"Late Night\",\n")
            data_file.write("\t\t\t\"Food\": []")
            data_file.write("\n\t\t}\n")
    data_file.write("\t]\n}")

#Closes off the dailMenu.json file
data_file.write("]\n}")

#Writes the search.json file
print_search_menu(search_file, full_menu)
search_file.write("\n\t]\n}")

#Writes the food.json file
print_detailed_menu(food_file, full_menu)
food_file.write("\n}")

#Close the files
data_file.close()   
search_file.close()   
food_file.close()  
