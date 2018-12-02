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
    SUCCESS_CODE = 200
    #Create BS4 object containing HTML for webpage
    main_url = "https://dining.ucsc.edu/eat/index.html"
    response = requests.get(main_url)
    if(response.status_code != SUCCESS_CODE):
        print("Error in connecting to website")
        return -1
    else:
       print("response code: ", response.status_code)
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
    CLASS_NAME = 0
    print("Getting items for dining hall")
    base_url = "https://nutrition.sa.ucsc.edu/"
    soup = make_soup_from_frame(frame)

    food_items = []
    for div in soup.find_all(True, {"class": ["menusamptitle", "menusampmeals", "menusampnutritive"]}):
        food = []
        #If the item is a link to the food item page, go there
        if(div["class"][CLASS_NAME] == 'menusampnutritive'):
            #Gets the link to the food page
            link = (div.find('a').get("href"))
            url = base_url + link
            inner_soup = make_soup_from_url(url)
            
            #Gets all the food on that page
            for inner_div in inner_soup.find_all("div", {"class": "pickmenucoldispname"}):
                food = []
                
                parent = inner_div.parent
                siblings = parent.find_next_siblings()
                preferences = []

                for sibling in siblings:
                    img = sibling.find("img")["src"]
                    pref = img[13:-4]
                    pref = convert_img_name(pref)
                    preferences.append(pref)

                food.append(inner_div.find("a").get_text())
                food.append(preferences)
                food.append(base_url + inner_div.find("a").get("href"))

                food_items.append(food)
        else:
            food.append(div.get_text())
            food_items.append(food)
    return food_items

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
    SUCCESS_CODE = 200
    #Create BS4 object containing HTML for webpage
    response = requests.get(url)
    if(response.status_code != SUCCESS_CODE):
        print("Error in connecting to website")
        return None
    else:
       print("response code: ", response.status_code)  
    html = response.content
    soup = BeautifulSoup(html, "html.parser")
    frame = soup.find("frame", title="main content window")
    return frame

def convert_img_name(name):
    if(name.lower() == "eggs"):
        return "Eggs"
    elif(name.lower() == "fish"):
        return "Fish"
    elif(name.lower() == "gluten"):
        return "Gluten Free"
    elif(name.lower() == "milk"):
        return "Dairy"
    elif(name.lower() == "nuts"):
        return "Peanuts and/or Tree Nuts"
    elif(name.lower() == "soy"):
        return "Soy"
    elif(name.lower() == "vegan"):
        return "Vegan"
    elif(name.lower() == "veggie"):
        return "Vegetarian"
    elif(name.lower() == "pork"):
        return "Pork"
    elif(name.lower() == "beef"):
        return "Beef"
    elif(name.lower() == "halal"):
        return "Halal"
    elif(name.lower() == "kosher-ingredients"):
        return "Kosher Ingredients"
    else:
        return name