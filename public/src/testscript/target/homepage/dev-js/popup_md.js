if(DO_TEST.popup){
	// popup.md test start

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=popup#basic");
	driver.sleep(1000);

	driver.findElement(webdriver.By.id("btn_popup")).click();
	driver.sleep(200);
	driver.findElement(webdriver.By.xpath("//*[contains(@class, 'DialogBtn')]")).click();
	driver.sleep(200);
	driver.findElement(webdriver.By.id("btn_popupnoiframe")).click();
	driver.sleep(200);
	driver.findElement(webdriver.By.xpath("//*[contains(@class, 'DialogBtn')]")).click();
	driver.sleep(200);
	driver.findElement(webdriver.By.id("btn_windowpopup")).click();
	driver.sleep(0);
	alopexSwitchWindow(1);
	driver.sleep(2000);
	alopexGetEval('window.document.domain', 'VariablesOnlyForStoreEval');
	alopexAssertLocation(baseUrl + "/2.3/dev-js/popup/popup.html");
	alopexAssertTextContains('xpath', "//*[contains(@class, 'Button')]", "child");
	driver.executeScript('$a.close();');
	alopexSwitchWindow(0);
	driver.sleep(2000);
	driver.findElement(webdriver.By.id("btn_data_send")).click();
	driver.sleep(3000);
	alopexSwitchFrame(1);
	alopexAssertTextContains('id', "spanData", "red");
	alopexSwitchFrame(0);
	driver.findElement(webdriver.By.xpath("//*[contains(@class, 'DialogBtn')]")).click();
	driver.findElement(webdriver.By.id("btn_popupdata")).click();
	alopexSwitchFrame(1);
	driver.findElement(webdriver.By.id("btn_closePop")).click();
	/* @type String */
	var msg = seleniumIde.closeAlertAndGetItsText(driver, acceptNextAlert);
	acceptNextAlert = true;
	alopexAssertContains('id', "btn_popupdata", 'style', "color: red;");

	driver.findElement(webdriver.By.id("btn_popupOpts")).click();
	driver.findElement(webdriver.By.xpath("//*[contains(@class, 'DialogBtn')]")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'popup closed!', acceptNextAlert);
	acceptNextAlert = true;

	driver.findElement(webdriver.By.id("btn_popupOpts")).click();
	driver.findElement(webdriver.By.id("close1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'popup closed!', acceptNextAlert);
	acceptNextAlert = true;

	// popup.md test end
}