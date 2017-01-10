if(DO_TEST.daterange){
 	// daterange.md test start
 
 	driver.get(baseUrl + "/2.3/dev-component/component.html?target=daterange#basic");
 	driver.sleep(1000);
 
 	// Basic
 	// 달력 떠 있는것 없어야 함 검증
 	alopexIsElementNotPresent("css", "div.Datepicker");
 	driver.findElement(webdriver.By.css("#daterange01")).click();
 	alopexIsElementPresent("css", "#datepicker_daterange01");
 	alopexCompareInputAndDatePickerLocation("css", "#daterange01", "css", "#datepicker_daterange01", "x", 0);
 	alopexCompareInputAndDatePickerLocation("css", "#daterange01", "css", "#datepicker_daterange01", "y", 31);
 
 	// 달력 디폴트 오늘 날짜 표시 하고 있는지 확인
 	alopexIsElementPresent("css", "#datepicker_daterange01 > table > tbody tr > td > a.Today");
 	// 오늘 날짜 클릭
 	driver.findElement(webdriver.By.css("#datepicker_daterange01 > table > tbody tr > td > a.Today")).click();
 	// input 오늘 날짜 표시 하고 있는지 확인
 	alopexAssertContains("css", "#daterange01", "value", new Date().format("yyyy-MM-dd"));
 	// 달력 다시 열기
 	driver.findElement(webdriver.By.css("#daterange01")).click();
 	// 현재 연도 확인
 	alopexAssertTextContains("css", "#datepicker_daterange01 span.CurrentYear", new Date().getFullYear());
 	// 현재 월 확인
 	alopexAssertTextContains("css", "#datepicker_daterange01 span.CurrentMonth", (new Date().getMonth()%12 + 1));
 	// 다음 연도 이동 버튼
 	driver.findElement(webdriver.By.css("#datepicker_daterange01 > div > div.SubheaderYear > span.NextYear > a")).click();
 	// 다음 연도 확인
 	alopexAssertTextContains("css", "#datepicker_daterange01 span.CurrentYear", (Number(new Date().getFullYear()) + 1) + "");
 	// 다음 월 이동 버튼
 	driver.findElement(webdriver.By.css("#datepicker_daterange01 > div > div.SubheaderMonth > span.NextMonth > a")).click();
 	// 다음 월 확인
 	alopexAssertTextContains("css", "#datepicker_daterange01 span.CurrentMonth", ((new Date().getMonth()+1)%12 + 1));
 	// 달력 닫기 버튼
 	driver.findElement(webdriver.By.css("#datepicker_daterange01 > span > a.Control")).click();
 	alopexIsElementNotPresent("css", "#datepicker_daterange01");
 	// blur 시 달력 없어짐 확인
 	driver.findElement(webdriver.By.css("#daterange01")).click();
 	alopexIsElementPresent("css", "#datepicker_daterange01");
 	driver.findElement(webdriver.By.css("#Basic")).click();
 	alopexIsElementNotPresent("css", "#datepicker_daterange01");
 	// 15일 선택 해보기
 	driver.findElement(webdriver.By.css("#daterange01")).click();
 	driver.findElement(webdriver.By.css("#datepicker_daterange01 > table > tbody > tr > td > a[href='#15']")).click();
 	alopexAssertContains("css", "#daterange01", "value", "15");
 	alopexIsElementNotPresent("css", "#datepicker_daterange01");
 

 	// Daterange
 	driver.findElement(webdriver.By.css("#daterange01")).click();
 	// mindate 15일 선택 해보기
 	driver.findElement(webdriver.By.css("#datepicker_daterange01 > table > tbody > tr > td > a[href='#15']")).click();
 	alopexAssertContains("css", "#daterange01", "value", "15");
 	driver.findElement(webdriver.By.css("#daterange02")).click();
 	// maxdate 14일 선택 해보고, 선택 안되는지 확인
 	driver.findElement(webdriver.By.css("#datepicker_daterange02 > table > tbody > tr > td > a[href='#14']")).click();
 	alopexAssertNotContains("css", "#daterange02", "value", "14");
 	driver.findElement(webdriver.By.css("#datepicker_daterange02 > table > tbody > tr > td > a[href='#25']")).click();
 	alopexAssertContains("css", "#daterange02", "value", "25");
 	driver.findElement(webdriver.By.css("#daterange01")).click();
 	// mindate 15일 선택 해보기
 	driver.findElement(webdriver.By.css("#datepicker_daterange01 > table > tbody > tr > td > a[href='#26']")).click();
 	alopexAssertNotContains("css", "#daterange01", "value", "26");
 	driver.findElement(webdriver.By.css("#datepicker_daterange01 > table > tbody > tr > td > a[href='#24']")).click();
 	alopexAssertContains("css", "#daterange01", "value", "24");


 	// Startdate NoLimit
 	driver.findElement(webdriver.By.css("#daterange03")).click();
 	// mindate 15일 선택 해보기
 	driver.findElement(webdriver.By.css("#datepicker_daterange03 > table > tbody > tr > td > a[href='#15']")).click();
 	alopexAssertContains("css", "#daterange03", "value", "15");
 	driver.findElement(webdriver.By.css("#daterange04")).click();
 	// maxdate 14일 선택 해보고, 선택 안되는지 확인
 	driver.findElement(webdriver.By.css("#datepicker_daterange04 > table > tbody > tr > td > a[href='#14']")).click();
 	alopexAssertNotContains("css", "#daterange04", "value", "14");
 	driver.findElement(webdriver.By.css("#datepicker_daterange04 > table > tbody > tr > td > a[href='#25']")).click();
 	alopexAssertContains("css", "#daterange04", "value", "25");
 	driver.findElement(webdriver.By.css("#daterange03")).click();
 	// 26일 선택 되면서 Enddate가 초기화 된다.
 	driver.findElement(webdriver.By.css("#datepicker_daterange03 > table > tbody > tr > td > a[href='#26']")).click();
 	alopexAssertContains("css", "#daterange03", "value", "26");
 	alopexAssertEquals("css", "#daterange04", "value", "");
 	driver.findElement(webdriver.By.css("#daterange04")).click();
 	 driver.findElement(webdriver.By.css("#datepicker_daterange04 > table > tbody > tr > td > a[href='#15']")).click();
 	alopexAssertNotContains("css", "#daterange04", "value", "15");
 	driver.findElement(webdriver.By.css("#datepicker_daterange04 > table > tbody > tr > td > a[href='#27']")).click();
 	alopexAssertContains("css", "#daterange04", "value", "27");



 	// Enddate NoLimit
 	driver.findElement(webdriver.By.css("#daterange06")).click();
 	// mindate 15일 선택 해보기
 	driver.findElement(webdriver.By.css("#datepicker_daterange06 > table > tbody > tr > td > a[href='#25']")).click();
 	alopexAssertContains("css", "#daterange06", "value", "25");
 	driver.findElement(webdriver.By.css("#daterange05")).click();
 	// maxdate 14일 선택 해보고, 선택 안되는지 확인
 	driver.findElement(webdriver.By.css("#datepicker_daterange05 > table > tbody > tr > td > a[href='#26']")).click();
 	alopexAssertNotContains("css", "#daterange05", "value", "26");
 	driver.findElement(webdriver.By.css("#datepicker_daterange05 > table > tbody > tr > td > a[href='#15']")).click();
 	alopexAssertContains("css", "#daterange05", "value", "15");
 	driver.findElement(webdriver.By.css("#daterange06")).click();
 	// 26일 선택 되면서 Enddate가 초기화 된다.
 	driver.findElement(webdriver.By.css("#datepicker_daterange06 > table > tbody > tr > td > a[href='#14']")).click();
 	alopexAssertContains("css", "#daterange06", "value", "14");
 	alopexAssertEquals("css", "#daterange05", "value", "");
 	driver.findElement(webdriver.By.css("#daterange05")).click();
 	 driver.findElement(webdriver.By.css("#datepicker_daterange05 > table > tbody > tr > td > a[href='#15']")).click();
 	alopexAssertNotContains("css", "#daterange05", "value", "15");
 	driver.findElement(webdriver.By.css("#datepicker_daterange05 > table > tbody > tr > td > a[href='#12']")).click();
 	alopexAssertContains("css", "#daterange05", "value", "12");


 	// Startdate/Enddate input에 모두 NoLimit를 설정
 	driver.findElement(webdriver.By.css("#daterange07")).click();
 	// mindate 15일 선택 해보기
 	driver.findElement(webdriver.By.css("#datepicker_daterange07 > table > tbody > tr > td > a[href='#15']")).click();
 	alopexAssertContains("css", "#daterange07", "value", "15");
 	driver.findElement(webdriver.By.css("#daterange08")).click();
 	// maxdate 14일 선택 해보고, 선택 안되는지 확인
 	driver.findElement(webdriver.By.css("#datepicker_daterange08 > table > tbody > tr > td > a[href='#14']")).click();
 	alopexAssertContains("css", "#daterange08", "value", "14");
 	alopexAssertEquals("css", "#daterange07", "value", "");
 	driver.findElement(webdriver.By.css("#daterange07")).click();
 	// 26일 선택 되면서 Enddate가 초기화 된다.
 	driver.findElement(webdriver.By.css("#datepicker_daterange07 > table > tbody > tr > td > a[href='#16']")).click();
 	alopexAssertContains("css", "#daterange07", "value", "16");
 	alopexAssertEquals("css", "#daterange08", "value", "");
 	driver.findElement(webdriver.By.css("#daterange08")).click();
	driver.findElement(webdriver.By.css("#datepicker_daterange08 > table > tbody > tr > td > a[href='#25']")).click();
	alopexAssertContains("css", "#daterange07", "value", "16");
	alopexAssertContains("css", "#daterange08", "value", "25");

	// weekly
	alopexAssertContains("css", "#daterange09", "placeholder", "yyyy-MM-dd");
	alopexAssertContains("css", "#daterange10", "placeholder", "yyyy-MM-dd");
	driver.findElement(webdriver.By.css("#daterange09")).click();
	driver.findElement(webdriver.By.css("#datepicker_daterange09 > table > tbody > tr:nth-child(3) > td:nth-child(4) > a")).click();
	driver.findElement(webdriver.By.css("#daterange10")).click();
	alopexAssertContains("css", "#datepicker_daterange10 > table > tbody > tr:nth-child(2) > td:nth-child(7) > a", "class", "Disabled");
	alopexAssertNotContains("css", "#datepicker_daterange10 > table > tbody > tr:nth-child(3) > td:nth-child(1) > a", "class", "Disabled");
	alopexAssertNotContains("css", "#datepicker_daterange10 > table > tbody > tr:nth-child(3) > td:nth-child(7) > a", "class", "Disabled");
	alopexAssertNotContains("css", "#datepicker_daterange10 > table > tbody > tr:nth-child(4) > td:nth-child(1) > a", "class", "Disabled");
	driver.findElement(webdriver.By.css("#datepicker_daterange10 > table > tbody > tr:nth-child(3) > td:nth-child(4) > a")).click();
	driver.findElement(webdriver.By.css("#daterange09")).click();
	alopexAssertNotContains("css", "#datepicker_daterange09 > table > tbody > tr:nth-child(2) > td:nth-child(7) > a", "class", "Disabled");
	alopexAssertNotContains("css", "#datepicker_daterange09 > table > tbody > tr:nth-child(3) > td:nth-child(1) > a", "class", "Disabled");
	alopexAssertNotContains("css", "#datepicker_daterange09 > table > tbody > tr:nth-child(3) > td:nth-child(7) > a", "class", "Disabled");
	alopexAssertContains("css", "#datepicker_daterange09 > table > tbody > tr:nth-child(4) > td:nth-child(1) > a", "class", "Disabled");
	driver.findElement(webdriver.By.css("#datepicker_daterange09 > span > a")).click();

	// monthly
	alopexAssertContains("css", "#daterange11", "placeholder", "yyyy-MM");
	alopexAssertContains("css", "#daterange12", "placeholder", "yyyy-MM");
	driver.findElement(webdriver.By.css("#daterange11")).click();
	alopexAssertContains("css", "#datepicker_daterange11 > table", "summary", "월을 선택할 수 있는 달력입니다.");
	driver.findElement(webdriver.By.css("#daterange12")).click();
	alopexAssertContains("css", "#datepicker_daterange12 > table", "summary", "월을 선택할 수 있는 달력입니다.");
	driver.findElement(webdriver.By.css("#datepicker_daterange12 > span > a")).click();

	// data-selectmonth
	
	driver.findElement(webdriver.By.css("#daterange13")).click();
	alopexIsElementPresent("css", "#datepicker_daterange13 > div > div.af-subHeader-year.SubheaderYear > select");
	alopexIsElementPresent("css", "#datepicker_daterange13 > div > div.af-subHeader-month.SubheaderMonth > select");
	driver.findElement(webdriver.By.css("#daterange14")).click();
	alopexIsElementPresent("css", "#datepicker_daterange14 > div > div.af-subHeader-year.SubheaderYear > select");
	alopexIsElementPresent("css", "#datepicker_daterange14 > div > div.af-subHeader-month.SubheaderMonth > select");

	// data-enabled
	driver.findElement(webdriver.By.css("#daterange15")).click();
	alopexIsElementNotPresent("css", "#datepicker_daterange15");
	driver.findElement(webdriver.By.css("#daterange16")).click();
	alopexIsElementNotPresent("css", "#datepicker_daterange16");

	// data-placeholder
	alopexAssertContains("css", "#daterange17", "placeholder", "MM/dd/yyyy");
	alopexAssertContains("css", "#daterange18", "placeholder", "MM/dd/yyyy");
	driver.findElement(webdriver.By.css("#daterange17")).click();

	// #datepicker_daterange17 > table > tbody > tr:nth-child(3) > td:nth-child(7) > a

	driver.findElement(webdriver.By.css("#datepicker_daterange17 > table > tbody > tr > td > a[href='#15']")).click();
	alopexAssertContains("css", "#daterange17", "value", "/15/");
	driver.findElement(webdriver.By.css("#daterange18")).click();
	driver.findElement(webdriver.By.css("#datepicker_daterange18 > table > tbody > tr > td > a[href='#20']")).click();
	alopexAssertContains("css", "#daterange18", "value", "/20/");

	// .setEnabled(boolean)
	driver.findElement(webdriver.By.css("#daterange19")).click();
	alopexIsElementPresent("css", "#datepicker_daterange19");
	driver.findElement(webdriver.By.css("#daterange20")).click();
	alopexIsElementPresent("css", "#datepicker_daterange20");
	driver.findElement(webdriver.By.css("#btn_setEnabledFalse")).click();
	driver.findElement(webdriver.By.css("#daterange19")).click();
	alopexIsElementNotPresent("css", "#datepicker_daterange19");
	driver.findElement(webdriver.By.css("#daterange20")).click();
	alopexIsElementNotPresent("css", "#datepicker_daterange20");
	driver.findElement(webdriver.By.css("#btn_setEnabledTrue")).click();
	driver.findElement(webdriver.By.css("#daterange19")).click();
	alopexIsElementPresent("css", "#datepicker_daterange19");
	driver.findElement(webdriver.By.css("#daterange20")).click();
	alopexIsElementPresent("css", "#datepicker_daterange20");
	driver.findElement(webdriver.By.css("#datepicker_daterange20 > span > a")).click();

	// .update(JSON option)
	driver.findElement(webdriver.By.css("#daterange21")).click();
	alopexIsElementPresent("css", "#datepicker_daterange21");
	alopexAssertContains("css", "#datepicker_daterange21 > table", "summary", "날짜를 선택할 수 있는 달력입니다.");
	driver.findElement(webdriver.By.css("#daterange22")).click();
	alopexAssertContains("css", "#datepicker_daterange22 > table", "summary", "날짜를 선택할 수 있는 달력입니다.");
	driver.findElement(webdriver.By.css("#datepicker_daterange22 > span > a")).click();
	driver.findElement(webdriver.By.css("#btn_update1")).click();
	driver.findElement(webdriver.By.css("#daterange21")).click();
	alopexIsElementPresent("css", "#datepicker_daterange21");
	alopexAssertContains("css", "#datepicker_daterange21 > table", "summary", "월을 선택할 수 있는 달력입니다.");
	driver.findElement(webdriver.By.css("#daterange22")).click();
	alopexIsElementPresent("css", "#datepicker_daterange22");
	alopexAssertContains("css", "#datepicker_daterange22 > table", "summary", "월을 선택할 수 있는 달력입니다.");
	driver.findElement(webdriver.By.css("#datepicker_daterange22 > span > a")).click();
	driver.findElement(webdriver.By.css("#btn_update2")).click();
	driver.findElement(webdriver.By.css("#daterange21")).click();
	alopexIsElementPresent("css", "#datepicker_daterange21 > div > div.af-subHeader-year.SubheaderYear > select");
	alopexIsElementPresent("css", "#datepicker_daterange21 > div > div.af-subHeader-month.SubheaderMonth > select");
	driver.findElement(webdriver.By.css("#daterange22")).click();
	alopexIsElementPresent("css", "#datepicker_daterange22 > div > div.af-subHeader-year.SubheaderYear > select");
	alopexIsElementPresent("css", "#datepicker_daterange22 > div > div.af-subHeader-month.SubheaderMonth > select");
	driver.findElement(webdriver.By.css("#datepicker_daterange22 > span > a")).click();

	// .clear()
	driver.findElement(webdriver.By.css("#daterange23")).click();
	driver.findElement(webdriver.By.css("#datepicker_daterange23 > table > tbody > tr > td > a[href='#15']")).click();
	driver.findElement(webdriver.By.css("#daterange24")).click();
	driver.findElement(webdriver.By.css("#datepicker_daterange24 > table > tbody > tr > td > a[href='#25']")).click();
	alopexAssertContains("css", "#daterange23", "value", '15');
	alopexAssertContains("css", "#daterange24", "value", '25');
	driver.findElement(webdriver.By.css("#btn_clear")).click();
	alopexAssertEquals("css", "#daterange23", "value", '');
	alopexAssertEquals("css", "#daterange24", "value", '');

	
 	// daterange.md test end
 }