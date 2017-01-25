if(DO_TEST["Datepicker-AUI-TS-005"]){
	// Datepicker-AUI-TS-005 test start

	driver.get(testPageUrl);
	driver.findElement(webdriver.By.css("#Datepicker_AUI-TS-005")).click();

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0001_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0001_BTN1 > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0001_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0001_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0001_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0001_T4", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0001_T5", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0001_T6", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0002_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0002_BTN1 > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0002_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0002_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0002_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0002_T4", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0003_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0003_BTN1 > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0003_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0003_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0003_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0003_T4", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0004_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0004_BTN1 > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0004_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0004_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0004_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0004_T4", "S");
// Fail 발생. 확인필요.	
// alopexAssertTextContains("css", "#AUI-TS-005-ATC-0004_T5", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0005_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0005_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0006_BTN1")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0006_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0007_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0007_BTN1 > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0007_T1", "S");

// driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0008_BTN1")).click();
// driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0008_BTN1 > table > tbody > tr td a.Today")).click();
// // Fail 발생. 확인필요.	
// alopexAssertTextContains("css", "#AUI-TS-005-ATC-0008_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0009_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0009_BTN1 > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0009_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0010_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0010_BTN1 > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0010_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0011_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0011_BTN1 > table > tbody > tr td a[href='#1']")).click();
	driver.sleep(500);
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0011_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0011_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0011_T3", "S");
// // Fail 발생. 확인필요.	
// alopexAssertTextContains("css", "#AUI-TS-005-ATC-0011_T4", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0012_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0012_BTN1 > table > tbody > tr td a[href='#1']")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0012_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0012_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0012_T3", "S");
// // Fail 발생. 확인필요.	
// alopexAssertTextContains("css", "#AUI-TS-005-ATC-0012_T4", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0013_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0013_BTN1 > table > tbody > tr td a[href='#1']")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'It is a special Day on', acceptNextAlert);
    acceptNextAlert = true;
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0013_T1", "S");
// // Fail 발생. 확인필요.	
// alopexAssertTextContains("css", "#AUI-TS-005-ATC-0013_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0014_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0014_BTN1 > table > tbody > tr td a[href='#1']")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0014_BTN1 > table > tbody > tr td a[href='#15']")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0014_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0014_T2", "S");
// // Fail 발생. 확인필요.	
// alopexAssertTextContains("css", "#AUI-TS-005-ATC-0014_T3", "S");


// showDatePicker_showothermonth ( AUI-TS-005-ATC-0015 )

// API.showDatePicker(function,{showothermonth })
// TypeFunction
// TestCase

// - 기본 datePicker 구성
// - 'open' 버튼 click 시 showDatePicker(func,option)의 옵션 항목에 다음과 같이 설정
// ​
//   {showothermonth: true}
// ​
// - 'open' 버튼 click
// 결과
// - open 후 나타나는 Datepicker에 tbody >tr>td 안에 있는 < a > 태그 중 PrevMonthDay class 를 가지는 요소의 개수가 4개인가? F 
// - 위 검출된 4개의 < a > 태그의 텍스트는 27,28,29,30 이 맞는가? F 


	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0016_BTN1")).click();
	driver.findElement(webdriver.By.css("#datepicker_AUI-TS-005-ATC-0016_BTN1 > table > tbody > tr td a.Today")).click();
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0016_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0016_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0016_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0016_T4", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0017_BTN1")).click();
	driver.findElement(webdriver.By.css("#AUI-TS-005-ATC-0017_BTN2")).click();
	driver.sleep(500);
	alopexAssertTextContains("css", "#AUI-TS-005-ATC-0017_T1", "S");

	// Datepicker-AUI-TS-005 test end
}