if(DO_TEST["Dateinput-AUI-TS-006"]){
	// Dateinput-AUI-TS-006 test start

	driver.get(testPageUrl);
	driver.findElement(webdriver.By.css("#Dateinput_AUI-TS-006")).click();

	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0001_INPUT")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-006-ATC-0001_INPUT > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0001_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0001_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0001_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0001_T4", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0001_T5", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0001_T6", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0001_T7", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0002_DIV > div > div.Calendar")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-006-ATC-0002_INPUT > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0002_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0002_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0002_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0002_T4", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0002_T5", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0002_T6", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0002_T7", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0003_INPUT")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-006-ATC-0003_INPUT > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0003_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0003_T2", "S");

 // AUI-TS-006-ATC-0004
 // 확인필요 focusout 시에 값이 사라짐

	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0005_INPUT")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-006-ATC-0005_INPUT > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0005_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0005_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0006_INPUT")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-006-ATC-0006_INPUT > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0006_T1", "S");
	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0006_DIV > div > div.Clear")).click();
	driver.sleep(200);
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0006_T2", "S");

// AUI-TS-006-ATC-0007
// 기본 선택 된 달을 click 하면 textinput 요소에 시스템상 이번 달이 표시되는가? (예: 201612) F 

	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0008_INPUT")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-006-ATC-0008_INPUT > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0008_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0008_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0008_T3", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0009_INPUT")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-006-ATC-0009_INPUT > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0009_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0009_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0009_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0009_T4", "S");

	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0010_T1", "S");

	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0011_T1", "S");

	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0012_T1", "S");

	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0013_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0014_INPUT")).click();
	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0014_DIV")).click();
	driver.sleep(1100);
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0014_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0015_BTN1")).click();
	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0015_BTN2")).click();
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0015_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0015_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0016_INPUT")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-006-ATC-0016_INPUT > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0016_T1", "S");
	driver.findElement(webdriver.By.css("#AUI-TS-006-ATC-0016_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-006-ATC-0016_T2", "S");

	// Dateinput-AUI-TS-006 test end
}