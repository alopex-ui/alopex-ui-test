if(DO_TEST.page){
	// page.md test start

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=page#basic");
	driver.sleep(1000);

	driver.findElement(webdriver.By.id("btn_page")).click();
	driver.sleep(1000);
	// localhost 일 때, Alopex Grid lib. license alert에 대한 예외 처리
	if(baseUrl.search("localhost") >= 0){
	    seleniumIde.closeAlertAndAssertItsText(driver, 'AlopexGrid trial invalid domain', acceptNextAlert);
	    acceptNextAlert = true;  
	}
	alopexAssertTextContains("css", "body > div:nth-child(3) > span", 'target=page');
	driver.findElement(webdriver.By.id("btn_request")).click();
	driver.sleep(500);
	seleniumIde.closeAlertAndAssertItsText(driver, 'success!!', acceptNextAlert);
	acceptNextAlert = true;  
	driver.navigate().back();

	// page.md test end
}