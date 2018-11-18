# dhpop.py uses the populartimes API from m-wrzr: https://github.com/m-wrzr/populartimes
import populartimes
import json

# finds the popular times per day of the Crown/Merrill dining hall
with open('crown_merrill.txt', 'w') as out1:
    popular_times = populartimes.get_id("API-Key", "ChIJi_EvW6dBjoAR463303sobo8")["populartimes"]

    for item in popular_times:
    	json.dump(item, out1)
    	out1.write("\n")


# finds the popular times per day of the RCC/Oakes dining hall
with open('rcc_oakes.txt', 'w') as out2:
    popular_times = populartimes.get_id("API-Key", "ChIJy4TGQJlBjoAR_QvVJaRT-yc")["populartimes"]

    for item in popular_times:
    	json.dump(item, out2)
    	out2.write("\n")

### ??? Other Dining Hall Information ???
