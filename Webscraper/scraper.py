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
        List - members: {type = lists} || members: {type = {str, str}}; 1st Dining Hall Title, 2nd URL to Menu
    Raises:
        None
    '''
    #Create BS4 object containing HTML for webpage
    main_url = "https://dining.ucsc.edu/eat/index.html"
    response = requests.get(main_url)
    if(response.status_code != 200):
        print("Error in connecting to website")
        return None
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
        List - members: {type = lists} || member {types = str}
    Raises:
        None
    '''
    #Create BS4 object containing HTML for webpage
    response = requests.get(url)
    html = response.content
    soup = BeautifulSoup(html, "html.parser")
    frame = soup.find("frame", title="main content window")

    return read_menu_frames(frame)
    #print(soup.prettify().encode('utf-8').decode('ascii', 'ignore'))
    
    '''
    for item in soup.find_all("div", "menusamprecipes"):
        print(item)
    '''

def read_menu_frames(frame):
    '''
    Gets the food items for each menu for each dining hall and returns it as a list of strings
    Arguments:
        frame - BS4 object
    Returns:
        List - members: {type = strings}
    Raises:
        None
    '''
    base_url = "https://nutrition.sa.ucsc.edu/"
    url = base_url + frame.get("src")
    response = requests.get(url)
    html = response.content
    soup = BeautifulSoup(html, "html.parser")

    food_items = []
    for div in soup.find_all("div", {"class": ["menusamptitle", "menusampmeals", "menusamprecipes"]}):
        food_items.append(div.get_text())
    #print(food_items)
    return food_items
    #print(soup.prettify().encode('utf-8').decode('ascii', 'ignore'))