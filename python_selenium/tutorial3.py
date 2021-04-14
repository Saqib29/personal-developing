from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

chromedriver = "chromedriver/chromedriver"
driver = webdriver.Chrome(chromedriver)

driver.get("https://orteil.dashnet.org/cookieclicker/")

driver.maximize_window()


driver.implicitly_wait(10)

cookie = driver.find_elements_by_id("bigCookie")
cookie_count = driver.find_elements_by_id("cookies")
items = [driver.find_elements_by_id("productPrice" + str(i)) for i in range(1,-1, -1)]

actions = ActionChains(driver)
actions.click(cookie)

for i in range(100):
    actions.perform()
    