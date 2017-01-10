if(DO_TEST.navigation){
	// navigation.md test start

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=navigate#basic");
	driver.sleep(1000);

	driver.findElement(webdriver.By.id("btn_navigate1")).click();
	driver.navigate().back();
	driver.findElement(webdriver.By.id("btn_navigate_back")).click();
	driver.findElement(webdriver.By.id("btn_navigate_next")).click();
	driver.findElement(webdriver.By.id("btn_navigate_next")).click();
	driver.findElement(webdriver.By.id("btn_navigate_next")).click();
	driver.findElement(webdriver.By.id("btn_back")).click();
	driver.findElement(webdriver.By.id("btn_back")).click();
	driver.findElement(webdriver.By.id("btn_back")).click();
	driver.findElement(webdriver.By.id("btn_back")).click();

	// navigation.md test end
}
