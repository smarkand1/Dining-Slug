import scraper
import requests

def print_food(file, term, menu, i):
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

'''
Run to get the current menu from each dining hall. The output is data.txt
The data is output in a JSON format with 5 JSON objects each representing
a dining hall menu. Each JSON object contains: the name of the dining hall,
current date that the menu was pulled from, hours of operation for that date,
and the menu.
'''

file = open("DS-Web-App/src/components/data.JSON", "w")
count = 0
MAX_DINING_HALL_COUNT = 5
#Starts the array of JSON objects
file.write("[")
for url in scraper.get_dining_hall_URLs():
    #Purpose is to stop after the standard dining halls
    #First 5 links are the 5 dining halls
    count += 1
    if count > MAX_DINING_HALL_COUNT :
        break
    elif(count > 1):
        file.write(",\n")
    #tests if we get a valid response from the dining hall menu
    try:
        menu = scraper.get_menu(url[1])
    except:
        print("Not a valid link: " + url[1])
        continue

    #Starts outputing data to JSON format in a txt file
    file.write("{\n")
    try:
        file.write("\t\"Title\": \"" + url[0] + "\",\n")
    except:
        file.write("\tTitle: \"\",\n")
    file.write("\t\"Date\": \"" + menu[0] + "\",\n")
    file.write("\t\"Hours\": " + "\"Hours go here\"," + "\n")
    file.write("\t\"Menu\": [\n")
    #Prints the food
    if len(menu) >= 4 :
        i = 1
        #Print the items for breakfast
        i = print_food(file, "Lunch", menu, i)
        file.write(",\n")
        #Print items for lunch
        i = print_food(file, "Dinner", menu, i)
        file.write(",\n")
        #Print items for Dinner
        i = print_food(file, "Late Night", menu, i)
        #Print items for late night if it exists
        if i != len(menu) :
            file.write(",\n")
            i = print_food(file, "", menu, i)
            file.write("\n")
        else:
            file.write(",\n")
            file.write("\t\t{\n")
            file.write("\t\t\t\"Title\": \"Late Night\",\n")
            file.write("\t\t\t\"Food\": []")
            file.write("\n\t\t}\n")
    #Closes off the JSON
    file.write("\t]\n}")
file.write("\n]")
file.close();        


        


