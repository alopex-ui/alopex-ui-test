if(DO_TEST.databinding){
	// databind.md test start


	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=databind#basic");
	driver.sleep(1000);

	// localhost 일 때, Alopex Grid lib. license alert에 대한 예외 처리
	if(baseUrl.search("localhost") >= 0){
	    seleniumIde.closeAlertAndAssertItsText(driver, 'AlopexGrid trial invalid domain', acceptNextAlert);
	    acceptNextAlert = true;  
	}

	alopexAssertEquals("id", "databind_input1", "value", "ashley");
	alopexAssertEquals("id", "databind_input2", "type", "password");
	alopexAssertEquals("id", "databind_input2", "value", "*****");
	alopexAssertCheckboxRadioSelected("id", "databind_input3", true);

	alopexAssertCheckboxRadioSelected("id", "checkbox1", false);
	alopexAssertCheckboxRadioSelected("id", "checkbox2", false);
	alopexAssertCheckboxRadioSelected("id", "checkbox3", false);

	driver.findElement(webdriver.By.id("btn_set")).click();
	alopexAssertCheckboxRadioSelected("id", "checkbox1", true);
	alopexAssertCheckboxRadioSelected("id", "checkbox2", true);

	driver.findElement(webdriver.By.id("btn_get")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '{"mycheckbox":["check1","check2"]}', acceptNextAlert);
	acceptNextAlert = true;

	driver.findElement(webdriver.By.id("html1")).click();
	driver.navigate().back();
	// localhost 일 때, Alopex Grid lib. license alert에 대한 예외 처리
	if(baseUrl.search("localhost") >= 0){
	    seleniumIde.closeAlertAndAssertItsText(driver, 'AlopexGrid trial invalid domain', acceptNextAlert);
	    acceptNextAlert = true;
	}

	alopexAssertTextContains("id", "text1", "Alopex UI");
	alopexAssertEquals("id", "value11", "value", "data");

	alopexAssertCheckboxRadioSelected("id", "check11", true);
	alopexAssertCheckboxRadioSelected("id", "check12", true);
	alopexAssertCheckboxRadioSelected("id", "check13", false);


	driver.findElement(webdriver.By.id("get4-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '{"dbchk0":["value1","value2"]}', acceptNextAlert);
	acceptNextAlert = true;

	alopexAssertCheckboxRadioSelected("id", "check21", true);
	alopexAssertCheckboxRadioSelected("id", "check22", true);
	alopexAssertCheckboxRadioSelected("id", "check23", false);

	driver.findElement(webdriver.By.id("get4-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '{"dbchk1":["value1"],"dbchk2":["value2"],"dbchk3":[]}', acceptNextAlert);
	acceptNextAlert = true;

	alopexAssertCheckboxRadioSelected("id", "check31", false);
	alopexAssertCheckboxRadioSelected("id", "check32", false);
	alopexAssertCheckboxRadioSelected("id", "check33", false);
	alopexAssertCheckboxRadioSelected("id", "check34", false);
	alopexAssertCheckboxRadioSelected("id", "check35", false);

	driver.findElement(webdriver.By.id("check31")).click();
	alopexAssertCheckboxRadioSelected("id", "check31", true);
	alopexAssertCheckboxRadioSelected("id", "check32", false);
	alopexAssertCheckboxRadioSelected("id", "check33", false);
	alopexAssertCheckboxRadioSelected("id", "check34", false);
	alopexAssertCheckboxRadioSelected("id", "check35", false);
	driver.findElement(webdriver.By.id("get5")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '{"db-num01":"1","db-yn":"n","db-yesNo":"no","db-trueFalse":false,"db-chk5":false}', acceptNextAlert);
	acceptNextAlert = true;

	driver.findElement(webdriver.By.id("check32")).click();
	alopexAssertCheckboxRadioSelected("id", "check31", true);
	alopexAssertCheckboxRadioSelected("id", "check32", true);
	alopexAssertCheckboxRadioSelected("id", "check33", false);
	alopexAssertCheckboxRadioSelected("id", "check34", false);
	alopexAssertCheckboxRadioSelected("id", "check35", false);
	driver.findElement(webdriver.By.id("get5")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '{"db-num01":"1","db-yn":"y","db-yesNo":"no","db-trueFalse":false,"db-chk5":false}', acceptNextAlert);
	acceptNextAlert = true;

	driver.findElement(webdriver.By.id("check33")).click();
	alopexAssertCheckboxRadioSelected("id", "check31", true);
	alopexAssertCheckboxRadioSelected("id", "check32", true);
	alopexAssertCheckboxRadioSelected("id", "check33", true);
	alopexAssertCheckboxRadioSelected("id", "check34", false);
	alopexAssertCheckboxRadioSelected("id", "check35", false);
	driver.findElement(webdriver.By.id("get5")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '{"db-num01":"1","db-yn":"y","db-yesNo":"yes","db-trueFalse":false,"db-chk5":false}', acceptNextAlert);
	acceptNextAlert = true;

	driver.findElement(webdriver.By.id("check34")).click();
	alopexAssertCheckboxRadioSelected("id", "check31", true);
	alopexAssertCheckboxRadioSelected("id", "check32", true);
	alopexAssertCheckboxRadioSelected("id", "check33", true);
	alopexAssertCheckboxRadioSelected("id", "check34", true);
	alopexAssertCheckboxRadioSelected("id", "check35", false);
	driver.findElement(webdriver.By.id("get5")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '{"db-num01":"1","db-yn":"y","db-yesNo":"yes","db-trueFalse":true,"db-chk5":false}', acceptNextAlert);
	acceptNextAlert = true;

	driver.findElement(webdriver.By.id("check35")).click();
	alopexAssertCheckboxRadioSelected("id", "check31", true);
	alopexAssertCheckboxRadioSelected("id", "check32", true);
	alopexAssertCheckboxRadioSelected("id", "check33", true);
	alopexAssertCheckboxRadioSelected("id", "check34", true);
	alopexAssertCheckboxRadioSelected("id", "check35", true);
	driver.findElement(webdriver.By.id("get5")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '{"db-num01":"1","db-yn":"y","db-yesNo":"yes","db-trueFalse":true,"db-chk5":true}', acceptNextAlert);
	acceptNextAlert = true;

	alopexAssertCheckboxRadioSelected("id", "radio1", false);
	alopexAssertCheckboxRadioSelected("id", "radio2", false);
	alopexAssertCheckboxRadioSelected("id", "radio3", true);
	alopexAssertCheckboxRadioSelected("id", "radio4", false);
	driver.findElement(webdriver.By.id("get6")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '{"radio6":"value3"}', acceptNextAlert);
	acceptNextAlert = true;

	alopexAssertEquals("id", "select1", "value", "opt2");

	driver.findElement(webdriver.By.id("submit1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '반드시 입력해야 하는 항목입니다. 최소 8글자 이상 입력하십시오.', acceptNextAlert);
	acceptNextAlert = true;

	alopexAssertEquals("id", "cx1", "value", "200");
	alopexAssertEquals("id", "ellipse1", "cx", "200");
	driver.findElement(webdriver.By.id("cx1")).clear();
	driver.findElement(webdriver.By.id("cx1")).sendKeys("300");
	driver.findElement(webdriver.By.id("btn_change")).click();
	alopexAssertEquals("id", "cx1", "value", "300");
	alopexAssertEquals("id", "ellipse1", "cx", "300");

	alopexAssertEquals("id", "cy1", "value", "80");
	alopexAssertEquals("id", "ellipse1", "cy", "80");
	driver.findElement(webdriver.By.id("cy1")).clear();
	driver.findElement(webdriver.By.id("cy1")).sendKeys("70");
	driver.findElement(webdriver.By.id("btn_change")).click();
	alopexAssertEquals("id", "cy1", "value", "70");
	alopexAssertEquals("id", "ellipse1", "cy", "70");

	alopexAssertEquals("id", "rx1", "value", "100");
	alopexAssertEquals("id", "ellipse1", "rx", "100");
	driver.findElement(webdriver.By.id("rx1")).clear();
	driver.findElement(webdriver.By.id("rx1")).sendKeys("200");
	driver.findElement(webdriver.By.id("btn_change")).click();
	alopexAssertEquals("id", "rx1", "value", "200");
	alopexAssertEquals("id", "ellipse1", "rx", "200");

	alopexAssertEquals("id", "ry1", "value", "50");
	alopexAssertEquals("id", "ellipse1", "ry", "50");
	driver.findElement(webdriver.By.id("ry1")).clear();
	driver.findElement(webdriver.By.id("ry1")).sendKeys("60");
	driver.findElement(webdriver.By.id("btn_change")).click();
	alopexAssertEquals("id", "ry1", "value", "60");
	alopexAssertEquals("id", "ellipse1", "ry", "60");

	alopexAssertEquals("id", "bg1", "value", "rgb(255, 255, 0)");
	alopexAssertContains("id", "ellipse1", "style", "fill: rgb\(255, 255, 0\)");
	driver.findElement(webdriver.By.id("bg1")).clear();
	driver.findElement(webdriver.By.id("bg1")).sendKeys("rgb(0, 255, 255)");
	driver.findElement(webdriver.By.id("btn_change")).click();
	alopexAssertEquals("id", "bg1", "value", "rgb(0, 255, 255)");
	alopexAssertContains("id", "ellipse1", "style", "fill: rgb\(0, 255, 255\)");


	alopexAssertEquals("id", "stroke1", "value", "rgb(255, 0, 0)");
	alopexAssertContains("id", "ellipse1", "style", "stroke: rgb\(255, 0, 0\)");
	driver.findElement(webdriver.By.id("stroke1")).clear();
	driver.findElement(webdriver.By.id("stroke1")).sendKeys("rgb(255, 0, 255)");
	driver.findElement(webdriver.By.id("btn_change")).click();
	alopexAssertEquals("id", "stroke1", "value", "rgb(255, 0, 255)");
	alopexAssertContains("id", "ellipse1", "style", "stroke: rgb\(255, 0, 255\)");

	alopexAssertEquals("id", "strokeWidth1", "value", "3");
	alopexAssertContains("id", "ellipse1", "style", "stroke-width: 3");
	driver.findElement(webdriver.By.id("strokeWidth1")).clear();
	driver.findElement(webdriver.By.id("strokeWidth1")).sendKeys("8");
	driver.findElement(webdriver.By.id("btn_change")).click();
	alopexAssertEquals("id", "strokeWidth1", "value", "8");
	alopexAssertContains("id", "ellipse1", "style", "stroke-width: 8");

	alopexAssertContains("id", "css1", "style", "background: rgb\(255, 0, 0\)");

	alopexAssertContains("css", "#sample10 > ul.List > li:nth-child(2) > img", "src", "databind/icon/apple.png");
	alopexAssertTextContains("css", "#sample10 > ul.List > li:nth-child(2) > strong", 'Apple');
	alopexAssertTextContains("css", "#sample10 > ul.List > li:nth-child(2) > label", 'Tool for poisoning a princess');
	alopexAssertContains("css", "#sample10 > ul.List > li:nth-child(3) > img", "src", "databind/icon/crystalshoes.png");
	alopexAssertTextContains("css", "#sample10 > ul.List > li:nth-child(3) > strong", 'Crystal Shoes');
	alopexAssertTextContains("css", "#sample10 > ul.List > li:nth-child(3) > label", 'Princess Maker');


	alopexIsElementNotPresent("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > a > label");
	alopexAssertNotContains("css", "#tree > li.expandable", "class", "Expanded");
	alopexAssertContains("css", "#tree > li.expandable > span", "class", "Arrow");
	alopexAssertContains("css", "#tree > li.expandable > a > img", "src", "databind/icon/windows/folder.png");
	alopexAssertTextContains("css", "#tree > li.expandable > a > label", 'folder');
	alopexAssertContains("css", "#tree > li:nth-child(2) > a > img", "src", "databind/icon/windows/file.png");
	alopexAssertTextContains("css", "#tree > li:nth-child(2) > a > label", 'Unknown');

	alopexAssertContainsInComputedStyle("css", "#tree > li.expandable > ul", "display", "none");
	driver.findElement(webdriver.By.css("#tree > li.expandable > span")).click();
	alopexAssertContains("css", "#tree > li.expandable", "class", "Expanded");
	alopexAssertContainsInComputedStyle("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul", "display", "block");
	alopexAssertContainsInComputedStyle("css", "#tree > li.expandable.af-tree-expanded.Expanded > span", "background", "css/images/component_default.png");
	alopexAssertContainsInComputedStyle("css", "#tree > li.expandable.af-tree-expanded.Expanded > span", "background", "-152px -560px");

	alopexIsElementPresent("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > a > label");
	alopexAssertNotContains("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > span", "class", "Expanded");

	alopexAssertNotContains("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > a", "class", "Selected");
	driver.findElement(webdriver.By.css("#tree > li.expandable.af-tree-expanded.Expanded > ul > li > a")).click();
	driver.sleep(1000);
	alopexAssertContains("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > a", "class", "Selected");


	alopexAssertContainsInComputedStyle("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > ul", "display", "none");
	driver.findElement(webdriver.By.css("#tree > li.expandable.af-tree-expanded.Expanded > ul > li > span")).click();
	alopexAssertContainsInComputedStyle("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > ul", "display", "block");

	alopexAssertContainsInComputedStyle("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > ul > li:nth-child(1) > a", "background", "css/images/component_default.png");
	alopexAssertContainsInComputedStyle("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > ul > li:nth-child(1) > a", "background", "-250px -555px");

	alopexAssertTextContains("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > ul > li:nth-child(1) > a > label", 'bmp');
	alopexAssertTextContains("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > ul > li:nth-child(2) > a > label", 'txt');
	alopexAssertContains("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > ul > li:nth-child(1) > a > img", "src", "databind/icon/windows/bmp.png");

	alopexAssertNotContains("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > ul > li:nth-child(1) > a", "class", "Selected");
	driver.findElement(webdriver.By.css("#tree > li.expandable.af-tree-expanded.Expanded > ul > li > ul > li:nth-child(1) > a > label")).click();
	driver.sleep(500);
	alopexAssertContains("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > ul > li:nth-child(1) > a", "class", "Selected");
	alopexAssertNotContains("css", "#tree > li.expandable.af-tree-expanded.Expanded > ul > li > a", "class", "Selected");




	alopexAssertContains("css", "#myMovie > div > ul > li:nth-child(2) > a > img", "src", "databind/icon/titanic.png");
	alopexAssertTextContains("css", "#myMovie > div > ul > li:nth-child(2) > a > strong", 'Titanic');
	alopexAssertTextContains("css", "#myMovie > div > ul > li:nth-child(2) > a > span", 'James Camero');
	alopexAssertContains("css", "#myMovie > div > ul > li:nth-child(6) > a > img", "src", "databind/icon/jsa.png");
	alopexAssertTextContains("css", "#myMovie > div > ul > li:nth-child(6) > a > strong", '공동경비구역 JSA');
	alopexAssertTextContains("css", "#myMovie > div > ul > li:nth-child(6) > a > span", '박찬욱');

	alopexAssertContains("css", "#myMovieForm > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > img", "src", "databind/icon/titanic.png");
	alopexAssertTextContains("css", "#myMovieForm > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > span", '타이타닉');
	alopexAssertTextContains("css", "#myMovieForm > div > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > span", '제임스 카메론');



	driver.findElement(webdriver.By.id("databind1")).click();

	driver.findElement(webdriver.By.css("#setData1 > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > a")).click();
	driver.navigate().back();
	// localhost 일 때, Alopex Grid lib. license alert에 대한 예외 처리
	if(baseUrl.search("localhost") >= 0){
	    seleniumIde.closeAlertAndAssertItsText(driver, 'AlopexGrid trial invalid domain', acceptNextAlert);
	    acceptNextAlert = true;
	}

	alopexAssertTextContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(2) > td:nth-child(3)", '<a href="http://ui.alopex.io">Alopex UI</a>');
	alopexAssertContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(3) > td:nth-child(3) > input", "value", "input text");
	alopexAssertCheckboxRadioSelected("id", "radio11", false);
	alopexAssertCheckboxRadioSelected("id", "radio21", true);
	alopexAssertCheckboxRadioSelected("id", "radio31", false);
	alopexAssertCheckboxRadioSelected("id", "radio41", false);
	alopexAssertCheckboxRadioSelected("id", "checkbox11", true);
	alopexAssertCheckboxRadioSelected("id", "checkbox21", true);
	alopexAssertCheckboxRadioSelected("id", "checkbox31", false);
	alopexAssertCheckboxRadioSelected("id", "subscription", true);
	alopexAssertContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(7) > td:nth-child(3) > select", "value", "option3");
	alopexAssertContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(8) > td:nth-child(3) > select", "value", "option3");


	driver.findElement(webdriver.By.css("#form1 > input.Button")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '반드시 입력해야 하는 항목입니다. 최소 8글자 이상 입력하십시오.', acceptNextAlert);
	acceptNextAlert = true;
	driver.findElement(webdriver.By.id("validation1")).clear();
	driver.findElement(webdriver.By.id("validation1")).sendKeys("123");
	driver.findElement(webdriver.By.css("#form1 > input.Button")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '최소 8글자 이상 입력하십시오.', acceptNextAlert);
	acceptNextAlert = true;
	driver.findElement(webdriver.By.id("validation1")).clear();
	driver.findElement(webdriver.By.id("validation1")).sendKeys("12345678");
	driver.findElement(webdriver.By.css("#form1 > input.Button")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '유효한 입력값입니다.', acceptNextAlert);
	acceptNextAlert = true;
	driver.findElement(webdriver.By.id("validation1")).clear();
	driver.findElement(webdriver.By.id("validation1")).sendKeys("123456789012345");
	driver.findElement(webdriver.By.css("#form1 > input.Button")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '최대 14글자 까지 입력 가능합니다.', acceptNextAlert);
	acceptNextAlert = true;

	alopexAssertContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(10) > td:nth-child(3) > img", "src", "http://ui.alopex.io/favicon.ico");
	alopexAssertContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(11) > td:nth-child(3) > input", "style", "background: yellow");

	alopexAssertContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(12) > td:nth-child(3) > ul > li:nth-child(2) > img", "src", "databind/icon/apple.png");
	alopexAssertTextContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(12) > td:nth-child(3) > ul > li:nth-child(2) > strong", 'Apple');
	alopexAssertTextContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(12) > td:nth-child(3) > ul > li:nth-child(2) > span", 'Tool for poisoning a princess');
	alopexAssertContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(12) > td:nth-child(3) > ul > li:nth-child(3) > img", "src", "databind/icon/crystalshoes.png");
	alopexAssertTextContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(12) > td:nth-child(3) > ul > li:nth-child(3) > strong", 'Crystal Shoes');
	alopexAssertTextContains("css", "#setData1 > div > div > table > tbody > tr:nth-child(12) > td:nth-child(3) > ul > li:nth-child(3) > span", 'Princess Maker');

	driver.findElement(webdriver.By.css("#btn_getData")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '{"bgColor":"#efefef","firstname":"Gil-dong","lastname":"Hong","password":"password","gender":"male","phone":"02-6400-3333","cell":"010-2222-2222","description":"SK C&C Alopex UI Framework Manager","interest":["books","sports"]}', acceptNextAlert);
	acceptNextAlert = true;

	driver.findElement(webdriver.By.id("userInputTime")).clear();
	driver.findElement(webdriver.By.id("userInputTime")).sendKeys("1130");
	driver.findElement(webdriver.By.id("setDataWithDataControl")).click();
	alopexAssertTextContains("id", "setDataResult", '11:30');

	// databind.md test end
}