if(DO_TEST["tabs_AUI-TS-001"]){
	// tabs_AUI-TS-001 test start

	driver.get(testPageUrl);
	driver.findElement(webdriver.By.css("#Tabs_AUI-TS-001")).click();

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0001_TAB1 > ul > li:nth-child(2)")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0001_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0001_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0001_T3", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0002_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0002_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0003_TAB1 > ul > li:nth-child(1)")).click();
	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0003_TAB1 > ul > li:nth-child(1)")).sendKeys(webdriver.Key.ARROW_RIGHT);
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0003_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0004_TAB1 > ul > li:nth-child(2)")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0004_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0005_TAB1 > div.Scroller > ul > li:nth-child(2)")).click();
	driver.findElement(webdriver.By.css("#testCase5-2 > div > ul > li:nth-child(2)")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0005_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0006_TAB1 > ul > li:nth-child(2)")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0006_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0007_TAB1 > div.Scroller > ul > li:nth-child(2)")).click();
	driver.findElement(webdriver.By.css("#testCase7-2 > div > ul > li:nth-child(2)")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0007_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0008_TAB1 > ul > li:nth-child(2) > button")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0008_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0009_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0009_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0010_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0010_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0011_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0011_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0012_TAB1 > ul > li:nth-child(1) > button")).click();
	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0012_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0012_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0013_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0013_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0014_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0014_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0014_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0015_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0015_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0015_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0016_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0016_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0016_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0016_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0016_T4", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0017_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0017_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0017_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0018_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0018_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0019_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0019_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0020_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0020_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0021_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0021_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0021_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0022_BTN1")).click();
	driver.sleep(1100);
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0022_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0023_BTN1")).click();
// 	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0023_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0024_BTN1")).click();
	driver.sleep(1100);
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0024_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0025_TAB1 > ul > li:nth-child(2)")).click();
	driver.sleep(1100);
	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0025_TAB1 > ul > li:nth-child(3)")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0025_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0025_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0026_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0026_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0027_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0027_T1", "S");
	driver.sleep(1100);
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0027_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0028_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0028_T1", "S");
	driver.sleep(1100);
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0028_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0029_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0029_T1", "S");
	
	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0030_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0030_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0031_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0031_T1", "S");
	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0031_TAB1 > ul > li:nth-child(2)")).click();
	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0031_BTN2")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0031_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0032_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0032_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0033_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0033_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-001-ATC-0034_TAB1 > ul > li:nth-child(3)")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '[tab3] 접근 권한이 없습니다.', acceptNextAlert);
	acceptNextAlert = true;
	alopexAssertTextContains("css", "#AUI-TS-001-ATC-0034_T1", "S");
	

	// /components/tabs test end
}