from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 
import time


chromedriver = "chromedriver/chromedriver"
driver = webdriver.Chrome(chromedriver)


driver.get("https://techwithtim.net")
print(driver.title)


driver.maximize_window()

search = driver.find_element_by_name("s")
search.send_keys("test")
search.send_keys(Keys.RETURN)

try:
    main = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "main"))
    )
    articles = main.find_elements_by_tag_name("article")

    for article in articles:
        post = article.find_element_by_class_name("entry-summary")
        print(post.text)
finally:
    driver.quit()


