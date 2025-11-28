import requests
from bs4 import BeautifulSoup

url = "https://demo.goodlayers.com/cannamed/demo3/"
response = requests.get(url)
html_content = response.text
print(html_content)   