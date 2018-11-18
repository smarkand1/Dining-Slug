# dhpop.py uses the populartimes API from m-wrzr: https://github.com/m-wrzr/populartimes
#Updates the popular times data and the ratings data. if the informaiton isnt available it uses the old information
import populartimes
import json

google_api_json = json.load(open("DS-Web-App/config.json"))
google_api_key = google_api_json["GOOGLE_API_KEY"]

def print_google_data(ratings_file, times_file, prev_ratings, prev_times):
    halls = []
    #Gets the google data for 9/10
    nine = populartimes.get_id(google_api_key, "ChIJDf7xXQpBjoARyuZR1vXuXF8")
    #Gets the google data for Cowel/Stevenson
    cowel = populartimes.get_id(google_api_key, "ChIJAVV0haZBjoARvMcbjbOCfUo")
    #Gets the google data for Crown/Merill
    crown = populartimes.get_id(google_api_key, "ChIJi_EvW6dBjoAR463303sobo8")
    #gets the popular times for porter/kresge
    porter = populartimes.get_id(google_api_key, "ChIJqZjyj55BjoARoDnq_JJ1zMA")
    #Gets the google data for Rachel Carson/Oaks
    oaks = populartimes.get_id(google_api_key, "ChIJy4TGQJlBjoAR_QvVJaRT-yc")

    #Makes the dining halls into a list
    halls.extend([nine, cowel, crown, porter, oaks])

    #Write the header for each file
    times_file.write("{\n\"Halls\": [\n")
    ratings_file.write("{\n\t\"Halls\": [\n")

    #Build each file for each dining hall except for the last one for formatting puposes
    index = 0
    for hall in halls[:-1]:
        #Fill in popular times data
        try:
            times = hall["populartimes"]
            print(times)
            print_times(times, times_file)
        except KeyError:  
            print("no popular time data, using old data")
            print_prev_times(prev_times[index], times_file)

        #Fill in ratings data
        try:
            ratings = hall["rating"]    
            reviews = hall["rating_n"]
            print(ratings, reviews)
            print_dhratings(ratings, reviews, ratings_file)
        except KeyError: 
            print("no review data, using old data")
            print_prev_dhratings(prev_ratings[index], ratings_file)
        index += 1

    #Adds the last dining hall information to each file
    #Fill in popular times data for the last dining hall
    try:
        times = halls[-1]["populartimes"]
        print(times)
        
        times_file.write("\t\t{\n")
        #Write the information for all dining halls except last one
        for day in times[:-1]:
            times_file.write("\t\t\t\"" + day["name"] + "\": [")
            for time_slot in day["data"][:-1]:
                times_file.write(str(time_slot) + ", ")
            times_file.write(str(day["data"][-1]) + "],\n")

        #Write the last one
        times_file.write("\t\t\t\"" + times[-1]["name"] + "\": [")
        for time_slot in times[-1]["data"][:-1]:
            times_file.write(str(time_slot) + ", ")
        times_file.write(str(times[-1]["data"][-1]) + "]\n")
        times_file.write("\t\t}\n")
    except KeyError:
        print("no popular time data, using old data")
        #Print the header
        times_file.write("\t\t{\n")

        #Print the contents
        times_file.write("\t\t\t\"Monday\": " + str(prev_times[index]["Monday"]) + ",\n")
        times_file.write("\t\t\t\"Tuesday\": " + str(prev_times[index]["Tuesday"]) + ",\n")
        times_file.write("\t\t\t\"Wednesday\": " + str(prev_times[index]["Wednesday"]) + ",\n")
        times_file.write("\t\t\t\"Thursday\": " + str(prev_times[index]["Thursday"]) + ",\n")
        times_file.write("\t\t\t\"Friday\": " + str(prev_times[index]["Friday"]) + ",\n")
        times_file.write("\t\t\t\"Saturday\": " + str(prev_times[index]["Saturday"]) + ",\n")
        times_file.write("\t\t\t\"Sunday\": " + str(prev_times[index]["Sunday"]) + "\n")

        #close off the json
        times_file.write("\t\t}\n")

    #Fill in ratings data for last dining hall
    try:
        ratings = halls[-1]["rating"]    
        reviews = halls[-1]["rating_n"]
        print(ratings, reviews)

        #Write the data
        ratings_file.write("\t\t{\n")
        ratings_file.write("\t\t\t\"Rating\": " + str(ratings) + ",\n")
        ratings_file.write("\t\t\t\"Reviews\": " + str(reviews) + "\n")
        ratings_file.write("\t\t}\n")
    except KeyError:
        print("no review data, using old data")
        
        #write the data
        ratings_file.write("\t\t{\n")
        ratings_file.write("\t\t\t\"Rating\": " + str(prev_ratings[index]["Rating"]) + ",\n")
        ratings_file.write("\t\t\t\"Reviews\": " + str(prev_ratings[index]["Reviews"]) + "\n")
        ratings_file.write("\t\t}\n")

    #close off each file
    times_file.write("\t]\n}")
    ratings_file.write("\t]\n}")


def print_times(times_obj, file):
    #write header
    file.write("\t\t{\n")

    #Write the information for all dining halls except last one
    for day in times_obj[:-1]:
        file.write("\t\t\t\"" + day["name"] + "\": [")
        for time_slot in day["data"][:-1]:
            file.write(str(time_slot) + ", ")
        file.write(str(times_obj[-1]["data"][-1]) + "],\n")

    #Write the last one
    file.write("\t\t\t\"" + times_obj[-1]["name"] + "\": [")
    for time_slot in times_obj[-1]["data"][:-1]:
        file.write(str(time_slot) + ", ")
    file.write(str(times_obj[-1]["data"][-1]) + "]\n")

    #close it off
    file.write("\t\t},\n")

def print_prev_times(times_obj, file):
    file.write("\t\t{\n")

    file.write("\t\t\t\"Monday\": " + str(times_obj["Monday"]) + ",\n")
    file.write("\t\t\t\"Tuesday\": " + str(times_obj["Tuesday"]) + ",\n")
    file.write("\t\t\t\"Wednesday\": " + str(times_obj["Wednesday"]) + ",\n")
    file.write("\t\t\t\"Thursday\": " + str(times_obj["Thursday"]) + ",\n")
    file.write("\t\t\t\"Friday\": " + str(times_obj["Friday"]) + ",\n")
    file.write("\t\t\t\"Saturday\": " + str(times_obj["Saturday"]) + ",\n")
    file.write("\t\t\t\"Sunday\": " + str(times_obj["Sunday"]) + "\n")

    file.write("\t\t},\n")

def print_dhratings(ratings, reviews, file):
    file.write("\t\t{\n")
    file.write("\t\t\t\"Rating\": " + str(ratings) + ",\n")
    file.write("\t\t\t\"Reviews\": " + str(reviews) + "\n")
    file.write("\t\t},\n")

def print_prev_dhratings(ratings_obj, file):
    file.write("\t\t{\n")
    file.write("\t\t\t\"Rating\": " + str(ratings_obj["Rating"]) + ",\n")
    file.write("\t\t\t\"Reviews\": " + str(ratings_obj["Reviews"]) + "\n")
    file.write("\t\t},\n")


        