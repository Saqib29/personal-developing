from selenium.webdriver.common.keys import Keys
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


chromedriver = "chromedriver/chromedriver"
driver = webdriver.Chrome(chromedriver)

driver.get("https://techwithtim.net/")

driver.maximize_window()


link = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.LINK_TEXT, "Tutorials")))
driver.execute_script("arguments[0].click()", link)

try:
    element = WebDriverWait.until(
        EC.presence_of_element_located(By.LINK_TEXT, "Biginner Python Tutorials")
    )
    element.click()

    element = WebDriverWait.until(
        EC.presence_of_element_located(By.ID, "sow-button-19310003")
    )
    element.click()
except:
    driver.back()
    time.sleep(10)
    driver.quit()
