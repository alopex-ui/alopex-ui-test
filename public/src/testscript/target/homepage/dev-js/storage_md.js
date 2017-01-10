if(DO_TEST.storage){
	// storage.md test start

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=storage#basic");
	driver.sleep(1000);

	driver.findElement(webdriver.By.id("myKey")).clear();
	driver.findElement(webdriver.By.id("myKey")).sendKeys("key1");
	driver.findElement(webdriver.By.id("myVal")).clear();
	driver.findElement(webdriver.By.id("myVal")).sendKeys("value1");

	driver.sleep(1000);
	driver.findElement(webdriver.By.id("btn_session")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'key1 세션 저장 성공', acceptNextAlert);
	acceptNextAlert = true;

	driver.findElement(webdriver.By.id("myVal")).clear();
	driver.sleep(1000);
	driver.findElement(webdriver.By.id("btn_session")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'key1 세션값 : value1', acceptNextAlert);
	acceptNextAlert = true;

	// storage.md test end
}