if(DO_TEST.autocomplete){
	// autocomplete.md test start

	// data-url 방식
	driver.get(baseUrl + "/2.3/dev-component/component.html?target=autocomplete#basic");
	driver.sleep(1000);

	// alopexAssertContainsInComputedStyle("css", "#divTest01 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest01 > input")).click();
	// 정적/동적 data-source 가 없으니 none
	// alopexAssertContainsInComputedStyle("css", "#divTest01 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest01 > input")).sendKeys("m");
	driver.sleep(500);
	// alopexAssertContainsInComputedStyle("css", "#divTest01 > ul", "display", "block");
	// li 나타나면 width, height가 auto 에서 특정 수치로 바뀐다.
	// alopexAssertNotContainsInComputedStyle("css", "#divTest01 > ul > li:nth-child(1)", "height", "auto");
	driver.findElement(webdriver.By.css("#divTest01 > input")).sendKeys(webdriver.Key.ARROW_DOWN);
	driver.sleep(500);
	alopexAssertContains("css", "#divTest01 > ul > li:nth-child(1)", "class", "Focused");
	driver.findElement(webdriver.By.css("#divTest01 > ul > li:nth-child(1) > a")).click();
	alopexAssertContains("css", "#divTest01 > input", "value", "Maine");
	driver.findElement(webdriver.By.css("#divTest01 > input")).sendKeys("@");
	driver.sleep(500);
	alopexAssertTextContains("css", "#divTest01 > ul > li.Disabled", "No Results");
	driver.findElement(webdriver.By.css("#divTest01 > input")).clear();
	driver.findElement(webdriver.By.css("#divTest01 > input")).sendKeys("a");
	driver.sleep(500);
	alopexAssertTextContains("css", "#divTest01 > ul > li:nth-child(1) > a", "Alopex UI Framework 최소한의 자바스크립트 코드를 통한 HTML5 기반의 Rich UI 제작 프레임워크");



	// data-source 방식
	// alopexAssertContainsInComputedStyle("css", "#divTest02 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest02 > input")).click();
	// 정적/동적 data-source 가 있으니 block
	// alopexAssertContainsInComputedStyle("css", "#divTest02 > ul", "display", "block");
	// #divTest02 > input 에서 blur 시키기 위해 다른곳 클릭했다.
	driver.findElement(webdriver.By.css("#content > div.sub-content__wrap > div.sub-content")).click();
	driver.findElement(webdriver.By.css("#content > div.sub-content__wrap > div.sub-content")).click();
	driver.sleep(500);
	// 드롭다운 다시 없어진다.
	// alopexAssertContainsInComputedStyle("css", "#divTest02 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest02 > input")).sendKeys("i");
	// alopexAssertContainsInComputedStyle("css", "#divTest02 > ul", "display", "block");
	// li 나타나면 width, height가 auto 에서 특정 수치로 바뀐다. iowa 까지 4개 나오는지 확인
	// alopexAssertNotContainsInComputedStyle("css", "#divTest02 > ul > li:nth-child(4)", "height", "auto");
	driver.findElement(webdriver.By.css("#divTest02 > input")).sendKeys("o");
	alopexAssertTextContains("css", "#divTest02 > ul > li:nth-child(1)", "Iowa");
	// 하나만 검색되어 두번째 li는 없어야 한다.
	alopexIsElementNotPresent("css", "#divTest02 > ul > li:nth-child(2)");
	// ioo 로 검색하면 No Results
	driver.findElement(webdriver.By.css("#divTest02 > input")).sendKeys("o");
	alopexAssertTextContains("css", "#divTest02 > ul > li.Disabled", "No Results");
	// 하나만 검색되어 두번째 li는 없어야 한다.
	alopexIsElementNotPresent("css", "#divTest02 > ul > li:nth-child(2)");
	// backspace로 지우다가 검색가능 단어가 나오면 표시해준다.
	driver.findElement(webdriver.By.css("#divTest02 > input")).sendKeys(webdriver.Key.BACK_SPACE);
	alopexAssertTextContains("css", "#divTest02 > ul > li:nth-child(1)", "Iowa");
	// 하나만 검색되어 두번째 li는 없어야 한다.
	alopexIsElementNotPresent("css", "#divTest02 > ul > li:nth-child(2)");
	driver.findElement(webdriver.By.css("#divTest02 > input")).sendKeys(webdriver.Key.ARROW_DOWN);
	alopexAssertContains("css", "#divTest02 > ul > li:nth-child(1)", "class", "Focused");
	driver.findElement(webdriver.By.css("#divTest02 > ul > li:nth-child(1) > a")).click();
	alopexAssertContains("css", "#divTest02 > input", "value", "Iowa");
	driver.findElement(webdriver.By.css("#divTest02 > input")).sendKeys("@");
	alopexAssertTextContains("css", "#divTest02 > ul > li.Disabled", "No Results");
	driver.findElement(webdriver.By.css("#divTest02 > input")).clear();
	// like 검색 동작하여 3개 검색 되고, 3번째 텍스트 노드가 "Iowa" 인지 확인
	driver.findElement(webdriver.By.css("#divTest02 > input")).sendKeys("a");
	alopexAssertTextContains("css", "#divTest02 > ul > li:nth-child(3) > a", "Iowa");



	// data-paramname(Optional)
	// alopexAssertContainsInComputedStyle("css", "#divTest03 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest03 > input")).click();
	// 정적/동적 data-source 가 없으니 none
	// alopexAssertContainsInComputedStyle("css", "#divTest03 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest03 > input")).sendKeys("ma");
	driver.sleep(500);
	// alopexAssertContainsInComputedStyle("css", "#divTest03 > ul", "display", "block");
	alopexAssertTextContains("css", "#divTest03 > ul > li:nth-child(3)", "Massachusetts");
	// #divTest03 > input 에서 blur 시키기 위해 다른곳 클릭했다.
	driver.findElement(webdriver.By.css("#Attributes_dataparamnameOptional")).click();
	driver.findElement(webdriver.By.css("#Attributes_dataparamnameOptional")).click();
	driver.sleep(500);
	// 드롭다운 다시 없어진다.
	// alopexAssertContainsInComputedStyle("css", "#divTest03 > ul", "display", "none");
	// mao 로 검색하면 No Results
	driver.findElement(webdriver.By.css("#divTest03 > input")).sendKeys("o");
	driver.sleep(500);
	alopexAssertTextContains("css", "#divTest03 > ul > li.Disabled", "No Results");
	// 하나만 검색되어 두번째 li는 없어야 한다.
	alopexIsElementNotPresent("css", "#divTest03 > ul > li:nth-child(2)");
	// backspace로 지우다가 검색가능 단어가 나오면 표시해준다.
	driver.findElement(webdriver.By.css("#divTest03 > input")).sendKeys(webdriver.Key.BACK_SPACE);
	alopexAssertTextContains("css", "#divTest03 > ul > li:nth-child(3)", "Massachusetts");
	// 하나만 검색되어 두번째 li는 없어야 한다.
	alopexIsElementNotPresent("css", "#divTest03 > ul > li:nth-child(4)");
	driver.findElement(webdriver.By.css("#divTest03 > input")).sendKeys(webdriver.Key.ARROW_DOWN);
	alopexAssertContains("css", "#divTest03 > ul > li:nth-child(1)", "class", "Focused");
	driver.findElement(webdriver.By.css("#divTest03 > ul > li:nth-child(1) > a")).click();
	alopexAssertContains("css", "#divTest03 > input", "value", "Maine");
	driver.findElement(webdriver.By.css("#divTest03 > input")).sendKeys("@");
	alopexAssertTextContains("css", "#divTest03 > ul > li.Disabled", "No Results");



	// data-source(Optional)
	// alopexAssertContainsInComputedStyle("css", "#divTest04 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest04 > input")).click();
	// 정적/동적 data-source 가 있으니 block
	// alopexAssertContainsInComputedStyle("css", "#divTest04 > ul", "display", "block");
	// #divTest04 > input 에서 blur 시키기 위해 다른곳 클릭했다.
	driver.findElement(webdriver.By.css("#content > div.sub-content__wrap > div.sub-content")).click();
	driver.findElement(webdriver.By.css("#content > div.sub-content__wrap > div.sub-content")).click();
	driver.sleep(500);
	// 드롭다운 다시 없어진다.
	// alopexAssertContainsInComputedStyle("css", "#divTest04 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest04 > input")).sendKeys("i");
	// alopexAssertContainsInComputedStyle("css", "#divTest04 > ul", "display", "block");
	// li 나타나면 width, height가 auto 에서 특정 수치로 바뀐다. iowa 까지 4개 나오는지 확인
	// alopexAssertNotContainsInComputedStyle("css", "#divTest04 > ul > li:nth-child(4)", "height", "auto");
	driver.findElement(webdriver.By.css("#divTest04 > input")).sendKeys("o");
	alopexAssertTextContains("css", "#divTest04 > ul > li:nth-child(1)", "Iowa");
	// 하나만 검색되어 두번째 li는 없어야 한다.
	alopexIsElementNotPresent("css", "#divTest04 > ul > li:nth-child(2)");
	// ioo 로 검색하면 No Results
	driver.findElement(webdriver.By.css("#divTest04 > input")).sendKeys("o");
	alopexAssertTextContains("css", "#divTest04 > ul > li.Disabled", "No Results");
	// 하나만 검색되어 두번째 li는 없어야 한다.
	alopexIsElementNotPresent("css", "#divTest04 > ul > li:nth-child(2)");
	// backspace로 지우다가 검색가능 단어가 나오면 표시해준다.
	driver.findElement(webdriver.By.css("#divTest04 > input")).sendKeys(webdriver.Key.BACK_SPACE);
	alopexAssertTextContains("css", "#divTest04 > ul > li:nth-child(1)", "Iowa");
	// 하나만 검색되어 두번째 li는 없어야 한다.
	alopexIsElementNotPresent("css", "#divTest04 > ul > li:nth-child(2)");
	driver.findElement(webdriver.By.css("#divTest04 > input")).sendKeys(webdriver.Key.ARROW_DOWN);
	alopexAssertContains("css", "#divTest04 > ul > li:nth-child(1)", "class", "Focused");
	driver.findElement(webdriver.By.css("#divTest04 > ul > li:nth-child(1) > a")).click();
	alopexAssertContains("css", "#divTest04 > input", "value", "Iowa");
	driver.findElement(webdriver.By.css("#divTest04 > input")).sendKeys("@");
	alopexAssertTextContains("css", "#divTest04 > ul > li.Disabled", "No Results");
	driver.findElement(webdriver.By.css("#divTest04 > input")).clear();
	// like 검색 동작하여 3개 검색 되고, 3번째 텍스트 노드가 "Iowa" 인지 확인
	driver.findElement(webdriver.By.css("#divTest04 > input")).sendKeys("a");
	alopexAssertTextContains("css", "#divTest04 > ul > li:nth-child(3) > a", "Iowa");




	// data-reset-button(Optional)
	alopexAssertTextContains("css", "#divTest05 > div.Clear", "x");
	// alopexAssertContainsInComputedStyle("css", "#divTest05 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest05 > input")).click();
	// 정적/동적 data-source 가 있으니 block
	// alopexAssertContainsInComputedStyle("css", "#divTest05 > ul", "display", "block");
	// #divTest05 > input 에서 blur 시키기 위해 다른곳 클릭했다.
	driver.findElement(webdriver.By.css("#Attributes_dataresetbuttonOptional")).click();
	driver.findElement(webdriver.By.css("#Attributes_dataresetbuttonOptional")).click();
	driver.sleep(500);
	// 드롭다운 다시 없어진다.
	// alopexAssertContainsInComputedStyle("css", "#divTest05 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest05 > input")).sendKeys("i");
	// alopexAssertContainsInComputedStyle("css", "#divTest05 > ul", "display", "block");
	// li 나타나면 width, height가 auto 에서 특정 수치로 바뀐다. iowa 까지 4개 나오는지 확인
	alopexAssertTextContains("css", "#divTest05 > ul > li:nth-child(4)", "Iowa");
	driver.findElement(webdriver.By.css("#divTest05 > input")).sendKeys(webdriver.Key.ARROW_DOWN);
	alopexAssertContains("css", "#divTest05 > ul > li:nth-child(1)", "class", "Focused");
	driver.findElement(webdriver.By.css("#divTest05 > ul > li:nth-child(4) > a")).click();
	alopexAssertContains("css", "#divTest05 > input", "value", "Iowa");
	driver.findElement(webdriver.By.css("#divTest05 > div.Clear")).click();
	driver.sleep(500);
	alopexAssertContains("css", "#divTest05 > input", "value", "");
	// alopexAssertContainsInComputedStyle("css", "#divTest05 > ul", "display", "none");



	// data-minlength(Optional)
	// alopexAssertContainsInComputedStyle("css", "#divTest06 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest06 > input")).click();
	// 정적/동적 data-source 가 있으니 block
	// alopexAssertContainsInComputedStyle("css", "#divTest06 > ul", "display", "block");
	// #divTest06 > input 에서 blur 시키기 위해 다른곳 클릭했다.
	driver.findElement(webdriver.By.css("#Attributes_dataminlengthOptional")).click();
	driver.findElement(webdriver.By.css("#Attributes_dataminlengthOptional")).click();
	driver.sleep(500);
	// 드롭다운 다시 없어진다.
	// alopexAssertContainsInComputedStyle("css", "#divTest06 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest06 > input")).sendKeys("i");
	// alopexAssertContainsInComputedStyle("css", "#divTest06 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest06 > input")).sendKeys("d");
	// alopexAssertContainsInComputedStyle("css", "#divTest06 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest06 > input")).sendKeys("a");
	// ida 까지 입력해야 드롭다운 표시된다.
	// alopexAssertContainsInComputedStyle("css", "#divTest06 > ul", "display", "block");
	// li 나타나면 width, height가 auto 에서 특정 수치로 바뀐다. iowa 까지 4개 나오는지 확인
	alopexAssertTextContains("css", "#divTest06 > ul > li:nth-child(1)", "Idaho");
	// 하나만 검색되어 두번째 li는 없어야 한다.
	alopexIsElementNotPresent("css", "#divTest06 > ul > li:nth-child(2)");
	driver.findElement(webdriver.By.css("#divTest06 > input")).sendKeys(webdriver.Key.ARROW_DOWN);
	alopexAssertContains("css", "#divTest06 > ul > li:nth-child(1)", "class", "Focused");
	driver.findElement(webdriver.By.css("#divTest06 > ul > li:nth-child(1) > a")).click();
	alopexAssertContains("css", "#divTest06 > input", "value", "Idaho");



	// data-noresultstr(Optional)
	// alopexAssertContainsInComputedStyle("css", "#divTest07 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest07 > input")).click();
	// 정적/동적 data-source 가 있으니 block
	// alopexAssertContainsInComputedStyle("css", "#divTest07 > ul", "display", "block");
	// #divTest07 > input 에서 blur 시키기 위해 다른곳 클릭했다.
	driver.findElement(webdriver.By.css("#Attributes_dataminlengthOptional")).click();
	driver.findElement(webdriver.By.css("#Attributes_dataminlengthOptional")).click();
	driver.sleep(500);
	// 드롭다운 다시 없어진다.
	// alopexAssertContainsInComputedStyle("css", "#divTest07 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest07 > input")).sendKeys("k");
	// alopexAssertContainsInComputedStyle("css", "#divTest07 > ul", "display", "block");
	// li 나타나면 width, height가 auto 에서 특정 수치로 바뀐다. iowa 까지 4개 나오는지 확인
	alopexAssertTextContains("css", "#divTest07 > ul > li.Disabled", "매칭 결과 없음");
	// alopexAssertContainsInComputedStyle("css", "#divTest07 > ul > li.Disabled", "cursor", "not-allowed");
	driver.findElement(webdriver.By.css("#divTest07 > input")).sendKeys(webdriver.Key.ARROW_DOWN);
	alopexAssertTextContains("css", "#divTest07 > ul > li.Disabled", "매칭 결과 없음");
	driver.findElement(webdriver.By.css("#divTest07 > input")).sendKeys(webdriver.Key.ENTER);
	alopexAssertContains("css", "#divTest07 > input", "value", "k");
	driver.findElement(webdriver.By.css("#divTest07 > input")).sendKeys("k");
	driver.findElement(webdriver.By.css("#divTest07 > ul > li.Disabled")).click();
	alopexAssertContains("css", "#divTest07 > input", "value", "kk");




	// data-maxresult(Optional)
	// alopexAssertContainsInComputedStyle("css", "#divTest08 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest08 > input")).click();
	// 정적/동적 data-source 가 있으니 block
	// alopexAssertContainsInComputedStyle("css", "#divTest08 > ul", "display", "block");
	// #divTest08 > input 에서 blur 시키기 위해 다른곳 클릭했다.
	driver.findElement(webdriver.By.css("#Attributes_datafitwidthOptional")).click();
	driver.findElement(webdriver.By.css("#Attributes_datafitwidthOptional")).click();
	driver.sleep(500);
	// 드롭다운 다시 없어진다.
	// alopexAssertContainsInComputedStyle("css", "#divTest08 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest08 > input")).sendKeys("i");
	// alopexAssertContainsInComputedStyle("css", "#divTest08 > ul", "display", "block");
	// li 2개만 나오는지 확인
	alopexAssertTextContains("css", "#divTest08 > ul > li:nth-child(1) > a", "Idaho");
	alopexAssertTextContains("css", "#divTest08 > ul > li:nth-child(2) > a", "Illinois");
	alopexIsElementNotPresent("css", "#divTest08 > ul > li:nth-child(3)");



	// data-fitwidth(Optional)
	// alopexAssertContainsInComputedStyle("css", "#fitTrue > ul", "display", "none");
	driver.findElement(webdriver.By.css("#fitTrue > input")).sendKeys("a");
	alopexAssertContains("css", "#fitTrue > ul", "style", " width: ");
	// alopexAssertContainsInComputedStyle("css", "#fitFalse > ul", "display", "none");
	driver.findElement(webdriver.By.css("#fitFalse > input")).sendKeys("a");
	alopexAssertNotContains("css", "#fitFalse > ul", "style", " width: ");


	// data-maxheight(Optional)
	// alopexAssertContainsInComputedStyle("css", "#divTest09 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest09 > input")).sendKeys("a");
	alopexAssertContains("css", "#divTest09 > ul", "style", " width: ");


	// data-open-button(Optional)
	// alopexAssertContainsInComputedStyle("css", "#divTest10 > ul", "display", "none");
	alopexIsElementPresent("css", "#divTest10 > div.Opener");
	driver.findElement(webdriver.By.css("#divTest10 > input")).click();
	// alopexAssertContainsInComputedStyle("css", "#divTest10 > ul", "display", "block");
	driver.findElement(webdriver.By.css("#Attributes_dataopenbuttonOptional")).click();
	driver.findElement(webdriver.By.css("#Attributes_dataopenbuttonOptional")).click();
	driver.sleep(500);
	// alopexAssertContainsInComputedStyle("css", "#divTest10 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest10 > div.Opener")).click();
	driver.sleep(500);
	// alopexAssertContainsInComputedStyle("css", "#divTest10 > ul", "display", "block");
	driver.findElement(webdriver.By.css("#divTest10 > div.Opener")).click();
	driver.sleep(500);
	// alopexAssertContainsInComputedStyle("css", "#divTest10 > ul", "display", "none");


	// data-filter (Optional)
	// alopexAssertContainsInComputedStyle("css", "#divTest11 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest11 > input")).click();
	// 정적/동적 data-source 가 있으니 block
	// alopexAssertContainsInComputedStyle("css", "#divTest11 > ul", "display", "block");
	// #divTest11 > input 에서 blur 시키기 위해 다른곳 클릭했다.
	driver.findElement(webdriver.By.css("#Attributes_datafilterOptional")).click();
	driver.findElement(webdriver.By.css("#Attributes_datafilterOptional")).click();
	driver.sleep(500);
	// 드롭다운 다시 없어진다.
	// alopexAssertContainsInComputedStyle("css", "#divTest11 > ul", "display", "none");
	driver.findElement(webdriver.By.css("#divTest11 > input")).sendKeys("i");
	alopexAssertTextContains("css", "#divTest11 > ul > li:nth-child(4) > a", "Iowa");
	driver.findElement(webdriver.By.css("#divTest11 > input")).sendKeys(" d");
	alopexAssertTextContains("css", "#divTest11 > ul > li:nth-child(1) > a", "Idaho");
	alopexIsElementNotPresent("css", "#divTest11 > ul > li:nth-child(2)");
	driver.findElement(webdriver.By.css("#divTest11 > input")).sendKeys(" a");
	alopexAssertTextContains("css", "#divTest11 > ul > li:nth-child(1) > a", "Idaho");
	alopexIsElementNotPresent("css", "#divTest11 > ul > li:nth-child(2)");
	driver.findElement(webdriver.By.css("#divTest11 > input")).sendKeys(webdriver.Key.BACK_SPACE);
	alopexAssertTextContains("css", "#divTest11 > ul > li:nth-child(1) > a", "Idaho");
	alopexIsElementNotPresent("css", "#divTest11 > ul > li:nth-child(2)");
	driver.findElement(webdriver.By.css("#divTest11 > input")).sendKeys(webdriver.Key.BACK_SPACE);
	driver.findElement(webdriver.By.css("#divTest11 > input")).sendKeys(webdriver.Key.BACK_SPACE);
	alopexAssertTextContains("css", "#divTest11 > ul > li:nth-child(4) > a", "Iowa");
	driver.findElement(webdriver.By.css("#divTest11 > input")).sendKeys("k");
	alopexAssertTextContains("css", "#divTest11 > ul > li:nth-child(1)", "No Results");



	// data-dynamic-dropdown (Optional)
	// data-dynamic-dropdown div 아래 ul 없고
	alopexIsElementNotPresent("css", "#divTest12 > ul");
	// data-dynamic-dropdown body 하단에 ul.Dropdown 최초에만 display none으로 있다.(추후에는 삭제된 상태가 된다)
	alopexIsElementPresent("css", "ul.Dropdown[data-base]");
	// alopexAssertContainsInComputedStyle("css", "ul.Dropdown[data-base]", "display", "none");
	// input 클릭을 통해 ul 동적 생성(id 새로 부여 된다.)
	driver.findElement(webdriver.By.css("#divTest12 > input")).click();
	alopexIsElementPresentWithBaseElementId("css", "#divTest12 > input", "id", 'ul.Dropdown[data-base=\"#');
	// alopexAssertContainsInComputedStyle("css", "ul.Dropdown[data-base]", "display", "block");
	alopexAssertTextContains("css", "ul.Dropdown[data-base] > li:nth-child(4)", "Iowa");
	// 수동테스트 : 드롭다운이 input 아래 정확한 위치에서 열렸는지 확인
	driver.findElement(webdriver.By.css("ul.Dropdown[data-base] > li:nth-child(1)")).click();
	alopexAssertContains("css", "#divTest12 > input", "value", "Idaho");
	// input 클릭을 통해 ul 다시 동적 생성(id 새로 부여 된다.) 기 선택된 li 하나만 보여진다.
	driver.findElement(webdriver.By.css("#divTest12 > input")).click();
	alopexIsElementPresentWithBaseElementId("css", "#divTest12 > input", "id", 'ul.Dropdown[data-base=\"#');
	driver.sleep(500);
	// alopexAssertContainsInComputedStyle("css", "ul.Dropdown[data-base]", "display", "block");
	alopexAssertContains("css", "#divTest12 > input", "value", "Idaho");
	alopexAssertTextContains("css", "ul.Dropdown[data-base] > li:nth-child(1)", "Idaho");
	alopexIsElementNotPresent("css", "ul.Dropdown[data-base] > li:nth-child(2)");



	// data-enter-selectfirst (Optional)
	driver.findElement(webdriver.By.css("#divTest13 > input")).click();
	driver.findElement(webdriver.By.css("#divTest13 > input")).sendKeys("i");
	driver.findElement(webdriver.By.css("#divTest13 > input")).sendKeys(webdriver.Key.ENTER);
	alopexAssertContains("css", "#divTest13 > input", "value", "Idaho");


	// .setOptions(JSON option) 1
	driver.findElement(webdriver.By.css("#setOptions_url > input")).click();
	driver.findElement(webdriver.By.css("#setOptions_url > input")).sendKeys("m");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_url > ul", "display", "none");
	driver.findElement(webdriver.By.css("#setOptions1")).click();
	driver.findElement(webdriver.By.css("#setOptions_url > input")).sendKeys(webdriver.Key.BACK_SPACE);
	driver.findElement(webdriver.By.css("#setOptions_url > input")).sendKeys("m");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_url > ul", "display", "block");
	alopexAssertTextContains("css", "#setOptions_url > ul > li:nth-child(7)", "Missouri");


	// .setOptions(JSON option) 2
	driver.findElement(webdriver.By.css("#setOptions_source > input")).sendKeys("m");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_source > ul", "display", "none");
	driver.findElement(webdriver.By.css("#setOptions2")).click();
	driver.findElement(webdriver.By.css("#setOptions_source > input")).sendKeys(webdriver.Key.BACK_SPACE);
	driver.findElement(webdriver.By.css("#setOptions_source > input")).sendKeys("m");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_source > ul", "display", "block");
	alopexAssertTextContains("css", "#setOptions_source > ul > li:nth-child(7)", "Missouri");


	// .setOptions(JSON option) 3
	driver.findElement(webdriver.By.css("#setOptions_minlen > input")).sendKeys("mis");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_minlen > ul", "display", "none");
	driver.findElement(webdriver.By.css("#setOptions3")).click();
	driver.findElement(webdriver.By.css("#setOptions_minlen > input")).sendKeys(webdriver.Key.BACK_SPACE);
	driver.findElement(webdriver.By.css("#setOptions_minlen > input")).sendKeys("s");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_minlen > ul", "display", "block");
	alopexAssertTextContains("css", "#setOptions_minlen > ul > li:nth-child(2)", "Missouri");


	// .setOptions(JSON option) 4
	driver.findElement(webdriver.By.css("#setOptions_noresultstr > input")).sendKeys("m");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_noresultstr > ul", "display", "none");
	driver.findElement(webdriver.By.css("#setOptions4")).click();
	driver.findElement(webdriver.By.css("#setOptions_noresultstr > input")).sendKeys(webdriver.Key.BACK_SPACE);
	driver.findElement(webdriver.By.css("#setOptions_noresultstr > input")).sendKeys("m");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_noresultstr > ul", "display", "block");
	alopexAssertTextContains("css", "#setOptions_noresultstr > ul > li:nth-child(1)", "매칭 결과 없음");


	// .setOptions(JSON option) 5
	driver.findElement(webdriver.By.css("#setOptions_maxresult > input")).sendKeys("m");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_maxresult > ul", "display", "none");
	driver.findElement(webdriver.By.css("#setOptions5")).click();
	driver.findElement(webdriver.By.css("#setOptions_maxresult > input")).sendKeys(webdriver.Key.BACK_SPACE);
	driver.findElement(webdriver.By.css("#setOptions_maxresult > input")).sendKeys("m");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_maxresult > ul", "display", "block");
	alopexAssertTextContains("css", "#setOptions_maxresult > ul > li:nth-child(3)", "Massachusetts");


	// .setOptions(JSON option) 6
	driver.findElement(webdriver.By.css("#setOptions_select > input")).sendKeys("m");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_select > ul", "display", "none");
	driver.findElement(webdriver.By.css("#setOptions6")).click();
	driver.findElement(webdriver.By.css("#setOptions_select > input")).sendKeys(webdriver.Key.BACK_SPACE);
	driver.findElement(webdriver.By.css("#setOptions_select > input")).sendKeys("m");
	// alopexAssertContainsInComputedStyle("css", "#setOptions_select > ul", "display", "block");
	alopexAssertTextContains("css", "#setOptions_select > ul > li:nth-child(3)", "Massachusetts");
	driver.findElement(webdriver.By.css("#setOptions_select > ul > li:nth-child(3)")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'selected : {"text":"Massachusetts","capital":"Boston"}', acceptNextAlert);
	acceptNextAlert = true;
	alopexAssertContains("css", "#setOptions_select > input", "value", "Massachusetts");


	// .setOptions(JSON option) 7
	driver.findElement(webdriver.By.css("#selectedDataDefault")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'getSelectedData : {"text":""}', acceptNextAlert);
	acceptNextAlert = true;
	alopexAssertContains("css", "#setOptions_default > input", "value", "");


	// .getSelectedData()
	driver.findElement(webdriver.By.css("#test_getSelectedData > input")).sendKeys("m");
	driver.findElement(webdriver.By.css("#test_getSelectedData > ul > li:nth-child(3)")).click();
	alopexAssertContains("css", "#test_getSelectedData > input", "value", "Massachusetts");
	driver.findElement(webdriver.By.css("#getSelectedData")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '{"text":"Massachusetts","capital":"Boston"}', acceptNextAlert);
	acceptNextAlert = true;


	// .select(index)
	driver.findElement(webdriver.By.css("#selectByIndexBtn")).click();
	alopexAssertContains("css", "#select > input", "value", "ABC");
	driver.findElement(webdriver.By.css("#selectByTextBtn")).click();
	alopexAssertContains("css", "#select > input", "value", "BBC");
	driver.findElement(webdriver.By.css("#selectByIdBtn")).click();
	alopexAssertContains("css", "#select > input", "value", "BBA");


	// .setEnabled(Boolean)
	alopexAssertNotContains("css", "#setEnable > input", "class", "Disabled");
	driver.findElement(webdriver.By.css("#setEnable")).click();
	// alopexAssertContainsInComputedStyle("css", "#setEnable > ul", "display", "block");
	alopexAssertTextContains("css", "#setEnable > ul > li:nth-child(4)", "CBC");
	driver.findElement(webdriver.By.css("#disabledBtn")).click();
	alopexAssertContains("css", "#setEnable > input", "class", "Disabled");
	// disabled를 기대했는데, actual은 true로 나와서 검사를 true로 함
	alopexAssertContains("css", "#setEnable > input", "disabled", "true");
	// disabled를 기대했는데, actual은 true로 나와서 검사를 true로 함
	alopexAssertContains("css", "#setEnable > ul", "disabled", "true");
	driver.findElement(webdriver.By.css("#enabledBtn")).click();
	driver.findElement(webdriver.By.css("#setEnable")).click();
	// alopexAssertContainsInComputedStyle("css", "#setEnable > ul", "display", "block");
	alopexAssertTextContains("css", "#setEnable > ul > li:nth-child(4)", "CBC");


	// .setCustomFilter(function)
	driver.findElement(webdriver.By.css("#custom > input")).sendKeys("i");
	seleniumIde.closeAlertAndAssertItsText(driver, '커스텀 필터링 수행', acceptNextAlert);
	acceptNextAlert = true;

	// autocomplete.md test end
}