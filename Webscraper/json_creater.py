import scraper
import json
import requests

menus = []

for url in scraper.get_dining_hall_URLs():
    try:
        scraper.get_menu(url[1])
    except:
        print("Not a valid link")
    #menus.append(scraper.get_menu(url))

