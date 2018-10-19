import scraper
import json
import requests

def print_food(file, term, menu, i):
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


file = open("data.txt", "w")
count = 0

for url in scraper.get_dining_hall_URLs():
    #Purpose is to stop after the standard dining halls
    #First 5 links are the 5 dining halls
    count += 1
    if count > 5 :
        break
    try:
        menu = scraper.get_menu(url[1])
    except:
        print("Not a valid link: " + url[1])
        continue
    #menus.append(scraper.get_menu(url))
    file.write("{\n")
    try:
        file.write("\t\"Title\": \"" + url[0] + "\"\n")
    except:
        file.write("\tTitle: \"\"\n")
    file.write("\t\"Date\": \"" + menu[0] + "\"\n")
    file.write("\t\"Hours\": " + "Hours go here" + "\n")
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
            file.write("\t\t{\n")
            file.write("\t\t\t\"Title\": \"Late Night\",\n")
            file.write("\t\t\t\"Food\": []")
            file.write("\n\t\t}\n")
    #Closes off the JSON
    file.write("\t]\n}\n")
        


        


