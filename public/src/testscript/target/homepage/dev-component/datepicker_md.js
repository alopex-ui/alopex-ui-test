if(DO_TEST.datepicker){
 	// datepicker.md test start
 
 	driver.get(baseUrl + "/2.3/dev-component/component.html?target=datepicker#basic");
 	driver.sleep(1000);
 
 	// Basic
 	// 달력 떠 있는것 없어야 함 검증
 	alopexIsElementNotPresent("css", "#datepicker_btn_basic");
 	driver.findElement(webdriver.By.css("#btn_basic")).click();
 	alopexIsElementPresent("css", "#datepicker_btn_basic");
 	alopexCompareInputAndDatePickerLocation("css", "#btn_basic", "css", "#datepicker_btn_basic", "x", 0);
 	alopexCompareInputAndDatePickerLocation("css", "#btn_basic", "css", "#datepicker_btn_basic", "y", 31);
 
 	// 달력 디폴트 오늘 날짜 표시 하고 있는지 확인
 	alopexIsElementPresent("css", "#datepicker_btn_basic > table > tbody tr > td > a.Today");
 	// 오늘 날짜 클릭
 	driver.findElement(webdriver.By.css("#datepicker_btn_basic > table > tbody tr > td > a.Today")).click();
 	// input 오늘 날짜 표시 하고 있는지 확인
 	alopexAssertContains("css", "#result1", "value", new Date().format("yyyyMMdd"));
 	// 달력 다시 열기
 	driver.findElement(webdriver.By.css("#btn_basic")).click();
 	// 현재 연도 확인
 	alopexAssertTextContains("css", "#datepicker_btn_basic span.CurrentYear", new Date().getFullYear());
 	// 현재 월 확인
 	alopexAssertTextContains("css", "#datepicker_btn_basic span.CurrentMonth", (new Date().getMonth()%12 + 1));
 	// 다음 연도 이동 버튼
 	driver.findElement(webdriver.By.css("#datepicker_btn_basic > div > div.SubheaderYear > span.NextYear > a")).click();
 	// 다음 연도 확인
 	alopexAssertTextContains("css", "#datepicker_btn_basic span.CurrentYear", (Number(new Date().getFullYear()) + 1) + "");
 	// 다음 월 이동 버튼
 	driver.findElement(webdriver.By.css("#datepicker_btn_basic > div > div.SubheaderMonth > span.NextMonth > a")).click();
 	// 다음 월 확인
 	alopexAssertTextContains("css", "#datepicker_btn_basic span.CurrentMonth", ((new Date().getMonth()+1)%12 + 1));
 	// 달력 닫기 버튼
 	driver.findElement(webdriver.By.css("#datepicker_btn_basic > span > a.Control")).click();
 	alopexIsElementNotPresent("css", "#datepicker_btn_basic");
 	// blur 시 달력 없어짐 확인
 	driver.findElement(webdriver.By.css("#btn_basic")).click();
 	alopexIsElementPresent("css", "#datepicker_btn_basic");
 	driver.findElement(webdriver.By.css("#Basic")).click();
 	alopexIsElementNotPresent("css", "#datepicker_btn_basic");
 	// 15일 선택 해보기
 	driver.findElement(webdriver.By.css("#btn_basic")).click();
 	driver.findElement(webdriver.By.css("#datepicker_btn_basic > table > tbody > tr > td > a[href='#15']")).click();
 	alopexAssertContains("css", "#result1", "value", "15");
 	alopexIsElementNotPresent("css", "#datepicker_btn_basic");
 
 	// data-format="MM/dd/yyyy"
 	driver.findElement(webdriver.By.css("#datepicker01")).click();
 	alopexIsElementPresent("css", "#datepicker_datepicker01");
 	alopexCompareInputAndDatePickerLocation("css", "#datepicker01", "css", "#datepicker_datepicker01", "x", 0);
 	alopexCompareInputAndDatePickerLocation("css", "#datepicker01", "css", "#datepicker_datepicker01", "y", 31);
 
 	// 달력 디폴트 오늘 날짜 표시 하고 있는지 확인
 	alopexIsElementPresent("css", "#datepicker_datepicker01 > table > tbody tr > td > a.Today");
 	// input 오늘 날짜 표시 하고 있는지 확인
 	alopexAssertContains("css", "#datepicker01", "value", new Date().format("MM/dd/yyyy"));
 	driver.findElement(webdriver.By.css("#datepicker_datepicker01 > table > tbody > tr > td > a[href='#15']")).click();
 	alopexAssertContains("css", "#datepicker01", "value", "15");
 	alopexIsElementNotPresent("css", "#datepicker_datepicker01");
 
 	// Daterange
 	driver.findElement(webdriver.By.css("#datepicker02")).click();
 	// mindate 15일 선택 해보기
 	driver.findElement(webdriver.By.css("#datepicker_datepicker02 > table > tbody > tr > td > a[href='#15']")).click();
 	alopexAssertContains("css", "#datepicker02", "value", "15");
 	driver.findElement(webdriver.By.css("#datepicker03")).click();
 	driver.sleep(200);
 	// maxdate 14일 선택 해보고, 선택 안되는지 확인
 	driver.findElement(webdriver.By.css("#datepicker_datepicker03 > table > tbody > tr > td > a[href='#14']")).click();
 	alopexAssertNotContains("css", "#datepicker03", "value", "14");
 	driver.findElement(webdriver.By.css("#datepicker_datepicker03 > table > tbody > tr > td > a[href='#25']")).click();
 	alopexAssertContains("css", "#datepicker03", "value", "25");
 	driver.findElement(webdriver.By.css("#datepicker02")).click();
 	driver.sleep(200);
 	// mindate 15일 선택 해보기
 	driver.findElement(webdriver.By.css("#datepicker_datepicker02 > table > tbody > tr > td > a[href='#26']")).click();
 	alopexAssertNotContains("css", "#datepicker02", "value", "26");
 	driver.findElement(webdriver.By.css("#datepicker_datepicker02 > table > tbody > tr > td > a[href='#24']")).click();
 	alopexAssertContains("css", "#datepicker02", "value", "24");
 
 
 	// .showDatePicker(function callback, JSON option)
 	driver.findElement(webdriver.By.css("#btn_yearmonth")).click();
 	alopexIsElementPresent("css", "#datepicker_btn_yearmonth > div > div.af-subHeader-year.SubheaderYear > select");
 	alopexIsElementPresent("css", "#datepicker_btn_yearmonth > div > div.af-subHeader-month.SubheaderMonth > select");
 
 
 	// monthly
 	driver.findElement(webdriver.By.css("#button1")).click();
 	alopexIsElementPresent("css", "#datepicker_button1");
 	alopexAssertContains("css", "#datepicker_button1 > table", "summary", "월을 선택할 수 있는 달력입니다.");
 
 
 	// inline
 	// 최초부터 inline으로 존재
 	alopexIsElementPresent("css", "#datepicker_datepickerArea");
 	alopexAssertContains("css", "#datepicker_datepickerArea", "class", "Inline");
 	driver.findElement(webdriver.By.css("#datepicker_datepickerArea > table > tbody > tr > td > a[href='#15']")).click();
 	alopexAssertContains("css", "#result_inlineDP", "value", "15");
 	// 안 사라지고 존재
 	alopexIsElementPresent("css", "#datepicker_datepickerArea");
 
 	// Locale
 	// 한국어
 	driver.findElement(webdriver.By.css("#locale")).click();
 	driver.findElement(webdriver.By.css("#locale > option[value='ko']")).click();
 	driver.findElement(webdriver.By.css("#btn_locale")).click();
 	alopexAssertTextContains("css", "#datepicker_btn_locale > table > thead > tr > th:nth-child(2)", "월");
 	// 영어
 	driver.findElement(webdriver.By.css("#locale")).click();
 	driver.findElement(webdriver.By.css("#locale > option[value='en']")).click();
 	driver.findElement(webdriver.By.css("#btn_locale")).click();
 	alopexAssertTextContains("css", "#datepicker_btn_locale > table > thead > tr > th:nth-child(2)", "Mon");
 	// 중국어
 	driver.findElement(webdriver.By.css("#locale")).click();
 	driver.findElement(webdriver.By.css("#locale > option[value='zh']")).click();
 	driver.findElement(webdriver.By.css("#btn_locale")).click();
 	alopexAssertTextContains("css", "#datepicker_btn_locale > table > thead > tr > th:nth-child(2)", "一");
 	// 일본어
 	driver.findElement(webdriver.By.css("#locale")).click();
 	driver.findElement(webdriver.By.css("#locale > option[value='ja']")).click();
 	driver.findElement(webdriver.By.css("#btn_locale")).click();
 	alopexAssertTextContains("css", "#datepicker_btn_locale > table > thead > tr > th:nth-child(2)", "月");
 
 
 	// Format을 설정. 
 	driver.findElement(webdriver.By.css("#btn_format")).click();
 	driver.findElement(webdriver.By.css("#btn_format")).click();
 	// 오늘 날짜 클릭
 	driver.findElement(webdriver.By.css("#datepicker_btn_format > table > tbody > tr > td > a.Today")).click();
 
 	// input 오늘 날짜 표시 하고 있는지 확인
 	alopexAssertContains("css", "#result_format", "value", new Date().format("yyyyMMdd"));
 	// 포맷 변환 테스트
 	driver.findElement(webdriver.By.css("#inputFormat")).clear();
 	driver.findElement(webdriver.By.css("#inputFormat")).sendKeys('yyyy-MM-dd(EEE)');
 
 	driver.findElement(webdriver.By.css("#btn_format")).click();
 	// 오늘 날짜 클릭
 	driver.findElement(webdriver.By.css("#datepicker_btn_format > table > tbody tr > td > a.Today")).click();
 	
 	var week = new Array('일', '월', '화', '수', '목', '금', '토');
 	var today = new Date();
 	// input 오늘 날짜 표시 하고 있는지 확인
 	alopexAssertContains("css", "#result_format", "value", today.format('yyyy-MM-dd') + "(" + week[today.getDay()] + ")");
 
 	// DatePicker의 초기 선택 날짜
 	driver.findElement(webdriver.By.css("#year")).clear();
 	driver.findElement(webdriver.By.css("#year")).sendKeys('1999');
 	driver.findElement(webdriver.By.css("#month")).clear();
 	driver.findElement(webdriver.By.css("#month")).sendKeys('8');
 	driver.findElement(webdriver.By.css("#day")).clear();
 	driver.findElement(webdriver.By.css("#day")).sendKeys('7');
 
 	driver.findElement(webdriver.By.css("#button")).click();
 
 	// 해당 연도 확인
 	alopexAssertTextContains("css", "#datepicker_button span.CurrentYear", '1999');
 	// 해당 월 확인
 	alopexAssertTextContains("css", "#datepicker_button span.CurrentMonth", '8');
 	// 해당 일 확인
 	alopexAssertTextContains("css", "#datepicker_button > table > tbody tr > td > a.Today", "7");
 	// 하이라이트 날짜 클릭
 	driver.findElement(webdriver.By.css("#datepicker_button > table > tbody tr > td > a.Today")).click();
 	// 클릭 날짜 input에서 확인
 	alopexAssertContains("css", "#result", "value", "19990807");
 
 	// certainDates
 	driver.findElement(webdriver.By.css("#btn_certainDate")).click();
 	driver.findElement(webdriver.By.css("#datepicker_btn_certainDate > div > div.SubheaderMonth > span.NextMonth > a")).click();
 	driver.sleep(200);
 	driver.findElement(webdriver.By.css("#datepicker_btn_certainDate > div > div.SubheaderMonth > span.NextMonth > a")).click();
 	driver.sleep(200);
 	alopexAssertContains("css", "#datepicker_btn_certainDate > table > tbody > tr > td > a[href='#2']", "class", "special");
 	alopexAssertContains("css", "#datepicker_btn_certainDate > table > tbody > tr > td > a[href='#2']", "title", "특별 휴일");
 	alopexAssertContains("css", "#datepicker_btn_certainDate > table > tbody > tr > td > a[href='#1']", "class", "nonBusiness");
 	alopexAssertContains("css", "#datepicker_btn_certainDate > table > tbody > tr > td > a[href='#1']", "title", "정기휴일");
 	driver.findElement(webdriver.By.css("#datepicker_btn_certainDate > table > tbody > tr > td > a[href='#2']")).click();
 	seleniumIde.closeAlertAndAssertItsText(driver, "It is a special Day", acceptNextAlert);
 	acceptNextAlert = true;
 	alopexAssertContains("css", "#result_certainDate", "value", "02");
 	driver.findElement(webdriver.By.css("#btn_certainDate")).click();
 	driver.findElement(webdriver.By.css("#datepicker_btn_certainDate > div > div.SubheaderMonth > span.NextMonth > a")).click();
 	driver.sleep(200);
 	driver.findElement(webdriver.By.css("#datepicker_btn_certainDate > div > div.SubheaderMonth > span.NextMonth > a")).click();
 	driver.sleep(200);
 	driver.findElement(webdriver.By.css("#datepicker_btn_certainDate > table > tbody > tr > td > a[href='#1']")).click();
 	seleniumIde.closeAlertAndAssertItsText(driver, "It is not available on", acceptNextAlert);
 	acceptNextAlert = true;
 	alopexAssertContains("css", "#result_certainDate", "value", "02");
 	// 정기휴일은 클릭 못 했다. 그대로 달력 떠 있다.
 	alopexIsElementPresent("css", "#datepicker_btn_certainDate");
 	// 달력 닫는다.
 	driver.findElement(webdriver.By.css("#datepicker_btn_certainDate > span > a")).click();

 	// mindate / maxdate
 	driver.findElement(webdriver.By.css("#min_year_test")).sendKeys("2016");
 	driver.findElement(webdriver.By.css("#min_month_test")).sendKeys("12");
 	driver.findElement(webdriver.By.css("#min_day_test")).sendKeys("10");
 	driver.findElement(webdriver.By.css("#max_year_test")).sendKeys("2016");
 	driver.findElement(webdriver.By.css("#max_month_test")).sendKeys("12");
 	driver.findElement(webdriver.By.css("#max_day_test")).sendKeys("20");
 	driver.findElement(webdriver.By.css("#btn_dateRange")).click();
	alopexAssertContains("css", " #datepicker_btn_dateRange > table > tbody > tr > td > a[href='#9']", "class", "Disabled");
	alopexAssertNotContains("css", "#datepicker_btn_dateRange > table > tbody > tr > td > a[href='#10']", "class", "Disabled");
	alopexAssertNotContains("css", "#datepicker_btn_dateRange > table > tbody > tr > td > a[href='#20']", "class", "Disabled");
	alopexAssertContains("css", " #datepicker_btn_dateRange > table > tbody > tr > td > a[href='#21']", "class", "Disabled");	 
	driver.findElement(webdriver.By.css("#datepicker_btn_dateRange > span > a")).click();

	// showothermonth
	alopexAssertContains("css", "#datepicker_datepickerArea2 > table > tbody > tr > td > a[href='#prev31']", "class", "PrevMonthDay");
	alopexAssertContains("css", "#datepicker_datepickerArea2 > table > tbody > tr > td > a[href='#next1']", "class", "NextMonthDay");

	// showbottom
	alopexAssertTextContains("css", "#datepicker_datepickerArea3 > div.Bottom > div > button", "오늘");
	alopexAssertTextContains("css", "#datepicker_datepickerArea3 > div.Bottom > div > span", new Date().format("yyyy-MM-dd"));


	// "left", "right", "top", "bottom", "top | left", "top | right"
	driver.findElement(webdriver.By.css("#btn_position")).click();
	alopexCompareInputAndDatePickerLocation("css", "#btn_position", "css", "#datepicker_btn_position", "x", 0);
	alopexCompareInputAndDatePickerLocation("css", "#btn_position", "css", "#datepicker_btn_position", "y", 31);
	driver.findElement(webdriver.By.css("#btn_position_right")).click();
	// 모니터 해상도에 따라 다른 듯? 개인 PC에서 수치 추출하여 정해주자
	// alopexCompareInputAndDatePickerLocation("css", "#btn_position_right", "css", "#datepicker_btn_position_right", "x", 181.59375);
	// alopexCompareInputAndDatePickerLocation("css", "#btn_position_right", "css", "#datepicker_btn_position_right", "x", 162.796875);
	alopexCompareInputAndDatePickerLocation("css", "#btn_position_right", "css", "#datepicker_btn_position_right", "y", 31);
	driver.findElement(webdriver.By.css("#btn_position_top_left")).click();
	alopexCompareInputAndDatePickerLocation("css", "#btn_position_top_left", "css", "#datepicker_btn_position_top_left", "x", 0);
	alopexCompareInputAndDatePickerLocation("css", "#btn_position_top_left", "css", "#datepicker_btn_position_top_left", "y", 217);
	driver.findElement(webdriver.By.css("#btn_position_top_right")).click();
	// alopexCompareInputAndDatePickerLocation("css", "#btn_position_top_right", "css", "#datepicker_btn_position_top_right", "x", 201.65625);
	// 모니터 해상도에 따라 다른 듯? 개인 PC에서 수치 추출하여 정해주자
	// alopexCompareInputAndDatePickerLocation("css", "#btn_position_top_right", "css", "#datepicker_btn_position_top_right", "x", 162.796875);
	alopexCompareInputAndDatePickerLocation("css", "#btn_position_top_right", "css", "#datepicker_btn_position_top_right", "y", 217);
	driver.findElement(webdriver.By.css("#datepicker_btn_position_top_right > span > a")).click();


	// .closeDatePicker()
	driver.findElement(webdriver.By.css("#showdp")).click();
	alopexIsElementPresent("css", "#datepicker_showdp");
	driver.findElement(webdriver.By.css("#closedp")).click();
	alopexIsElementNotPresent("css", "#datepicker_showdp");

 	// datepicker.md test end
 }