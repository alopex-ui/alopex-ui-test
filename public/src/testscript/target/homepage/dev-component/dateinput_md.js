if(DO_TEST.dateinput){
	// dateinput.md test start

	driver.get(baseUrl + "/2.3/dev-component/component.html?target=dateinput#basic");
	driver.sleep(1000);

	// 달력 떠 있는것 없어야 함 검증
	alopexIsElementNotPresent("css", "#datepicker_dateinput01");
	// placeholder 확인
	alopexAssertContains("css", "#dateinput01", "placeholder", "yyyy-MM-dd");
	driver.findElement(webdriver.By.css("#dateinput01")).click();
	// 수동체크 위치 확인
	// 달력 디폴트 오늘 날짜 표시 하고 있는지 확인
	alopexIsElementPresent("css", "#datepicker_dateinput01 > table > tbody tr > td > a.Today");
	// input 디폴트 오늘 날짜 표시 하고 있는지 확인
	alopexAssertContains("css", "#dateinput01", "value", new Date().format("yyyy-MM-dd"));
	// 현재 연도 확인
	alopexAssertTextContains("css", "#datepicker_dateinput01 span.CurrentYear", new Date().getFullYear());
	// 현재 월 확인
	alopexAssertTextContains("css", "#datepicker_dateinput01 span.CurrentMonth", (new Date().getMonth()%12 + 1));
	// 다음 연도 이동 버튼
	driver.findElement(webdriver.By.css("#datepicker_dateinput01 > div > div.SubheaderYear > span.NextYear > a")).click();
	// 다음 연도 확인
	alopexAssertTextContains("css", "#datepicker_dateinput01 span.CurrentYear", (Number(new Date().getFullYear()) + 1) + "");
	// 다음 월 이동 버튼
	driver.findElement(webdriver.By.css("#datepicker_dateinput01 > div > div.SubheaderMonth > span.NextMonth > a")).click();
	// 다음 월 확인 
	var today = new Date();
	var certainYear = today.getFullYear();
	var certainMonth = today.getMonth();
	alopexAssertTextContains("css", "#datepicker_dateinput01 span.CurrentMonth", (new Date(certainYear, certainMonth+1, 1).getMonth() + 1));
	// 달력 닫기 버튼
	driver.findElement(webdriver.By.css("#datepicker_dateinput01 > span > a.Control")).click();
	alopexIsElementNotPresent("css", "#datepicker_dateinput01");
	// input 디폴트 오늘 날짜 표시 하고 있는지 확인
	alopexAssertContains("css", "#dateinput01", "value", new Date().format("yyyy-MM-dd"));
	// blur 시 달력 없어짐 확인
	driver.findElement(webdriver.By.css("#dateinput01")).click();
	alopexIsElementPresent("css", "#datepicker_dateinput01");
	driver.findElement(webdriver.By.css("#Basic")).click();
	alopexIsElementNotPresent("css", "#datepicker_dateinput01");
	// 15일 선택 해보기
	driver.findElement(webdriver.By.css("#dateinput01")).click();
	driver.findElement(webdriver.By.css("#datepicker_dateinput01 > table > tbody > tr > td > a[href='#15']")).click();
	alopexAssertContains("css", "#dateinput01", "value", "15");
	alopexIsElementNotPresent("css", "#datepicker_dateinput01");
	// 다른 날짜 확인 (임의 날짜 - 15일 입력해보기)
	driver.findElement(webdriver.By.css("#dateinput01")).click();
	alopexAssertTextContains("css", "#datepicker_dateinput01 > table > tbody tr > td > a.Today", "15");
	alopexAssertContains("css", "#dateinput01", "value", "15");


	// class="Calendar"
	// placeholder 확인
	alopexAssertContains("css", "#dateinput02", "placeholder", "yyyy-MM-dd");
	// 버튼을 클릭해야 달력 활성화 됨을 확인
	driver.findElement(webdriver.By.css("#dateinput02")).click();
	alopexIsElementNotPresent("css", "#datepicker_dateinput02");
	driver.findElement(webdriver.By.css("#dateinput03")).click();
	alopexIsElementPresent("css", "#datepicker_dateinput02");
	driver.findElement(webdriver.By.css("#datepicker_dateinput02 > table > tbody > tr > td > a[href='#15']")).click();
	alopexAssertContains("css", "#dateinput02", "value", "15");

	// data-format
	
	// placeholder 확인
	alopexAssertContains("css", "#dateinput04", "placeholder", "MM/dd/yyyy");
	driver.findElement(webdriver.By.css("#dateinput04")).click();
	// 달력 닫기 버튼
	driver.findElement(webdriver.By.css("#datepicker_dateinput04 > span > a.Control")).click();
	// input 디폴트 오늘 날짜 표시 하고 있는지 확인
	alopexAssertContains("css", "#dateinput04", "value", new Date().format("MM/dd/yyyy"));


	// data-resetbutton
	driver.findElement(webdriver.By.css("#dateinput05")).click();
	alopexIsElementPresent("css", "#datepicker_dateinput05");
	alopexAssertContains("css", "#dateinput05", "value", new Date().format("yyyy-MM-dd"));
	driver.findElement(webdriver.By.css("#dateinputDiv05")).click();
	alopexAssertContains("css", "#dateinput05", "value", "");

	// data-pickertype
	driver.findElement(webdriver.By.css("#dateinput06")).click();
	alopexIsElementPresent("css", "#datepicker_dateinput06");
	alopexAssertContains("css", "#datepicker_dateinput06 > table", "summary", "날짜를 선택할 수 있는 달력입니다.");
	driver.findElement(webdriver.By.css("#dateinput07")).click();
	alopexIsElementPresent("css", "#datepicker_dateinput07");
	alopexAssertContains("css", "#datepicker_dateinput07 > table", "summary", "월을 선택할 수 있는 달력입니다.");

	// data-pickerposition
	driver.findElement(webdriver.By.css("#dateinput08")).click();
	alopexCompareInputAndDatePickerLocation("css", "#dateinput08", "css", "#datepicker_dateinput08", "x", 0);
	alopexCompareInputAndDatePickerLocation("css", "#dateinput08", "css", "#datepicker_dateinput08", "y", 31);
	driver.findElement(webdriver.By.css("#dateinput09")).click();
	// 모니터 해상도에 따라 다른 듯? 개인 PC에서 수치 추출하여 정해주자
	alopexCompareInputAndDatePickerLocation("css", "#dateinput09", "css", "#datepicker_dateinput09", "x", 152.796875);
	// alopexCompareInputAndDatePickerLocation("css", "#dateinput09", "css", "#datepicker_dateinput09", "x", 162.796875);
	alopexCompareInputAndDatePickerLocation("css", "#dateinput09", "css", "#datepicker_dateinput09", "y", 31);
	driver.findElement(webdriver.By.css("#dateinput10")).click();
	alopexCompareInputAndDatePickerLocation("css", "#dateinput10", "css", "#datepicker_dateinput10", "x", 0);
	alopexCompareInputAndDatePickerLocation("css", "#dateinput10", "css", "#datepicker_dateinput10", "y", 217);
	driver.findElement(webdriver.By.css("#dateinput11")).click();
	alopexCompareInputAndDatePickerLocation("css", "#dateinput11", "css", "#datepicker_dateinput11", "x", 152.796875);
	// 모니터 해상도에 따라 다른 듯? 개인 PC에서 수치 추출하여 정해주자
	// alopexCompareInputAndDatePickerLocation("css", "#dateinput11", "css", "#datepicker_dateinput11", "x", 162.796875);
	alopexCompareInputAndDatePickerLocation("css", "#dateinput11", "css", "#datepicker_dateinput11", "y", 217);

	// Select Element for Year / Month
	driver.findElement(webdriver.By.css("#dateinput12")).click();
	alopexIsElementPresent("css", "#datepicker_dateinput12 > div > div.af-subHeader-year.SubheaderYear > select");
	alopexIsElementPresent("css", "#datepicker_dateinput12 > div > div.af-subHeader-month.SubheaderMonth > select");

	// data-disabled
	driver.findElement(webdriver.By.css("#dateinput13")).click();
	alopexIsElementNotPresent("css", "#datepicker_dateinput13");

	// data-placeholder
	alopexAssertContains("css", "#dateinput14", "placeholder", "MM/dd/yyyy");

	// data-inputwidth
	alopexAssertContainsInComputedStyle("css", "#dateinput15", "width", "200");

	// data-default-date
	driver.findElement(webdriver.By.css("#dateinput16")).click();
	driver.findElement(webdriver.By.css("#datepicker_dateinput16 > span > a.Control")).click();
	alopexAssertContains("css", "#dateinput16", "value", "");

	// .setEnabled
	driver.findElement(webdriver.By.css("#dateinput17")).click();
	alopexIsElementPresent("css", "#datepicker_dateinput17");
	driver.findElement(webdriver.By.css("#btn_setEnabledFalse")).click();
	driver.findElement(webdriver.By.css("#dateinput17")).click();
	alopexIsElementNotPresent("css", "#datepicker_dateinput17");
	driver.findElement(webdriver.By.css("#btn_setEnabledTrue")).click();
	driver.findElement(webdriver.By.css("#dateinput17")).click();
	alopexIsElementPresent("css", "#datepicker_dateinput17");

	// .update(JSON option)
	driver.findElement(webdriver.By.css("#dateinput18")).click();
	alopexIsElementPresent("css", "#datepicker_dateinput18 > div > div.af-subHeader-month.SubheaderMonth > span.af-current-month.CurrentMonth");
	
	driver.findElement(webdriver.By.css("#btn_update1")).click();
	driver.findElement(webdriver.By.css("#dateinput18")).click();
	alopexIsElementNotPresent("css", "#datepicker_dateinput18 > div > div.af-subHeader-month.SubheaderMonth > span.af-current-month.CurrentMonth");

	driver.findElement(webdriver.By.css("#btn_update2")).click();
	driver.findElement(webdriver.By.css("#dateinput18")).click();
	alopexIsElementPresent("css", "#datepicker_dateinput18 > div > div.af-subHeader-month.SubheaderMonth > select");

	driver.findElement(webdriver.By.css("#btn_update3")).click();
	driver.findElement(webdriver.By.css("#dateinput18")).click();
	// 모니터 해상도에 따라 다른 듯? 개인 PC에서 수치 추출하여 정해주자
	alopexCompareInputAndDatePickerLocation("css", "#dateinput18", "css", "#datepicker_dateinput18", "x", 152.796875);
	// alopexCompareInputAndDatePickerLocation("css", "#dateinput18", "css", "#datepicker_dateinput18", "x", 162.796875);
	alopexCompareInputAndDatePickerLocation("css", "#dateinput18", "css", "#datepicker_dateinput18", "y", 217);

	// .clear()
	driver.findElement(webdriver.By.css("#dateinput19")).click();
	driver.findElement(webdriver.By.css("#btn_clear")).click();
	alopexAssertTextContains("css", "#dateinput19", "");

	// Daterange
	driver.findElement(webdriver.By.css("#dateinput20")).click();
	// mindate 15일 선택 해보기
	driver.findElement(webdriver.By.css("#datepicker_dateinput20 > table > tbody > tr > td > a[href='#15']")).click();
	alopexAssertContains("css", "#dateinput20", "value", "15");
	driver.findElement(webdriver.By.css("#dateinput21")).click();
	// maxdate 14일 선택 해보고, 선택 안되는지 확인
	driver.findElement(webdriver.By.css("#datepicker_dateinput21 > table > tbody > tr > td > a[href='#14']")).click();
	alopexAssertNotContains("css", "#dateinput21", "value", "14");
	driver.findElement(webdriver.By.css("#datepicker_dateinput21 > table > tbody > tr > td > a[href='#25']")).click();
	alopexAssertContains("css", "#dateinput21", "value", "25");
	driver.findElement(webdriver.By.css("#dateinput20")).click();
	// mindate 15일 선택 해보기
	driver.findElement(webdriver.By.css("#datepicker_dateinput20 > table > tbody > tr > td > a[href='#26']")).click();
	alopexAssertNotContains("css", "#dateinput20", "value", "26");
	driver.findElement(webdriver.By.css("#datepicker_dateinput20 > table > tbody > tr > td > a[href='#24']")).click();
	alopexAssertContains("css", "#dateinput20", "value", "24");
	
	
	// Weekday Basic 1
	var week = new Array('일', '월', '화', '수', '목', '금', '토');
	var week_en = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	var today = new Date();
	var tomorrow = new Date(today.valueOf() + (24*60*60*1000));
	var yesterday = new Date(today.valueOf() - (24*60*60*1000));
	alopexAssertContains("css", "#dateinput22", "style", "width");
	alopexAssertContains("css", "#dateinput22", "placeholder", "yyyy/MM/dd EEE요일");
	driver.findElement(webdriver.By.css("#dateinput23")).click();
	driver.findElement(webdriver.By.css("#datepicker_dateinput22 > table > tbody tr > td > a.Today")).click();
	alopexAssertContains("css", "#dateinput22", "value", week[today.getDay()] + "요일");
	alopexAssertContains("css", "#dateinput22", "value", today.getDate());

	if(tomorrow.getDate() != 1){
		driver.findElement(webdriver.By.css("#dateinput23")).click();
		driver.findElement(webdriver.By.css("#datepicker_dateinput22 > table > tbody > tr > td > a[href='#" + tomorrow.getDate() + "']")).click();
		alopexAssertContains("css", "#dateinput22", "value", week[tomorrow.getDay()] + "요일");
		alopexAssertContains("css", "#dateinput22", "value", tomorrow.getDate());
	}else{ // 1일이면 누를 수 없으니, 어제를 누른다.
		driver.findElement(webdriver.By.css("#dateinput23")).click();
		driver.findElement(webdriver.By.css("#datepicker_dateinput22 > table > tbody > tr > td > a[href='#" + yesterday.getDate() + "']")).click();
		alopexAssertContains("css", "#dateinput22", "value", week[yesterday.getDay()] + "요일");
		alopexAssertContains("css", "#dateinput22", "value", yesterday.getDate());
	}


	// Weekday Basic 2
	alopexAssertContains("css", "#dateinput24", "style", "width");
	alopexAssertContains("css", "#dateinput24", "placeholder", "EEEE MM/dd/yyyy");
	driver.findElement(webdriver.By.css("#dateinput25")).click();
	driver.findElement(webdriver.By.css("#datepicker_dateinput24 > table > tbody tr > td > a.Today")).click();
	alopexAssertContains("css", "#dateinput24", "value", week_en[today.getDay()]);
	alopexAssertContains("css", "#dateinput24", "value", today.getDate());

	if(tomorrow.getDate() != 1){
		driver.findElement(webdriver.By.css("#dateinput25")).click();
		driver.findElement(webdriver.By.css("#datepicker_dateinput24 > table > tbody > tr > td > a[href='#" + tomorrow.getDate() + "']")).click();
		alopexAssertContains("css", "#dateinput24", "value", week_en[tomorrow.getDay()]);
		alopexAssertContains("css", "#dateinput24", "value", tomorrow.getDate());
	}else{ // 1일이면 누를 수 없으니, 어제를 누른다.
		driver.findElement(webdriver.By.css("#dateinput25")).click();
		driver.findElement(webdriver.By.css("#datepicker_dateinput24 > table > tbody > tr > td > a[href='#" + yesterday.getDate() + "']")).click();
		alopexAssertContains("css", "#dateinput24", "value", week_en[yesterday.getDay()]);
		alopexAssertContains("css", "#dateinput24", "value", yesterday.getDate());
	}


	// dateinput.md test end
}