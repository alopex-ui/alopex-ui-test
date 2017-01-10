if(DO_TEST.convert){
	// convert.md test start

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=convert#basic");
	driver.sleep(1000);

	alopexAssertContains("id", "already", "data-converted", "true");
	alopexIsElementNotPresent("css", "#targetConvert > input");
	alopexIsElementNotPresent("css", "#target > input");

	driver.findElement(webdriver.By.id("btn_add")).click();
	alopexIsElementPresent("css", "#targetConvert > input");
	alopexIsElementPresent("css", "#target > input");
	alopexAssertContains("css", "#targetConvert > input", "data-converted", "true");
	alopexAssertContains("css", "#target > input", "data-converted", null);

	driver.findElement(webdriver.By.id("btn_convert")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'converted', acceptNextAlert);
	acceptNextAlert = true;
	alopexAssertContains("css", "#target > input", "data-converted", "true");


	// convert.md test end
}