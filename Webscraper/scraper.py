from bs4 import BeautifulSoup
import requests

url = "https://dining.ucsc.edu/eat/index.html"
response = requests.get(url)
html = response.content

soup = BeautifulSoup(html, "lxml")
table = soup.find('tbody')
print(table.encode('utf-8').decode('ascii', 'ignore'))