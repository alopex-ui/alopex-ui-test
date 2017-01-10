if(DO_TEST.dialog){
	// dialog.md test start

	driver.get(baseUrl + "/2.3/dev-component/component.html?target=dialog#basic");
	driver.sleep(1000);

	// HTML 마크업을 이용한 Dialog
	// 최초 숨겨짐 확인
	alopexAssertContains('css', "#dialogId", 'style', "display: none;");
	driver.findElement(webdriver.By.css("#buttonId")).click();
	// 다디얼로그 생성 확인
	alopexAssertContains('css', "#dialogId", 'style', "display: block;");
    
//  위치값 자동으로 검증하기 어려움
// 	alopexCompareInputAndDatePickerLocation("css", "body", "css", "#dialogId", "x", 382.5);
// 	alopexCompareInputAndDatePickerLocation("css", "body", "css", "#dialogId", "y", 263.5);

	// 헤더, 컨텐츠 내용 확인
	alopexAssertTextContains('css', "#dialogId > div.Header", "Basic");
	alopexAssertTextContains('css', "#dialogId > div.Dialog-contents", "컨텐츠 영역 입니다");
	// resize 컨트롤 4개 확인
	alopexIsElementPresent("css", "#dialogId > div > div[style*='w-resize']");
	alopexIsElementPresent("css", "#dialogId > div > div[style*='col-resize']");
	alopexIsElementPresent("css", "#dialogId > div > div[style*='s-resize']");
	alopexIsElementPresent("css", "#dialogId > div > div.ResizeBtn");
	// X 버튼 닫기 확인
	driver.findElement(webdriver.By.css("#dialogId > div.Header > button")).click();
	alopexAssertContains('css', "#dialogId", 'style', "display: none;");

	// 함수를 이용한 Dialog
	// 최초 숨겨짐 확인
	alopexAssertContains('css', "#dialogId2", 'style', "display: none;");
	driver.findElement(webdriver.By.css("#buttonId2")).click();
	// 다디얼로그 생성 확인
	alopexAssertContains('css', "#dialogId2", 'style', "display: block;");
	// 헤더, 컨텐츠 내용 확인
	alopexAssertTextContains('css', "#dialogId2 > div.Header", "Basic");
	alopexAssertTextContains('css', "#dialogId2 > div.Dialog-contents", "컨텐츠 영역 입니다");
	// resize 컨트롤 4개 확인
	alopexIsElementPresent("css", "#dialogId2 > div > div[style*='w-resize']");
	alopexIsElementPresent("css", "#dialogId2 > div > div[style*='col-resize']");
	alopexIsElementPresent("css", "#dialogId2 > div > div[style*='s-resize']");
	alopexIsElementPresent("css", "#dialogId2 > div > div.ResizeBtn");
	alopexAssertContains('css', "#dialogId2 > div.Header", 'style', "cursor: move;");
	alopexAssertTextContains('css', "#dialogId2 > div.Dialog-btnwrap > button", "Close");

	// X 버튼 닫기 콜백 확인
	driver.findElement(webdriver.By.css("#dialogId2 > div.Header > button")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '저장되지 않은 데이터가 있습니다. 창을 닫으시겠습니까?', acceptNextAlert);
	acceptNextAlert = true;

	// close button 으로 닫기
	driver.findElement(webdriver.By.css("#dialogId2 > div.Dialog-btnwrap > button")).click();
	driver.sleep(200);
	alopexAssertContains('css', "#dialogId2", 'style', "display: none;");


	// dialog.md test end
}