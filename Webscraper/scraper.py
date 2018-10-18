from bs4 import BeautifulSoup
import requests

main_url = "https://dining.ucsc.edu/eat/index.html"
response = requests.get(main_url)
html = response.content

soup = BeautifulSoup(html, "html.parser")
dining_hall_buttons = []
dining_hall_urls = []

#Gets the first instance of an unordered list which contains all the information for each list
dining_hall_list = soup.find("ul", "archive-list list-page")

#Get all the a
for a_tag in dining_hall_list.find_all("a", "btn btn-info"):
    dining_hall_buttons.append(a_tag)

#Get all the a_tags within the list. a tags contain links to menu and dining hall title
for a_tag in dining_hall_buttons:
    dining_hall_urls.append([a_tag.get("href"), a_tag.get("title")])

#Gets the dining hall name and the dining hall title
for url in dining_hall_urls:
    print("Dining Hall: {} | URL: {}".format(url[1], url[0]))




#print(dining_hall_list.prettify().encode('utf-8').decode('ascii', 'ignore'))
#print(soup.prettify().encode('utf-8').decode('ascii', 'ignore'))