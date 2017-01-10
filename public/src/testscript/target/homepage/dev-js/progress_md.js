if(DO_TEST.progress){
	// progress.md test start

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=overlay#basic");
	driver.sleep(1000);

	driver.findElement(webdriver.By.id("overlayStart")).click();
	alopexIsElementPresent('css', "div.alopex_overlay");
	driver.findElement(webdriver.By.id("overlayEnd")).click();
	alopexIsElementNotPresent('css', "div.alopex_overlay");

	driver.findElement(webdriver.By.id("progressStart")).click();
	alopexIsElementPresent('css', "div.alopex_progress_block");
	driver.findElement(webdriver.By.id("progressEnd")).click();
	alopexIsElementNotPresent('css', "div.alopex_overlay");
	alopexIsElementNotPresent('css', "div.alopex_progress_block");
	driver.findElement(webdriver.By.id("button_show")).click();
	alopexIsElementPresent('css', "div.alopex_overlay");
	alopexIsElementPresent('xpath', "//div[@id='document-content-body-loadhtml']/div/div[5]/div/div/div[2]");
	driver.findElement(webdriver.By.id("button_hide")).click();
	driver.sleep(1000);
	alopexIsElementNotPresent('css', "div.alopex_overlay");
	alopexIsElementNotPresent('xpath', "//div[@id='document-content-body-loadhtml']/div/div[5]/div/div/div[2]");

	driver.findElement(webdriver.By.id("refreshButton")).click();
	alopexIsElementPresent('css', "div.alopex_overlay");
	alopexIsElementPresent('css', "div.alopex_progress_block");
	driver.sleep(1000);
	alopexIsElementNotPresent('css', "div.alopex_overlay");
	alopexIsElementNotPresent('css', "div.alopex_progress_block");
	alopexIsElementPresent('xpath', "//div[2]/div[2]/div[2]/div[2]/div/div/div[6]/div/div/div/div/div/ul/li[1]");

	driver.findElement(webdriver.By.id("refreshButton")).click();
	alopexIsElementPresent('css', "div.alopex_overlay");
	alopexIsElementPresent('css', "div.alopex_progress_block");
	driver.sleep(1000);
	alopexIsElementNotPresent('css', "div.alopex_overlay");
	alopexIsElementNotPresent('css', "div.alopex_progress_block");
	alopexIsElementPresent('xpath', "//div[2]/div[2]/div[2]/div[2]/div/div/div[6]/div/div/div/div/div/ul/li[1]");

	// progress.md test end
}