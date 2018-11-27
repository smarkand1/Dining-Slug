from bs4 import BeautifulSoup
import requests

def get_dining_hall_URLs():
    '''
    Retrieves the dining hall titles and menus on the main dining hall page
    Returns a list of lists where each list has 2 entries: the title of the dining hall, and the url
    in that order.    
    Arguments:
        None  
    Returns:  
        dining_hall_urls - (list) list of lists - (str, str) 1st Dining Hall Title, 2nd URL to Menu  
    Raises:  
        None
    '''
    #Create BS4 object containing HTML for webpage
    main_url = "https://dining.ucsc.edu/eat/index.html"
    response = requests.get(main_url)
    if(response.status_code != 200):
        print("Error in connecting to website")
        return None
    else:
       print(response.status_code) 
    html = response.content
    soup = BeautifulSoup(html, "html.parser")

    dining_hall_buttons = []
    dining_hall_urls = []

    # Gets the first instance of an unordered list which contains all the information for each list
    dining_hall_list = soup.find("ul", "archive-list list-page")

    # Get all the a
    for a_tag in dining_hall_list.find_all("a", "btn btn-info"):
        dining_hall_buttons.append(a_tag)

    # Get all the a_tags within the list. a tags contain links to menu and dining hall title
    for a_tag in dining_hall_buttons:
        dining_hall_urls.append([a_tag.get("title"), a_tag.get("href")])

    return dining_hall_urls
    #print(soup.prettify().encode('utf-8').decode('ascii', 'ignore'))

def get_menu(url):
    '''
    Gets the menu for each link sent in list format where each entry is a list and each entry in those lists
    is a food item  
    Arguments:
        URL - str
    Returns:
        read_menu_frames - (list) frames for each dining hall - (BS4 Object) 
    Raises:
        None
    '''
    return read_menu_frames(make_frame(url))

def get_nutrion_info(url):
    '''
    Gets the menu for each link sent in list format where each entry is a list and each entry in those lists
    is a food item  
    Arguments:
        URL - str
    Returns:
        read_menu_frames - (list) frames for each dining hall - (BS4 Object) 
    Raises:
        None
    '''
    return read_nutrition_frames(make_frame(url))

def read_menu_frames(frame):
    '''
    Gets the food items for each menu for each dining hall and returns it as a list of strings  
    Arguments:
        frame - BS4 object
    Returns:
        food_items - (list) contains food items and meal times as lists with [food, pref] 
    Raises:
        None
    '''
    soup = make_soup_from_frame(frame)

    food_items = []
    for div in soup.find_all("div", {"class": ["menusamptitle", "menusampmeals", "menusamprecipes"]}):
        food = []
        if(div["class"][0] == 'menusamprecipes'):
            food.append(div.get_text())
            
            parent = div.parent
            siblings = parent.find_next_siblings()
            preferences = []
            for sibling in siblings:
                img = sibling.find("img")["src"]
                pref = img[13:-4]
                preferences.append(pref)

            food.append(preferences)
        else:
            food.append(div.get_text())
        food_items.append(food)
    print(food_items)
    return food_items

def read_nutrition_frames(frame):
    '''
    Gets the links to the food items nutritional information for each menu for each dining hall 
    and returns it as a list of strings  
    Arguments:
        frame - BS4 object
    Returns:
        food_items - (list) contains links to dining halls nutrition info list for food items
    Raises:
        None
    '''
    base_url = "https://nutrition.sa.ucsc.edu/"
    soup = make_soup_from_frame(frame)

    nutrition_urls = []
    nutrition_item_urls = []
    for div in soup.find_all("span", {"class": "menusampnutritive"}):
        link = (div.find('a').get("href"))
        url = base_url + link
        nutrition_urls.append(url)
    
    for url in nutrition_urls:
        soup = make_soup_from_url(url)
        for div in soup.find_all("div", {"class": "pickmenucoldispname"}):
            nutrition_item_urls.append(base_url + div.find("a").get("href"))
    return nutrition_item_urls

def make_soup_from_frame(frame):
    base_url = "https://nutrition.sa.ucsc.edu/"
    url = base_url + frame.get("src")
    return make_soup_from_url(url)

def make_soup_from_url(url):
    response = requests.get(url)
    html = response.content
    soup = BeautifulSoup(html, "html.parser")
    return soup

def make_frame(url):
    #Create BS4 object containing HTML for webpage
    response = requests.get(url)
    if(response.status_code != 200):
        print("Error in connecting to website")
        return None
    else:
       print(response.status_code) 
    html = response.content
    soup = BeautifulSoup(html, "html.parser")
    frame = soup.find("frame", title="main content window")
    return frame
