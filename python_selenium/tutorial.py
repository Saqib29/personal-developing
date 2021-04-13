from selenium import webdriver

chromedriver = "chromedriver/chromedriver"
driver = webdriver.Chrome(chromedriver)

driver.get("https://techwithtim.net")

print(driver.title)
driver.quit()