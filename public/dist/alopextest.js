/*

Alopex UI Test Script by SK Holdings C&C :
 
* http://cc.sk.co.kr/
* http://ui.alopex.io/
 
Full source at https://github.com/alopex-ui/alopex-ui-test
 
Copyright © 2010-2017 SK Holdings. All rights reserved.

*/
/*

Alopex UI Test Script by SK Holdings C&C :
 
* http://cc.sk.co.kr/
* http://ui.alopex.io/
 
Full source at https://github.com/alopex-ui/alopex-ui-test
 
Copyright © 2010-2017 SK Holdings. All rights reserved.

*/
// Homepage

// var baseUrl = "http://localhost:9000" // Homepage local
// var baseUrl = "http://uistg.alopex.io" // Homepage stg
var baseUrl = "http://ui.alopex.io" // Homepage prd

// Test Page
var testPageUrl = "https://alopextestpage.herokuapp.com" // Test Page
// var testPageUrl = "http://localhost:5000"

var DO_TEST = {
	// JavaScript API
	databinding: 			true,
	maskedinput: 			true,
	navigation: 			true,
	page: 					true,
	popup: 					true,
	progress: 				true,
	request: 				true,
	setup: 					true,
	storage: 				true,
	validator: 				true,
	convert: 				true,

	// Component
	accordion: 				true,
	autocomplete: 			true,
	button: 				true,
	carousel: 				true,
	checkbox: 				true,
	dateinput: 				true,
	datepicker: 			true,
	daterange: 				true,
	dialog: 				true,
	dropdown: 				true,
	dropdownbutton: 		true,
	fileupload: 			true,
	groupbutton: 			true,
	icon: 					true,
	list: 					true,
	multiselect: 			true,
	navigationmenu: 		true,
	paging: 				true,
	panel: 					true,
	progressbar: 			true,
	radio: 					true,
	select: 				true,
	spinner: 				true,
	splitter: 				true,
	table: 					true,
	tabs: 					true,
	textinput: 				true,
	textarea: 				true,
	tooltip: 				true,
	tree: 					true,
	webeditor: 				true,

	// Test Page
	"Autocomplete-AUI-TS-011": 	true,
	"Dateinput-AUI-TS-006":		true,
	"Datepicker-AUI-TS-005": 	true,
	"Tabs-AUI-TS-001": 			true
}

var test = function(webdriver, driver, baseUrl, acceptNextAlert, verificationErrors, testPageUrl) {
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
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
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
if(DO_TEST.maskedinput){
    // maskedinput.md test start
var DEL = "\u0008";
var LEFT = webdriver.Key.ARROW_LEFT;

    driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=maskedinput#basic");
    driver.sleep(1000);
    alopexAssertMaskedInputFormatting('id', 'mobilephone1', [
        {send:"01033334444",                                expect:"010-3333-4444"},
        {send:"010333344445555555",                         expect:"010-3333-4444"},
        {send:"123"+LEFT+LEFT+"456",                         expect:"145-623"},
        {send:"1234567"+LEFT+LEFT+LEFT+LEFT+LEFT+"89",       expect:"123-8945-67"},
        {send:"123",                                        expect:"123"},
        {send:"1234",                                       expect:"123-4"},
        {send:"A",                                          expect:""},
        {send:"a",                                          expect:""},
        {send:"ㄱ",                                          expect:""},
        {send:"@",                                          expect:""},
        {send:" ",                                          expect:""},
        {send:"1",                                          expect:"1"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter1', [
        {send:"123",             expect:"123"},
        // {send:"홍길동",         expect:"홍길동"},
        // {send:"123홍길동",      expect:"123홍길동"},
        {send:"123@@",           expect:"123"},
        {send:"A",               expect:""},
        {send:"a",               expect:""},
        // {send:"ㄱ",            expect:"ㄱ"},
        {send:" ",               expect:" "},
        {send:"@",               expect:""},
        {send:"1",               expect:"1"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter2', [
        {send:"123",             expect:"123"},
        {send:"abc",             expect:"abc"},
        {send:"123abc",          expect:"123abc"},
        {send:"123@@",           expect:"123"},
        {send:"A",               expect:""},
        {send:"a",               expect:"a"},
        // {send:"ㄱ",            expect:""},
        {send:" ",               expect:""},
        {send:"@",               expect:""},
        {send:"1",               expect:"1"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter3', [
        {send:"abc",             expect:"abc"},
        {send:" ",               expect:" "},
        {send:"a b c",           expect:"a b c"},
        {send:"abc@@",           expect:"abc"},
        {send:"A",               expect:"A"},
        {send:"a",               expect:"a"},
        // {send:"ㄱ",            expect:""},
        {send:" ",               expect:" "},
        {send:"@",               expect:""},
        {send:"1",               expect:""}
    ]);

    alopexAssertMaskedInputFormatting('id', 'jumin', [
        {send:"7708081112233",              expect:"770808-1112233"},
        {send:"7708081112233444",           expect:"770808-1112233"},
        {send:"770808",                     expect:"770808"},
        {send:"770808111",                  expect:"770808-111"},
        {send:"7708081"+DEL,                expect:"770808-"},
        {send:"7708081"+DEL+DEL,      expect:"770808"},
        {send:"abc",                        expect:""},
        {send:" ",                          expect:""},
        {send:"a b c",                      expect:""},
        {send:"abc@@",                      expect:""},
        {send:"A",                          expect:""},
        {send:"a",                          expect:""},
        // {send:"ㄱ",                       expect:""},
        {send:" ",                          expect:""},
        {send:"@",                          expect:""},
        {send:"1",                          expect:"1"}
    ]);


    alopexAssertMaskedInputFormatting('id', 'mobilephone', [
        {send:"01012345678",            expect:"010-1234-5678"},
        {send:"0101234567890",          expect:"010-1234-5678"},
        {send:"010123456",              expect:"010-1234-56"},
        {send:"0101",                   expect:"010-1"},
        {send:"010",                    expect:"010"},
        {send:"0101"+DEL,               expect:"010-"},
        {send:"0101"+DEL+DEL,     expect:"010"},
        {send:"abc",                    expect:""},
        {send:" ",                      expect:""},
        {send:"a b c",                  expect:""},
        {send:"abc@@",                  expect:""},
        {send:"A",                      expect:""},
        {send:"a",                      expect:""},
        // {send:"ㄱ",                   expect:""},
        {send:" ",                      expect:""},
        {send:"@",                      expect:""},
        {send:"1",                      expect:"1"}
    ]);


    alopexAssertMaskedInputFormatting('id', 'won_money', [
        {send:"1",                                          expect:"1원"},
        {send:"1234",                                       expect:"1,234원"},
        {send:"123123123123",                               expect:"123,123,123,123원"},
        {send:"1231231231231",                              expect:"123,123,123,123원"},
        {send:"123456"+LEFT+LEFT+LEFT+LEFT+LEFT+"78",       expect:"12,378,456원"},
        {send:"1234"+DEL,                expect:"1,234"},
        {send:"1234"+DEL + '5',          expect:"12,345원"},
        {send:"abc",                     expect:""},
        {send:" ",                       expect:""},
        {send:"a b c",                   expect:""},
        {send:"abc@@",                   expect:""},
        {send:"A",                       expect:""},
        {send:"a",                       expect:""},
        // {send:"ㄱ",                    expect:""},
        {send:" ",                       expect:""},
        {send:"@",                       expect:""},
        {send:"1",                       expect:"1원"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'dollar_money', [
        {send:"1",                      expect:"1"},
        {send:"12",                     expect:"12"},
        {send:"123",                    expect:"1.23"},
        {send:"12345",                  expect:"123.45"},
        {send:"123456",                 expect:"1,234.56"},
        {send:"123456"+DEL,             expect:"1,234.5"},
        {send:"123456"+DEL+DEL,         expect:"1,234."},
        {send:"123456"+DEL+DEL+"7",     expect:"123.47"},
        {send:"123456"+DEL+DEL+"78",    expect:"1,234.78"},
        {send:"abc",                    expect:""},
        {send:" ",                      expect:""},
        {send:"a b c",                  expect:""},
        {send:"abc@@",                  expect:""},
        {send:"A",                      expect:""},
        {send:"a",                      expect:""},
        // {send:"ㄱ",                   expect:""},
        {send:" ",                      expect:""},
        {send:"@",                      expect:""},
        {send:"1",                      expect:"1"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'productCode', [
        {send:"B12345C",                expect:"B123-45C"},
        {send:"B12345CCC",              expect:"B123-45C"},
        {send:"B1234",                  expect:"B123-4"},
        {send:"B1234"+DEL,              expect:"B123-"},
        {send:"B1234"+DEL+DEL,          expect:"B123"},
        {send:"B1234"+DEL+DEL+"4",      expect:"B123-4"},
        {send:"abc",                    expect:""},
        {send:" ",                      expect:""},
        {send:"a b c",                  expect:""},
        {send:"abc@@",                  expect:""},
        {send:"A",                      expect:"A"},
        {send:"a",                      expect:""},
        // {send:"ㄱ",                   expect:""},
        {send:" ",                      expect:""},
        {send:"@",                      expect:""},
        {send:"1",                      expect:""}
    ]);

    alopexAssertMaskedInputFormatting('id', 'date', [
        {send:"20161231",               expect:"2016/12/31"},
        {send:"201612",                 expect:"2016/12"},
        {send:"2016",                   expect:"2016"},
        {send:"20161"+DEL,              expect:"2016/"},
        {send:"20161"+DEL+DEL,          expect:"2016"},
        {send:"20161"+DEL+DEL+"04",     expect:"2016/04"},
        {send:"abc",                    expect:""},
        {send:" ",                      expect:""},
        {send:"a b c",                  expect:""},
        {send:"abc@@",                  expect:""},
        {send:"A",                      expect:""},
        {send:"a",                      expect:""},
        // {send:"ㄱ",                   expect:""},
        {send:" ",                      expect:""},
        {send:"@",                      expect:""},
        {send:"1",                      expect:"1"}
    ]);


    alopexAssertMaskedInputFormatting('id', 'date_time', [
        {send:"20161231",                       expect:"2016-12-31"},
        {send:"201612",                         expect:"2016-12"},
        {send:"2016",                           expect:"2016"},
        {send:"20161"+DEL,                      expect:"2016-"},
        {send:"20161"+DEL+DEL,                  expect:"2016"},
        {send:"20161"+DEL+DEL+"04",             expect:"2016-04"},
        {send:"201612311259",                   expect:"2016-12-31 12:59"},
        {send:"2016123112",                     expect:"2016-12-31 12"},
        {send:"20161231125",                    expect:"2016-12-31 12:5"},
        {send:"20161231125"+DEL,                expect:"2016-12-31 12:"},
        {send:"20161231125"+DEL+DEL,            expect:"2016-12-31 12"},
        {send:"20161231125"+DEL+DEL+"11",       expect:"2016-12-31 12:11"},
        {send:"201612311",                      expect:"2016-12-31 1"},
        {send:"201612311"+DEL,                  expect:"2016-12-31 "},
        {send:"abc",                            expect:""},
        {send:" ",                              expect:""},
        {send:"a b c",                          expect:""},
        {send:"abc@@",                          expect:""},
        {send:"A",                              expect:""},
        {send:"a",                              expect:""},
        // {send:"ㄱ",                           expect:""},
        {send:" ",                              expect:""},
        {send:"@",                              expect:""},
        {send:"1",                              expect:"1"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'complex1', [
        {send:"0aAbBE1",                        expect:"0aAbBE1"},
        {send:"0A",                             expect:"0"},
        {send:"0a",                             expect:"0a"},
        {send:"0AaA",                           expect:"0aA"},
        {send:"0aA",                            expect:"0aA"},
        {send:"0aa",                            expect:"0a"},
        {send:"0a1A",                           expect:"0aA"},
        {send:"0aAb",                           expect:"0aAb"},
        {send:"0aAB",                           expect:"0aA"},
        {send:"0aA1",                           expect:"0aA1"},
        {send:"0aAA1",                          expect:"0aA1"},
        {send:"0aAbB",                          expect:"0aAbB"},
        {send:"0aAbb",                          expect:"0aAb"},
        {send:"0aA11",                          expect:"0aA11"},
        {send:"0aA1b1",                         expect:"0aA11"},
        {send:"0aAbBa",                         expect:"0aAbBa"},
        {send:"0aAbBA",                         expect:"0aAbBA"},
        {send:"0aAbB1",                         expect:"0aAbB"},
        {send:"0aAbB1a",                        expect:"0aAbBa"},
        {send:"0aAbBa",                         expect:"0aAbBa"},
        {send:"0aAbBA",                         expect:"0aAbBA"},
        {send:"0aAbB1",                         expect:"0aAbB"},
        {send:"0aAbB1a",                        expect:"0aAbBa"},
        {send:"0aAbBA",                         expect:"0aAbBA"},
        {send:"0aAbBE1",                        expect:"0aAbBE1"},
        {send:"0aAbBEa",                        expect:"0aAbBEa"},
        {send:"0aAbBEA",                        expect:"0aAbBEA"},
        {send:"0aAbBE11",                       expect:"0aAbBE1"},
        {send:"0aAbBE1"+DEL,                    expect:"0aAbBE"},
        {send:"0aAbBE1"+DEL+"0",                expect:"0aAbBE0"},
        {send:"abc",                            expect:""},
        {send:" ",                              expect:""},
        {send:"a b c",                          expect:""},
        {send:"abc@@",                          expect:""},
        {send:"A",                              expect:""},
        {send:"a",                              expect:""},
        // {send:"ㄱ",                           expect:""},
        {send:" ",                              expect:""},
        {send:"@",                              expect:""},
        {send:"1",                              expect:"1"}
    ]);

    driver.findElement(webdriver.By.id("set")).click();
    alopexAssertContains('id', "jumin_databinding", 'value', "840821-9933555");

    driver.findElement(webdriver.By.id("get")).click();
    seleniumIde.closeAlertAndAssertItsText(driver, '{"data":"8408219933555"}', acceptNextAlert);
    acceptNextAlert = true;

    driver.findElement(webdriver.By.id("formatting")).click();
    alopexAssertContains('id', "userinput2", 'value', "123,400,000원");

    alopexAssertMaskedInputFormatting('id', 'keyfilter_digits', [
        {send:" ",                              expect:""},
        {send:"A",                              expect:""},
        {send:"a",                              expect:""},
        // {send:"ㄱ",                           expect:""},
        {send:"@",                              expect:""},
        {send:"1",                              expect:"1"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter_decimal', [
        {send:" ",                              expect:""},
        {send:"A",                              expect:""},
        {send:"a",                              expect:""},
        // {send:"ㄱ",                           expect:""},
        {send:"@",                              expect:""},
        {send:"1",                              expect:"1"},
        {send:"1.",                             expect:"1."},
        {send:"1.1",                            expect:"1.1"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter_lowercase', [
        {send:" ",                              expect:""},
        {send:"A",                              expect:""},
        {send:"a",                              expect:"a"},
        // {send:"ㄱ",                           expect:""},
        {send:"@",                              expect:""},
        {send:"1",                              expect:""}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter_uppercase', [
        {send:" ",                              expect:""},
        {send:"A",                              expect:"A"},
        {send:"a",                              expect:""},
        // {send:"ㄱ",                           expect:""},
        {send:"@",                              expect:""},
        {send:"1",                              expect:""}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter_english', [
        {send:" ",                              expect:""},
        {send:"A",                              expect:"A"},
        {send:"a",                              expect:"a"},
        // {send:"ㄱ",                           expect:""},
        {send:"@",                              expect:""},
        {send:"1",                              expect:""}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter_korean', [
        {send:" ",                              expect:" "},
        {send:"A",                              expect:""},
        {send:"a",                              expect:""},
        // {send:"ㄱ",                           expect:""},
        {send:"@",                              expect:""},
        {send:"1",                              expect:""}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter_singlespace', [
        {send:" ",                              expect:" "},
        {send:"A",                              expect:""},
        {send:"a",                              expect:""},
        // {send:"ㄱ",                           expect:""},
        {send:"@",                              expect:""},
        {send:"1",                              expect:""}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter_custom1', [
        {send:" ",                              expect:""},
        {send:"A",                              expect:"A"},
        {send:"a",                              expect:"a"},
        // {send:"ㄱ",                           expect:""},
        {send:"@",                              expect:""},
        {send:"1",                              expect:""}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter_custom2', [
        {send:" ",                              expect:""},
        {send:"A",                              expect:""},
        {send:"a",                              expect:""},
        // {send:"ㄱ",                           expect:""},
        {send:"@",                              expect:""},
        {send:"1",                              expect:"1"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter_custom3', [
        {send:" ",                              expect:""},
        {send:"A",                              expect:""},
        {send:"a",                              expect:""},
        // {send:"ㄱ",                           expect:""},
        {send:"1",                              expect:""},
        {send:"!",                              expect:"!"},
        {send:"@",                              expect:"@"},
        {send:"#",                              expect:"#"},
        {send:"@@@",                            expect:"@@@"},
        {send:"!@#",                            expect:"!@#"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'keyfilter_custom4', [
        {send:" ",                              expect:""},
        {send:"A",                              expect:""},
        {send:"a",                              expect:"a"},
        // {send:"ㄱ",                           expect:""},
        {send:"1",                              expect:""},
        {send:"!",                              expect:"!"},
        {send:"@",                              expect:"@"},
        {send:"#",                              expect:"#"},
        {send:"@@@",                            expect:"@@@"},
        {send:"!@#a",                            expect:"!@#a"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'email', [
        {send:" ",                              expect:""},
        {send:"A",                              expect:"A"},
        {send:"a",                              expect:"a"},
        // {send:"ㄱ",                           expect:""},
        {send:"1",                              expect:"1"},
        {send:"!",                              expect:""},
        {send:"_",                              expect:"_"},
        {send:"-",                              expect:"-"},
        {send:"@",                              expect:"@"},
        {send:"one-two_3@four.com",     expect:"one-two_3@four.com"}
    ]);

    alopexAssertMaskedInputFormatting('id', 'user2', [
        {send:"-0.1",               expect:"-0.1"},
        {send:"-1",                 expect:"-1"},
        {send:"12345",              expect:"12345"},
        {send:"12345.12",           expect:"12345.12"},
        {send:".12",                expect:".12"},
        {send:"0.12",               expect:"0.12"},
        {send:"123456789012",       expect:"123456789012"},
        {send:"0.123",              expect:"0.12"},
        {send:"1234567890123",       expect:"123456789012"},
        {send:"1234567890.12",       expect:"1234567890.12"},
        {send:"1234567890.123",       expect:"1234567890.12"},
        {send:"A",                  expect:""},
        {send:"a",                  expect:""},
        // {send:"ㄱ",               expect:""},
        {send:"1",                  expect:"1"},
        {send:"@",                  expect:""}
    ]);

    // maskedinput.md test end
}
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
if(DO_TEST.navigation){
	// navigation.md test start

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=navigate#basic");
	driver.sleep(1000);

	driver.findElement(webdriver.By.id("btn_navigate1")).click();
	driver.navigate().back();
	driver.findElement(webdriver.By.id("btn_navigate_back")).click();
	driver.findElement(webdriver.By.id("btn_navigate_next")).click();
	driver.findElement(webdriver.By.id("btn_navigate_next")).click();
	driver.findElement(webdriver.By.id("btn_navigate_next")).click();
	driver.findElement(webdriver.By.id("btn_back")).click();
	driver.findElement(webdriver.By.id("btn_back")).click();
	driver.findElement(webdriver.By.id("btn_back")).click();
	driver.findElement(webdriver.By.id("btn_back")).click();

	// navigation.md test end
}

/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
if(DO_TEST.page){
	// page.md test start

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=page#basic");
	driver.sleep(1000);

	driver.findElement(webdriver.By.id("btn_page")).click();
	driver.sleep(1000);
	// localhost 일 때, Alopex Grid lib. license alert에 대한 예외 처리
	if(baseUrl.search("localhost") >= 0){
	    seleniumIde.closeAlertAndAssertItsText(driver, 'AlopexGrid trial invalid domain', acceptNextAlert);
	    acceptNextAlert = true;  
	}
	alopexAssertTextContains("css", "body > div:nth-child(3) > span", 'target=page');
	driver.findElement(webdriver.By.id("btn_request")).click();
	driver.sleep(500);
	seleniumIde.closeAlertAndAssertItsText(driver, 'success!!', acceptNextAlert);
	acceptNextAlert = true;  
	driver.navigate().back();

	// page.md test end
}
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
if(DO_TEST.popup){
	// popup.md test start

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=popup#basic");
	driver.sleep(1000);

	driver.findElement(webdriver.By.id("btn_popup")).click();
	driver.sleep(200);
	driver.findElement(webdriver.By.xpath("//*[contains(@class, 'DialogBtn')]")).click();
	driver.sleep(200);
	driver.findElement(webdriver.By.id("btn_popupnoiframe")).click();
	driver.sleep(200);
	driver.findElement(webdriver.By.xpath("//*[contains(@class, 'DialogBtn')]")).click();
	driver.sleep(200);
	driver.findElement(webdriver.By.id("btn_windowpopup")).click();
	driver.sleep(0);
	alopexSwitchWindow(1);
	driver.sleep(2000);
	alopexGetEval('window.document.domain', 'VariablesOnlyForStoreEval');
	alopexAssertLocation(baseUrl + "/2.3/dev-js/popup/popup.html");
	alopexAssertTextContains('xpath', "//*[contains(@class, 'Button')]", "child");
	driver.executeScript('$a.close();');
	alopexSwitchWindow(0);
	driver.sleep(2000);
	driver.findElement(webdriver.By.id("btn_data_send")).click();
	driver.sleep(3000);
	alopexSwitchFrame(1);
	alopexAssertTextContains('id', "spanData", "red");
	alopexSwitchFrame(0);
	driver.findElement(webdriver.By.xpath("//*[contains(@class, 'DialogBtn')]")).click();
	driver.findElement(webdriver.By.id("btn_popupdata")).click();
	alopexSwitchFrame(1);
	driver.findElement(webdriver.By.id("btn_closePop")).click();
	/* @type String */
	var msg = seleniumIde.closeAlertAndGetItsText(driver, acceptNextAlert);
	acceptNextAlert = true;
	alopexAssertContains('id', "btn_popupdata", 'style', "color: red;");

	driver.findElement(webdriver.By.id("btn_popupOpts")).click();
	driver.findElement(webdriver.By.xpath("//*[contains(@class, 'DialogBtn')]")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'popup closed!', acceptNextAlert);
	acceptNextAlert = true;

	driver.findElement(webdriver.By.id("btn_popupOpts")).click();
	driver.findElement(webdriver.By.id("close1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'popup closed!', acceptNextAlert);
	acceptNextAlert = true;

	// popup.md test end
}
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
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
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */

/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
if(DO_TEST.storage){
	// storage.md test start

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=storage#basic");
	driver.sleep(1000);

	driver.findElement(webdriver.By.id("myKey")).clear();
	driver.findElement(webdriver.By.id("myKey")).sendKeys("key1");
	driver.findElement(webdriver.By.id("myVal")).clear();
	driver.findElement(webdriver.By.id("myVal")).sendKeys("value1");

	driver.sleep(1000);
	driver.findElement(webdriver.By.id("btn_session")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'key1 세션 저장 성공', acceptNextAlert);
	acceptNextAlert = true;

	driver.findElement(webdriver.By.id("myVal")).clear();
	driver.sleep(1000);
	driver.findElement(webdriver.By.id("btn_session")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'key1 세션값 : value1', acceptNextAlert);
	acceptNextAlert = true;

	// storage.md test end
}
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
if(DO_TEST.validator){
	// validator.md test start
	var DEL = "\u0008";

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=validator#basic");
	driver.sleep(1000);


	// form1 inputVali1
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1']", "");
	driver.findElement(webdriver.By.id("inputVali1")).click();
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1']", "반드시 입력해야 하는 항목입니다.");

	driver.findElement(webdriver.By.id("inputVali1")).clear();
	driver.findElement(webdriver.By.id("inputVali1")).sendKeys("a");
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1']", "최소 2글자 이상 입력하십시오.");

	driver.findElement(webdriver.By.id("inputVali1")).sendKeys("b");
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1']", "");

	driver.findElement(webdriver.By.id("inputVali1")).sendKeys(DEL);
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1']", "최소 2글자 이상 입력하십시오.");

	driver.findElement(webdriver.By.id("inputVali1")).sendKeys(DEL);
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1']", "반드시 입력해야 하는 항목입니다.");

	// form1 inputVali1JS
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1JS']", "");
	driver.findElement(webdriver.By.id("inputVali1JS")).click();
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1JS']", "반드시 입력해야 하는 항목입니다.");

	driver.findElement(webdriver.By.id("inputVali1JS")).clear();
	driver.findElement(webdriver.By.id("inputVali1JS")).sendKeys("a");
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1JS']", "최소 2글자 이상 입력하십시오.");

	driver.findElement(webdriver.By.id("inputVali1JS")).sendKeys("b");
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1JS']", "");

	driver.findElement(webdriver.By.id("inputVali1JS")).sendKeys(DEL);
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1JS']", "최소 2글자 이상 입력하십시오.");

	driver.findElement(webdriver.By.id("inputVali1JS")).sendKeys(DEL);
	alopexAssertTextContains("css", "#form1 span[data-for='inputVali1JS']", "반드시 입력해야 하는 항목입니다.");


	// form2 inputVali2
	alopexAssertTextContains("css", "#form2 span[data-for='inputVali2']", "");
	driver.findElement(webdriver.By.id("inputVali2")).click();
	alopexAssertTextContains("css", "#form2 span[data-for='inputVali2']", "ID를 반드시 입력하세요!");

	driver.findElement(webdriver.By.id("inputVali2")).clear();
	driver.findElement(webdriver.By.id("inputVali2")).sendKeys("a");
	alopexAssertTextContains("css", "#form2 span[data-for='inputVali2']", "");

	driver.findElement(webdriver.By.id("inputVali2")).sendKeys(DEL);
	alopexAssertTextContains("css", "#form2 span[data-for='inputVali2']", "ID를 반드시 입력하세요!");

	// form2 inputVali2JS
	alopexAssertTextContains("css", "#form2 span[data-for='inputVali2JS']", "");
	driver.findElement(webdriver.By.id("inputVali2JS")).click();
	alopexAssertTextContains("css", "#form2 span[data-for='inputVali2JS']", "이름을 반드시 입력하세요!");

	driver.findElement(webdriver.By.id("inputVali2JS")).clear();
	driver.findElement(webdriver.By.id("inputVali2JS")).sendKeys("a");
	alopexAssertTextContains("css", "#form2 span[data-for='inputVali2JS']", "");

	driver.findElement(webdriver.By.id("inputVali2JS")).sendKeys(DEL);
	alopexAssertTextContains("css", "#form2 span[data-for='inputVali2JS']", "이름을 반드시 입력하세요!");


	// form3
	driver.findElement(webdriver.By.id("inputVali3")).click();
	driver.findElement(webdriver.By.id("inputVali3JS")).click(); // inputVali3 을 blur 시키기 위함
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3']", "반드시 입력해야 하는 항목입니다.");
	driver.findElement(webdriver.By.id("inputVali3")).click(); // inputVali3JS 을 blur 시키기 위함
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3JS']", "반드시 입력해야 하는 항목입니다.");

	// form3 inputVali3
	driver.findElement(webdriver.By.id("inputVali3")).clear();
	driver.findElement(webdriver.By.id("inputVali3")).sendKeys("a");
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3']", ""); // onkeyup:false, onchange:false 적용되었기에, 빈값 유지한다.
	driver.findElement(webdriver.By.id("inputVali3JS")).click(); // inputVali3 을 blur 시키기 위함
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3']", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("inputVali3")).sendKeys("b");
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3']", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("inputVali3JS")).click(); // inputVali3 을 blur 시키기 위함
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3']", "");
	driver.findElement(webdriver.By.id("inputVali3")).sendKeys(DEL);
	driver.findElement(webdriver.By.id("inputVali3JS")).click(); // inputVali3 을 blur 시키기 위함
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3']", "최소 2글자 이상 입력하십시오.");

	// form3 inputVali3JS
	driver.findElement(webdriver.By.id("inputVali3JS")).clear();
	driver.findElement(webdriver.By.id("inputVali3JS")).sendKeys("a");
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3JS']", ""); // onkeyup:false, onchange:false 적용되었기에, 빈값 유지한다.
	driver.findElement(webdriver.By.id("inputVali3")).click(); // inputVali3JS 을 blur 시키기 위함
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3JS']", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("inputVali3JS")).sendKeys("b");
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3JS']", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("inputVali3")).click(); // inputVali3JS 을 blur 시키기 위함
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3JS']", "");
	driver.findElement(webdriver.By.id("inputVali3JS")).sendKeys(DEL);
	driver.findElement(webdriver.By.id("inputVali3")).click(); // inputVali3JS 을 blur 시키기 위함
	alopexAssertTextContains("css", "#form3 span[data-for='inputVali3JS']", "최소 2글자 이상 입력하십시오.");


	// formInit inputValiInit
	alopexAssertTextContains("css", "#formInit span[data-for='inputValiInit']", "반드시 입력해야 하는 항목입니다.");
	driver.findElement(webdriver.By.id("inputValiInit")).clear();
	driver.findElement(webdriver.By.id("inputValiInit")).sendKeys("a");
	alopexAssertTextContains("css", "#formInit span[data-for='inputValiInit']", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("inputValiInit")).sendKeys("b");
	alopexAssertTextContains("css", "#formInit span[data-for='inputValiInit']", "");
	driver.findElement(webdriver.By.id("inputValiInit")).sendKeys(DEL);
	alopexAssertTextContains("css", "#formInit span[data-for='inputValiInit']", "최소 2글자 이상 입력하십시오.");

	// form4 inputVali4
	alopexAssertTextContains("css", "#form4 span[data-for='inputVali4']", "");
	driver.findElement(webdriver.By.id("inputVali4_submit")).click();
	alopexAssertTextContains("css", "#form4 span[data-for='inputVali4']", "반드시 입력해야 하는 항목입니다.");
	driver.findElement(webdriver.By.id("inputVali4")).clear();
	driver.findElement(webdriver.By.id("inputVali4")).sendKeys("a");
	driver.findElement(webdriver.By.id("inputVali4_submit")).click();
	alopexAssertTextContains("css", "#form4 span[data-for='inputVali4']", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("inputVali4")).sendKeys("b");
	driver.findElement(webdriver.By.id("inputVali4_submit")).click();
	alopexAssertLocationContains("=ab");
	driver.navigate().back();

	// form4JS inputVali4JS
	alopexAssertTextContains("css", "#form4JS span[data-for='inputVali4JS']", "");
	driver.findElement(webdriver.By.id("inputVali4JS_submit")).click();
	alopexAssertTextContains("css", "#form4JS span[data-for='inputVali4JS']", "반드시 입력해야 하는 항목입니다.");
	driver.findElement(webdriver.By.id("inputVali4JS")).clear();
	driver.findElement(webdriver.By.id("inputVali4JS")).sendKeys("a");
	driver.findElement(webdriver.By.id("inputVali4JS_submit")).click();
	alopexAssertTextContains("css", "#form4JS span[data-for='inputVali4JS']", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("inputVali4JS")).sendKeys("b");
	driver.findElement(webdriver.By.id("inputVali4JS_submit")).click();
	alopexAssertLocationContains("=ab");
	driver.navigate().back();

	// form5 inputA
	alopexAssertTextContains("css", "#form5 span[data-for='inputA']", "");
	driver.findElement(webdriver.By.id("inputA")).click();
	alopexAssertTextContains("css", "#form5 span[data-for='inputA']", "반드시 입력해야 하는 항목입니다.");
	driver.findElement(webdriver.By.id("inputA")).clear();
	driver.findElement(webdriver.By.id("inputA")).sendKeys("a");
	alopexAssertTextContains("css", "#form5 span[data-for='inputA']", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("inputA")).sendKeys("b");
	alopexAssertTextContains("css", "#form5 span[data-for='inputA']", "");
	driver.findElement(webdriver.By.id("inputA")).sendKeys("ccccccccc");
	alopexAssertTextContains("css", "#form5 span[data-for='inputA']", "최대 10글자 까지 입력 가능합니다.");
	driver.findElement(webdriver.By.id("inputA")).sendKeys(DEL);
	alopexAssertTextContains("css", "#form5 span[data-for='inputA']", "");

	// form5 inputB
	alopexAssertTextContains("css", "#form5 span[data-for='inputB']", "");
	driver.findElement(webdriver.By.id("inputB")).click();
	alopexAssertTextContains("css", "#form5 span[data-for='inputB']", "입력란이 비어있습니다.");
	driver.findElement(webdriver.By.id("inputB")).clear();
	driver.findElement(webdriver.By.id("inputB")).sendKeys("a");
	alopexAssertTextContains("css", "#form5 span[data-for='inputB']", "최소 4글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("inputB")).sendKeys("bbb");
	alopexAssertTextContains("css", "#form5 span[data-for='inputB']", "");
	driver.findElement(webdriver.By.id("inputB")).sendKeys("ccccc");
	alopexAssertTextContains("css", "#form5 span[data-for='inputB']", "최대 8글자 까지 입력 가능합니다.");
	driver.findElement(webdriver.By.id("inputB")).sendKeys(DEL);
	alopexAssertTextContains("css", "#form5 span[data-for='inputB']", "");

	// form8
	driver.findElement(webdriver.By.id("btn_validator1")).click();
	// seleniumIde.closeAlertAndAssertItsText(driver, '"validationrule":"{required:true,minlength:4,maxlength:8}"', acceptNextAlert);
	seleniumIde.closeAlertAndAssertItsText(driver, '{"0":{"0":{"alopex":{"enabled":true', acceptNextAlert);
	acceptNextAlert = true;
	driver.findElement(webdriver.By.id("btn_validate1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	acceptNextAlert = true;
	alopexAssertTextContains("css", "#form8 span[data-for='inputVali8']", "반드시 입력해야 하는 항목입니다.");
	driver.findElement(webdriver.By.id("inputVali8")).clear();
	driver.findElement(webdriver.By.id("inputVali8")).sendKeys("a");
	alopexAssertTextContains("css", "#form8 span[data-for='inputVali8']", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("inputVali8")).sendKeys("b");
	alopexAssertTextContains("css", "#form8 span[data-for='inputVali8']", "");
	driver.findElement(webdriver.By.id("inputVali8")).sendKeys("ccccccccc");
	alopexAssertTextContains("css", "#form8 span[data-for='inputVali8']", "최대 10글자 까지 입력 가능합니다.");
	driver.findElement(webdriver.By.id("inputVali8")).sendKeys(DEL);
	alopexAssertTextContains("css", "#form8 span[data-for='inputVali8']", "");
	driver.findElement(webdriver.By.id("btn_validate1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	acceptNextAlert = true;

	// form6
	alopexAssertTextContains("css", "#form6 span[data-for='inputVali6']", "");
	driver.findElement(webdriver.By.id("btn_validate")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'Input is not valid', acceptNextAlert);
	acceptNextAlert = true;
	alopexAssertTextContains("css", "#form6 span[data-for='inputVali6']", "반드시 입력해야 하는 항목입니다.");
	alopexAssertTextContains("css", "#span1", "false");
	driver.findElement(webdriver.By.id("inputVali6")).clear();
	driver.findElement(webdriver.By.id("inputVali6")).sendKeys("a");
	alopexAssertTextContains("css", "#form6 span[data-for='inputVali6']", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("btn_validate")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'Input is not valid', acceptNextAlert);
	acceptNextAlert = true;
	alopexAssertTextContains("css", "#span1", "false");
	driver.findElement(webdriver.By.id("inputVali6")).sendKeys("b");
	driver.findElement(webdriver.By.id("btn_validate")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'Input is valid', acceptNextAlert);
	acceptNextAlert = true;
	alopexAssertTextContains("css", "#span1", "true");

	// form7
	alopexAssertTextContains("css", "#form7 span[data-for='inputVali7']", "");
	driver.findElement(webdriver.By.id("inputVali7")).click();
	alopexAssertTextContains("css", "#form7 span[data-for='inputVali7']", "반드시 입력해야 하는 항목입니다.");

	driver.findElement(webdriver.By.id("btn_getMessage1")).click();
	alopexAssertTextContains("css", "#span2", "반드시 입력해야 하는 항목입니다.,최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("btn_getMessage2")).click();
	alopexAssertTextContains("css", "#span2", "반드시 입력해야 하는 항목입니다.\n최소 2글자 이상 입력하십시오.");

	driver.findElement(webdriver.By.id("inputVali7")).sendKeys("a");
	alopexAssertTextContains("css", "#form7 span[data-for='inputVali7']", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("btn_getMessage1")).click();
	alopexAssertTextContains("css", "#span2", "최소 2글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("btn_getMessage2")).click();
	alopexAssertTextContains("css", "#span2", "최소 2글자 이상 입력하십시오.");

	driver.findElement(webdriver.By.id("inputVali7")).sendKeys("b");
	alopexAssertTextContains("css", "#form7 span[data-for='inputVali7']", "");
	driver.findElement(webdriver.By.id("btn_getMessage1")).click();
	alopexAssertTextContains("css", "#span2", "null");
	driver.findElement(webdriver.By.id("btn_getMessage2")).click();
	alopexAssertTextContains("css", "#span2", "");


	// Extra Example
	// data-validation-rule="{required:true}" - 필수입력항목
	driver.findElement(webdriver.By.id("btn1-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn1-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '반드시 입력해야 하는 항목입니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("required1")).sendKeys("a");
	driver.findElement(webdriver.By.id("btn1-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn1-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);

	// data-validation-rule="{minlength:숫자, maxlength:숫자}" - 문자열 갯수를 검증.
	driver.findElement(webdriver.By.id("btn2-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn2-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '최소 6글자 이상 입력하십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("len1")).sendKeys("aa");
	driver.findElement(webdriver.By.id("btn2-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn2-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);

	// data-validation-rule="{rangelength:[숫자,숫자]}" - 문자열 갯수 범위를 검증.
	driver.findElement(webdriver.By.id("btn3-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn3-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '6에서 8 글자 사이로 입력하십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("len2")).sendKeys("aa");
	driver.findElement(webdriver.By.id("btn3-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn3-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);

	// data-validation-rule="{rangeblength:[숫자,숫자]}" - 문자열의 바이트길이 범위를 검증.
	driver.findElement(webdriver.By.id("btn4-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn4-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '최대 8바이트 까지 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("len3")).sendKeys(DEL);
	driver.findElement(webdriver.By.id("btn4-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn4-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("len3")).sendKeys(DEL);
	driver.findElement(webdriver.By.id("btn4-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn4-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '최소 6바이트 이상 입력하십시오.', acceptNextAlert);

	// data-validation-rule="{rangeblength:[숫자,숫자]}" - 문자열의 바이트길이 범위를 검증.
	driver.findElement(webdriver.By.id("btn5-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn5-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '6에서 8 바이트 사이로 입력하십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("len4")).sendKeys(DEL);
	driver.findElement(webdriver.By.id("btn5-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn5-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("len4")).sendKeys(DEL);
	driver.findElement(webdriver.By.id("btn5-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn5-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '6에서 8 바이트 사이로 입력하십시오.', acceptNextAlert);

	// data-validation-rule="{min:숫자,max:숫자,range:[숫자,숫자]}" - 숫자의 최소값 또는 최대값을 검증
	driver.findElement(webdriver.By.id("btn6-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn6-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '최대 입력가능 값은 100입니다.,50에서 100 사이의 값을 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("mm1")).sendKeys(DEL);
	driver.findElement(webdriver.By.id("btn6-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn6-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("mm1")).sendKeys(DEL);
	driver.findElement(webdriver.By.id("btn6-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn6-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '최소 입력가능 값은 50입니다.,50에서 100 사이의 값을 입력해 주십시오.', acceptNextAlert);

	// data-validation-rule="{decimal:[자릿수길이숫자,소숫점길이숫자]}" - 정수입력을 허용
	driver.findElement(webdriver.By.id("btn7-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn7-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("dec1")).sendKeys("7");
	driver.findElement(webdriver.By.id("btn7-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn7-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '소숫점 3자리를 포함하여 최대 6자리까지 허용됩니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("dec1")).sendKeys(DEL + DEL + ".");
	driver.findElement(webdriver.By.id("btn7-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn7-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '소숫점 3자리를 포함하여 최대 6자리까지 허용됩니다.', acceptNextAlert);


	// data-validation-rule="{digits:true}" - 숫자만 입력 허용
	driver.findElement(webdriver.By.id("btn8-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn8-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '숫자만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("d1")).clear();
	driver.findElement(webdriver.By.id("d1")).sendKeys("@");
	driver.findElement(webdriver.By.id("btn8-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn8-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '숫자만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("d1")).clear();
	driver.findElement(webdriver.By.id("d1")).sendKeys("1");
	driver.findElement(webdriver.By.id("btn8-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn8-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);

	// data-validation-rule="{number:true}" - 실수(real number) 입력 허용(3.14, -2.99)
	driver.findElement(webdriver.By.id("btn9-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn9-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '실수를 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("n1")).clear();
	driver.findElement(webdriver.By.id("n1")).sendKeys("@");
	driver.findElement(webdriver.By.id("btn9-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn9-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '실수를 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("n1")).clear();
	driver.findElement(webdriver.By.id("n1")).sendKeys("123");
	driver.findElement(webdriver.By.id("btn9-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn9-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("n1")).clear();
	driver.findElement(webdriver.By.id("n1")).sendKeys("-1234");
	driver.findElement(webdriver.By.id("btn9-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn9-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("n1")).clear();
	driver.findElement(webdriver.By.id("n1")).sendKeys("1.12345");
	driver.findElement(webdriver.By.id("btn9-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn9-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("n1")).clear();
	driver.findElement(webdriver.By.id("n1")).sendKeys("-0.123456");
	driver.findElement(webdriver.By.id("btn9-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn9-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);

	// data-validation-rule="{integer:true}" - 정수 입력 허용(+또는-가 붙어도 검증 통과)
	driver.findElement(webdriver.By.id("btn10-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn10-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '정수를 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("i1")).clear();
	driver.findElement(webdriver.By.id("i1")).sendKeys("@");
	driver.findElement(webdriver.By.id("btn10-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn10-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '정수를 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("i1")).clear();
	driver.findElement(webdriver.By.id("i1")).sendKeys("123");
	driver.findElement(webdriver.By.id("btn10-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn10-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("i1")).clear();
	driver.findElement(webdriver.By.id("i1")).sendKeys("-1234");
	driver.findElement(webdriver.By.id("btn10-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn10-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("i1")).clear();
	driver.findElement(webdriver.By.id("i1")).sendKeys("+12345");
	driver.findElement(webdriver.By.id("btn10-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn10-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);

	// data-validation-rule="{alphabet:true}" - 영문자 알파벳 입력 허용
	driver.findElement(webdriver.By.id("btn11-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn11-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '알파벳만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("a1")).clear();
	driver.findElement(webdriver.By.id("a1")).sendKeys("1");
	driver.findElement(webdriver.By.id("btn11-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn11-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '알파벳만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("a1")).clear();
	driver.findElement(webdriver.By.id("a1")).sendKeys("@");
	driver.findElement(webdriver.By.id("btn11-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn11-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '알파벳만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("a1")).clear();
	driver.findElement(webdriver.By.id("a1")).sendKeys("actual");
	driver.findElement(webdriver.By.id("btn11-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn11-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("a1")).clear();
	driver.findElement(webdriver.By.id("a1")).sendKeys("BeSt");
	driver.findElement(webdriver.By.id("btn11-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn11-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);

	// data-validation-rule="{numalpha:true}" - 숫자와 영문자 알파벳 입력 허용
	driver.findElement(webdriver.By.id("btn12-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn12-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '숫자 또는 영문자만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("na1")).clear();
	driver.findElement(webdriver.By.id("na1")).sendKeys("@");
	driver.findElement(webdriver.By.id("btn12-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn12-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '숫자 또는 영문자만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("na1")).clear();
	driver.findElement(webdriver.By.id("na1")).sendKeys("actual");
	driver.findElement(webdriver.By.id("btn12-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn12-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("na1")).clear();
	driver.findElement(webdriver.By.id("na1")).sendKeys("BeSt");
	driver.findElement(webdriver.By.id("btn12-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn12-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("na1")).clear();
	driver.findElement(webdriver.By.id("na1")).sendKeys("Be1S2t3");
	driver.findElement(webdriver.By.id("btn12-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn12-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);


	// data-validation-rule="{nospace:true}" - 빈칸(스페이스) 입력을 허용하지 않음
	driver.findElement(webdriver.By.id("btn13-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn13-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '스페이스는 입력할 수 없습니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("ns1")).clear();
	driver.findElement(webdriver.By.id("ns1")).sendKeys(" ");
	driver.findElement(webdriver.By.id("btn13-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn13-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '스페이스는 입력할 수 없습니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("ns1")).clear();
	driver.findElement(webdriver.By.id("ns1")).sendKeys("actual##");
	driver.findElement(webdriver.By.id("btn13-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn13-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("ns1")).clear();
	driver.findElement(webdriver.By.id("ns1")).sendKeys("BeSt");
	driver.findElement(webdriver.By.id("btn13-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn13-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("ns1")).clear();
	driver.findElement(webdriver.By.id("ns1")).sendKeys("Be1S2t3");
	driver.findElement(webdriver.By.id("btn13-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn13-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);

	// data-validation-rule="{hangul:true}" - 한글 입력만 허용. 스페이스는 한글로 인정하지 않음.
	driver.findElement(webdriver.By.id("btn14-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn14-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("h1")).clear();
	driver.findElement(webdriver.By.id("h1")).sendKeys(" ");
	driver.findElement(webdriver.By.id("btn14-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn14-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '한글만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("h1")).clear();
	driver.findElement(webdriver.By.id("h1")).sendKeys("1");
	driver.findElement(webdriver.By.id("btn14-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn14-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '한글만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("h1")).clear();
	driver.findElement(webdriver.By.id("h1")).sendKeys("a");
	driver.findElement(webdriver.By.id("btn14-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn14-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '한글만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("h1")).clear();
	driver.findElement(webdriver.By.id("h1")).sendKeys("A");
	driver.findElement(webdriver.By.id("btn14-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn14-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '한글만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("h1")).clear();
	driver.findElement(webdriver.By.id("h1")).sendKeys("@");
	driver.findElement(webdriver.By.id("btn14-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn14-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '한글만 입력 가능합니다.', acceptNextAlert);

	// data-validation-rule="{numhan:true}" - 숫자와 한글 입력만 허용
	driver.findElement(webdriver.By.id("btn15-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn15-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("nh1")).clear();
	driver.findElement(webdriver.By.id("nh1")).sendKeys("1");
	driver.findElement(webdriver.By.id("btn15-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn15-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("nh1")).clear();
	driver.findElement(webdriver.By.id("nh1")).sendKeys(" ");
	driver.findElement(webdriver.By.id("btn15-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn15-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '숫자 또는 한글만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("nh1")).clear();
	driver.findElement(webdriver.By.id("nh1")).sendKeys("a");
	driver.findElement(webdriver.By.id("btn15-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn15-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '숫자 또는 한글만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("nh1")).clear();
	driver.findElement(webdriver.By.id("nh1")).sendKeys("A");
	driver.findElement(webdriver.By.id("btn15-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn15-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '숫자 또는 한글만 입력 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("nh1")).clear();
	driver.findElement(webdriver.By.id("nh1")).sendKeys("@");
	driver.findElement(webdriver.By.id("btn15-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn15-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '숫자 또는 한글만 입력 가능합니다.', acceptNextAlert);


	// data-validation-rule="{email:true}" - 이메일 형식만 허용
	driver.findElement(webdriver.By.id("btn16-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn16-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("em1")).clear();
	driver.findElement(webdriver.By.id("em1")).sendKeys("1a_b-c2@efg.xx.yyy");
	driver.findElement(webdriver.By.id("btn16-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn16-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("em1")).clear();
	driver.findElement(webdriver.By.id("em1")).sendKeys("1@a_b-c2@efg.co.krr");
	driver.findElement(webdriver.By.id("btn16-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn16-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '이메일 형식에 맞게 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("em1")).clear();
	driver.findElement(webdriver.By.id("em1")).sendKeys("1a_b-c2@efg.co.k");
	driver.findElement(webdriver.By.id("btn16-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn16-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '이메일 형식에 맞게 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("em1")).clear();
	driver.findElement(webdriver.By.id("em1")).sendKeys("myemail");
	driver.findElement(webdriver.By.id("btn16-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn16-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '이메일 형식에 맞게 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("em1")).clear();
	driver.findElement(webdriver.By.id("em1")).sendKeys("myemail@pmail");
	driver.findElement(webdriver.By.id("btn16-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn16-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '이메일 형식에 맞게 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("em1")).clear();
	driver.findElement(webdriver.By.id("em1")).sendKeys("myemail@pmail.");
	driver.findElement(webdriver.By.id("btn16-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn16-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '이메일 형식에 맞게 입력해 주십시오.', acceptNextAlert);

	// data-validation-rule="{url:true}" - http, https등으로 시작하는 url형식만 허용
	driver.findElement(webdriver.By.id("btn17-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("url1")).clear();
	driver.findElement(webdriver.By.id("url1")).sendKeys("http://ui.alopex.io/2.3/started/started.html?target=education#basic");
	driver.findElement(webdriver.By.id("btn17-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("url1")).clear();
	driver.findElement(webdriver.By.id("url1")).sendKeys("https://msdn.microsoft.com/ko-kr/library/system.text.encoding(v=vs.110).aspx");
	driver.findElement(webdriver.By.id("btn17-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("url1")).clear();
	driver.findElement(webdriver.By.id("url1")).sendKeys("https://github.com/chromium/chromium.git");
	driver.findElement(webdriver.By.id("btn17-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("url1")).clear();
	driver.findElement(webdriver.By.id("url1")).sendKeys("httpp://ui.alopex.io");
	driver.findElement(webdriver.By.id("btn17-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'url 형식에 맞게 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("url1")).clear();
	driver.findElement(webdriver.By.id("url1")).sendKeys("http:///ui.alopex.io");
	driver.findElement(webdriver.By.id("btn17-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'url 형식에 맞게 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("url1")).clear();
	driver.findElement(webdriver.By.id("url1")).sendKeys("http:://ui.alopex.io");
	driver.findElement(webdriver.By.id("btn17-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'url 형식에 맞게 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("url1")).clear();
	driver.findElement(webdriver.By.id("url1")).sendKeys("http//ui.alopex.io");
	driver.findElement(webdriver.By.id("btn17-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'url 형식에 맞게 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("url1")).clear();
	driver.findElement(webdriver.By.id("url1")).sendKeys("htp://ui.alopex.io");
	driver.findElement(webdriver.By.id("btn17-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'url 형식에 맞게 입력해 주십시오.', acceptNextAlert);


	// data-validation-rule="{date:true}" - 날짜 형식만 허용(YYYY-MM-DD 또는 YYYY/MM/DD)
	driver.findElement(webdriver.By.id("btn17-3")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-4")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("da1")).clear();
	driver.findElement(webdriver.By.id("da1")).sendKeys("1988/01/31");
	driver.findElement(webdriver.By.id("btn17-3")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-4")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("da1")).clear();
	driver.findElement(webdriver.By.id("da1")).sendKeys("2017-01");
	driver.findElement(webdriver.By.id("btn17-3")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-4")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '날짜를 YYYY/MM/DD 또는 YYYY-MM-DD 형식에 맞게 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("da1")).clear();
	driver.findElement(webdriver.By.id("da1")).sendKeys("2017-01-32");
	driver.findElement(webdriver.By.id("btn17-3")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-4")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '날짜를 YYYY/MM/DD 또는 YYYY-MM-DD 형식에 맞게 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("da1")).clear();
	driver.findElement(webdriver.By.id("da1")).sendKeys("2017-01-312");
	driver.findElement(webdriver.By.id("btn17-3")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-4")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '날짜를 YYYY/MM/DD 또는 YYYY-MM-DD 형식에 맞게 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("da1")).clear();
	driver.findElement(webdriver.By.id("da1")).sendKeys("2017.01.31");
	driver.findElement(webdriver.By.id("btn17-3")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn17-4")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '날짜를 YYYY/MM/DD 또는 YYYY-MM-DD 형식에 맞게 입력해 주십시오.', acceptNextAlert);

	// data-validation-rule="{mindate:날짜,maxdate:날짜,daterange:[날짜,날짜]}" - 날짜의 최소/최대값 또는 범위를 지정
	driver.findElement(webdriver.By.id("btn18-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn18-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("dr1")).clear();
	driver.findElement(webdriver.By.id("dr1")).sendKeys("2014/01/10");
	driver.findElement(webdriver.By.id("btn18-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn18-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("dr1")).clear();
	driver.findElement(webdriver.By.id("dr1")).sendKeys("2014.01.10");
	driver.findElement(webdriver.By.id("btn18-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn18-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '2014-01-01에서 2014-01-31 사이의 날짜를 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("dr1")).clear();
	driver.findElement(webdriver.By.id("dr1")).sendKeys("2014-02-15");
	driver.findElement(webdriver.By.id("btn18-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn18-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '2014-01-31 또는 2014-01-31 이전의 날짜를 입력해 주십시오.,2014-01-01에서 2014-01-31 사이의 날짜를 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("dr1")).clear();
	driver.findElement(webdriver.By.id("dr1")).sendKeys("2013-12-15");
	driver.findElement(webdriver.By.id("btn18-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn18-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '2014-01-01 또는 2014-01-01 이후의 날짜를 입력해 주십시오.,2014-01-01에서 2014-01-31 사이의 날짜를 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("dr1")).clear();
	driver.findElement(webdriver.By.id("dr1")).sendKeys("2014-01-1");
	driver.findElement(webdriver.By.id("btn18-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn18-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '2014-01-01 또는 2014-01-01 이후의 날짜를 입력해 주십시오.,2014-01-01에서 2014-01-31 사이의 날짜를 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("dr1")).clear();
	driver.findElement(webdriver.By.id("dr1")).sendKeys("20140115");
	driver.findElement(webdriver.By.id("btn18-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn18-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '2014-01-01 또는 2014-01-01 이후의 날짜를 입력해 주십시오.,2014-01-31 또는 2014-01-31 이전의 날짜를 입력해 주십시오.,2014-01-01에서 2014-01-31 사이의 날짜를 입력해 주십시오.', acceptNextAlert);


	// data-validation-rule="{mindate:ID셀렉터,maxdate:ID셀렉터}" - 지정된 ID셀렉터의 input이 가지는 날짜 만큼을 최대/최소값으로 지정.
	driver.findElement(webdriver.By.id("btn19-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn19-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '2014-01-13 또는 2014-01-13 이전의 날짜를 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn19-3")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn19-4")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '2014-01-19 또는 2014-01-19 이후의 날짜를 입력해 주십시오.', acceptNextAlert);
	driver.findElement(webdriver.By.id("dr2from")).clear();
	driver.findElement(webdriver.By.id("dr2from")).sendKeys("2014-01-11");
	driver.findElement(webdriver.By.id("btn19-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn19-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn19-3")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn19-4")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);

	// data-validation-rule="{oneof:[...]}" - 어레이에 지정한 값만 입력하도록 허용
	driver.findElement(webdriver.By.id("btn20-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn20-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '다음중 하나의 값을 입력해 주십시오 : "A", "B", "C".', acceptNextAlert);
	driver.findElement(webdriver.By.id("oo1")).clear();
	driver.findElement(webdriver.By.id("oo1")).sendKeys("1");
	driver.findElement(webdriver.By.id("btn20-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn20-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '다음중 하나의 값을 입력해 주십시오 : "A", "B", "C".', acceptNextAlert);
	driver.findElement(webdriver.By.id("oo1")).clear();
	driver.findElement(webdriver.By.id("oo1")).sendKeys(" ");
	driver.findElement(webdriver.By.id("btn20-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn20-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '다음중 하나의 값을 입력해 주십시오 : "A", "B", "C".', acceptNextAlert);
	driver.findElement(webdriver.By.id("oo1")).clear();
	driver.findElement(webdriver.By.id("oo1")).sendKeys("a");
	driver.findElement(webdriver.By.id("btn20-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn20-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '다음중 하나의 값을 입력해 주십시오 : "A", "B", "C".', acceptNextAlert);
	driver.findElement(webdriver.By.id("oo1")).clear();
	driver.findElement(webdriver.By.id("oo1")).sendKeys("AB");
	driver.findElement(webdriver.By.id("btn20-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn20-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, '다음중 하나의 값을 입력해 주십시오 : "A", "B", "C".', acceptNextAlert);
	driver.findElement(webdriver.By.id("oo1")).clear();
	driver.findElement(webdriver.By.id("oo1")).sendKeys("A");
	driver.findElement(webdriver.By.id("btn20-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn20-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);

	// data-validation-rule="{equalTo:값}" - 제시된 값과 동일해야 함.
	driver.findElement(webdriver.By.id("btn21-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn21-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'test 값만 가능합니다.', acceptNextAlert);
	driver.findElement(webdriver.By.id("eq1")).sendKeys(DEL);
	driver.findElement(webdriver.By.id("btn21-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'true', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn21-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'null', acceptNextAlert);
	driver.findElement(webdriver.By.id("eq1")).sendKeys(" ");
	driver.findElement(webdriver.By.id("btn21-1")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'false', acceptNextAlert);
	driver.findElement(webdriver.By.id("btn21-2")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'test 값만 가능합니다.', acceptNextAlert);

	// form9 Custom Submit Handler
	alopexAssertTextContains("css", "#form9 span[data-for='userid']", "");
	driver.findElement(webdriver.By.id("userid")).click();
	alopexAssertTextContains("css", "#form9 span[data-for='userid']", "반드시 입력해야 하는 항목입니다.");
	driver.findElement(webdriver.By.id("form9_submit")).click();
	alopexAssertTextContains("css", "#errorpanel > ul > li > a", "사용자 아이디 : 반드시 입력해야 하는 항목입니다. 최소 4글자 이상 입력하십시오.");

	driver.findElement(webdriver.By.id("userid")).sendKeys("a");
	alopexAssertTextContains("css", "#form9 span[data-for='userid']", "최소 4글자 이상 입력하십시오.");
	driver.findElement(webdriver.By.id("form9_submit")).click();
	alopexAssertTextContains("css", "#errorpanel > ul > li > a", "사용자 아이디 : 최소 4글자 이상 입력하십시오.");

	driver.findElement(webdriver.By.id("userid")).sendKeys("bbb");
	alopexAssertTextContains("css", "#form9 span[data-for='userid']", "");
	driver.findElement(webdriver.By.id("form9_submit")).click();
	alopexAssertLocationContains("userid=abbb");
	driver.navigate().back();

	driver.findElement(webdriver.By.id("sub")).click();
	alopexAssertTextContains("css", "#form9 span[data-for='topicA']", "반드시 입력해야 하는 항목입니다.");

	driver.findElement(webdriver.By.id("topicA")).click();
	alopexAssertTextContains("css", "#form9 span[data-for='topicA']", "관심분야를 사용할 경우 2개 이상 관심분야를 선택해 주십시오.");
	driver.findElement(webdriver.By.id("topicB")).click();
	alopexAssertTextContains("css", "#form9 span[data-for='topicA']", "");

	driver.findElement(webdriver.By.id("userid")).sendKeys("myname");
	driver.findElement(webdriver.By.id("form9_submit")).click();
	alopexAssertLocationContains("userid=myname&sub=on&topic=A&topic=B");
	driver.navigate().back();


	// validator.md test end
}
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
if(DO_TEST.convert){
	// convert.md test start

	driver.get(baseUrl + "/2.3/dev-js/javascript.html?target=convert#basic");
	driver.sleep(1000);

	alopexAssertContains("id", "already", "data-converted", "true");
	alopexIsElementNotPresent("css", "#targetConvert > input");
	alopexIsElementNotPresent("css", "#target > input");

	driver.findElement(webdriver.By.id("btn_add")).click();
	alopexIsElementPresent("css", "#targetConvert > input");
	alopexIsElementPresent("css", "#target > input");
	alopexAssertContains("css", "#targetConvert > input", "data-converted", "true");
	alopexAssertContains("css", "#target > input", "data-converted", null);

	driver.findElement(webdriver.By.id("btn_convert")).click();
	seleniumIde.closeAlertAndAssertItsText(driver, 'converted', acceptNextAlert);
	acceptNextAlert = true;
	alopexAssertContains("css", "#target > input", "data-converted", "true");


	// convert.md test end
}
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */

/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
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
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
if(DO_TEST.button){
	// button.md test start

	driver.get(baseUrl + "/2.3/dev-component/component.html?target=button#basic");
	driver.sleep(1000);

	// toggle
	alopexAssertNotContains("css", "#buttonTest01", "class", "Checked");
	// 자동으로 type button 설정해주는지 확인
	alopexAssertContains("css", "#buttonTest01", "type", "button");
	driver.findElement(webdriver.By.id("buttonTest01")).click();
	alopexAssertContains("css", "#buttonTest01", "class", "Checked");
	// data-on / data-off
	alopexAssertTextContains("css", "#buttonTest02", "OFF");
	driver.findElement(webdriver.By.id("buttonTest02")).click();
	alopexAssertTextContains("css", "#buttonTest02", "ON");
	// data-disabled
	alopexAssertContains("css", "#buttonTest03", "class", "Disabled");
	// type
	alopexAssertContains("css", "#buttonTest04", "type", "button");
	// .setEnabled (isEnabled)
	alopexAssertNotContains("css", "#button1", "class", "Disabled");
	driver.findElement(webdriver.By.id("btn_setEnabled")).click();
	alopexAssertContains("css", "#button1", "class", "Disabled");
	// .setChecked (isChecked)
	alopexAssertTextContains("css", "#button2", "UNCHECKED");
	alopexAssertTextContains("css", "#btn_setChecked", "setChecked(true)");
	driver.findElement(webdriver.By.id("button2")).click();
	alopexAssertTextContains("css", "#button2", "CHECKED");
	alopexAssertTextContains("css", "#btn_setChecked", "setChecked(false)");
	driver.findElement(webdriver.By.id("button2")).click();
	alopexAssertTextContains("css", "#button2", "UNCHECKED");
	alopexAssertTextContains("css", "#btn_setChecked", "setChecked(true)");
	driver.findElement(webdriver.By.id("btn_setChecked")).click();
	alopexAssertTextContains("css", "#button2", "CHECKED");
	alopexAssertTextContains("css", "#btn_setChecked", "setChecked(false)");
	driver.findElement(webdriver.By.id("btn_setChecked")).click();
	alopexAssertTextContains("css", "#button2", "UNCHECKED");
	alopexAssertTextContains("css", "#btn_setChecked", "setChecked(true)");
	//.toggleChecked ()
	alopexAssertTextContains("css", "#button3", "UNCHECKED");
	driver.findElement(webdriver.By.id("button3")).click();
	alopexAssertTextContains("css", "#button3", "CHECKED");
	driver.findElement(webdriver.By.id("button3")).click();
	alopexAssertTextContains("css", "#button3", "UNCHECKED");
	driver.findElement(webdriver.By.id("btn_toggleChecked")).click();
	alopexAssertTextContains("css", "#button3", "CHECKED");
	driver.findElement(webdriver.By.id("btn_toggleChecked")).click();
	alopexAssertTextContains("css", "#button3", "UNCHECKED");
	// .isChecked ()
	alopexAssertTextContains("css", "#button4", "UNCHECKED");
	driver.findElement(webdriver.By.id("button4")).click();
	alopexAssertTextContains("css", "#button4", "CHECKED");
	driver.findElement(webdriver.By.id("btn_isChecked")).click();
	alopexAssertTextContains("css", "#span1", "체크됨");
	driver.findElement(webdriver.By.id("button4")).click();
	driver.findElement(webdriver.By.id("btn_isChecked")).click();
	alopexAssertTextContains("css", "#span1", "체크안됨");



	// button.md test end
}
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
if(DO_TEST.checkbox){
	// checkbox.md test start


	driver.get(baseUrl + "/2.3/dev-component/component.html?target=checkbox#basic");
	driver.sleep(1000);

	// 기본 체크박스
	// 자동으로 type button 설정해주는지 확인
	alopexAssertContains("css", "#checkTest01 > input", "type", "checkbox");
	alopexAssertCheckboxRadioSelected("css", "#checkTest01 > input", true);
	alopexAssertContains("css", "#checkTest01", "class", "Checked");
	alopexAssertCheckboxRadioSelected("css", "#checkTest02 > input", false);
	alopexAssertNotContains("css", "#checkTest02", "class", "Checked");
	driver.findElement(webdriver.By.id("checkTest02")).click();
	alopexAssertCheckboxRadioSelected("css", "#checkTest02 > input", true);
	alopexAssertContains("css", "#checkTest02", "class", "Checked");
	// 이미지 체크박스
	// 자동으로 type button 설정해주는지 확인
	alopexAssertContains("css", "#checkTest03 > input", "type", "checkbox");
	alopexAssertCheckboxRadioSelected("css", "#checkTest03 > input", true);
	alopexAssertContains("css", "#checkTest03", "class", "Checked");
	alopexAssertCheckboxRadioSelected("css", "#checkTest04 > input", false);
	alopexAssertNotContains("css", "#checkTest04", "class", "Checked");
	driver.findElement(webdriver.By.id("checkTest04")).click();
	alopexAssertCheckboxRadioSelected("css", "#checkTest04 > input", true);
	alopexAssertContains("css", "#checkTest04", "class", "Checked");
	// data-disabled
	// 기본체크박스는 label에 Disabled 클래스 안생기는데, 이미지체크박스는 label에 Disabled 클래스 생긴다... ?
	// alopexAssertContains("css", "#checkTest05", "class", "Disabled");
	alopexAssertContains("css", "#checkTest05 > input", "class", "Disabled");
	alopexAssertContains("css", "#checkTest06", "class", "Disabled");
	alopexAssertContains("css", "#checkTest06 > input", "class", "Disabled");
	// type
	alopexAssertContains("css", "#checkTest07", "type", "checkbox");
	// .setChecked (isChecked)
	alopexAssertCheckboxRadioSelected("id", "checkbox1", false);
	driver.findElement(webdriver.By.id("checkbox1")).click();
	alopexAssertCheckboxRadioSelected("id", "checkbox1", true);
	driver.findElement(webdriver.By.id("btn_setCheckedFalse")).click();
	alopexAssertCheckboxRadioSelected("id", "checkbox1", false);
	driver.findElement(webdriver.By.id("btn_setCheckedTrue")).click();
	alopexAssertCheckboxRadioSelected("id", "checkbox1", true);
	// .setCheckAll(isCheckAll)
	alopexAssertCheckboxRadioSelected("id", "checkTest08", false);
	alopexAssertCheckboxRadioSelected("id", "checkTest09", false);
	alopexAssertCheckboxRadioSelected("id", "checkTest10", false);
	driver.findElement(webdriver.By.id("btn_setCheckedAllTrue")).click();
	alopexAssertCheckboxRadioSelected("id", "checkTest08", true);
	alopexAssertCheckboxRadioSelected("id", "checkTest09", true);
	alopexAssertCheckboxRadioSelected("id", "checkTest10", true);
	driver.findElement(webdriver.By.id("btn_setCheckedAllFalse")).click();
	alopexAssertCheckboxRadioSelected("id", "checkTest08", false);
	alopexAssertCheckboxRadioSelected("id", "checkTest09", false);
	alopexAssertCheckboxRadioSelected("id", "checkTest10", false);
	// .setEnabled(isEnabled)
	alopexAssertNotContains("css", "#checkbox2", "class", "Disabled");
	driver.findElement(webdriver.By.id("btn_setEnabled")).click();
	alopexAssertContains("css", "#checkbox2", "class", "Disabled");
	// .setValues(values)
	alopexAssertCheckboxRadioSelected("id", "chk_setValues", false);
	alopexAssertCheckboxRadioSelected("id", "chk_setValues2", false);
	alopexAssertCheckboxRadioSelected("id", "chk_setValues3", false);
	driver.findElement(webdriver.By.id("btn_setValues")).click();
	alopexAssertCheckboxRadioSelected("id", "chk_setValues", true);
	alopexAssertCheckboxRadioSelected("id", "chk_setValues2", true);
	alopexAssertCheckboxRadioSelected("id", "chk_setValues3", false);
	// .toggle()
	alopexAssertCheckboxRadioSelected("id", "chkId1", true);
	alopexAssertCheckboxRadioSelected("id", "chkId2", false);
	alopexAssertCheckboxRadioSelected("id", "chkId3", false);
	alopexAssertCheckboxRadioSelected("id", "chkId4", false);
	driver.findElement(webdriver.By.id("btn_toggle")).click();
	alopexAssertCheckboxRadioSelected("id", "chkId1", false);
	alopexAssertCheckboxRadioSelected("id", "chkId2", true);
	alopexAssertCheckboxRadioSelected("id", "chkId3", true);
	alopexAssertCheckboxRadioSelected("id", "chkId4", true);
	// .getTexts()
	driver.findElement(webdriver.By.id("btn_getValues")).click();
	alopexAssertTextContains("css", "#span1", "apple");
	driver.findElement(webdriver.By.id("btn_getTexts")).click();
	alopexAssertTextContains("css", "#span1", "Apple");



	// checkbox.md test end
}
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
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
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
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
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
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
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
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
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
if(DO_TEST["Autocomplete-AUI-TS-011"]){
	// Autocomplete-AUI-TS-006 test start

var DEL = "\u0008";
var LEFT = webdriver.Key.ARROW_LEFT;
var ENTER = ''

	driver.get(testPageUrl);
	driver.findElement(webdriver.By.css("#Autocomplete_AUI-TS-011")).click();

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0001_AC > input")).click();
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0001_AC > input")).sendKeys("m");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0001_AC > input")).sendKeys(DEL);
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0001_AC > input")).sendKeys("m");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0001_AC > ul > li:nth-child(1) > a")).click();
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0001_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0001_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0001_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0001_T4", "S");
	// alopexAssertTextContains("css", "#AUI-TS-011-ATC-0001_T5", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0002_AC > input")).click();
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0002_AC > input")).sendKeys("i");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0002_AC > input")).sendKeys(DEL);
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0002_AC > input")).sendKeys("d");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0002_AC > ul > li:nth-child(1) > a")).click();
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0002_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0002_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0002_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0002_T4", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0002_T5", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0002_T6", "S");
	
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0003_AC > input")).click();
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0003_AC > input")).sendKeys("m");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0003_AC > input")).sendKeys(DEL);
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0003_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0003_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0003_T3", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0004_AC > input")).click();
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0004_AC > input")).sendKeys("m");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0004_AC > input")).sendKeys(DEL);
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0004_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0004_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0004_T3", "S");

// data-reset-button(data-url) ( AUI-TS-011-ATC-0005 ) 
// 확인필요 reset버튼 클릭후 같은 단어 검색 안되는 현상 있음

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0006_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0006_AC > input")).sendKeys("i");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0006_AC > ul > li:nth-child(1) > a")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0006_AC > div.Clear")).click();
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0006_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0006_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0007_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0007_AC > input")).sendKeys("mis");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0007_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0007_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0008_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0008_AC > input")).sendKeys("mis");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0008_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0008_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0009_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0009_AC > input")).sendKeys("k");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0009_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0009_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0010_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0010_AC > input")).sendKeys("k");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0010_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0010_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0011_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0011_AC > input")).sendKeys("m");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0011_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0011_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0012_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0012_AC > input")).sendKeys("i");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0012_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0012_T2", "S");

// data-fitwidth(data-url) ( AUI-TS-011-ATC-0013 )
// - ul 의 width 는 테스트 길이만큼인가? F
// "알로펙스 ... " 등 한글 말고, 영어로 예제 변경

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0014_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0014_AC > input")).sendKeys("a");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0014_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0014_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0014_T3", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0015_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0015_AC > input")).sendKeys("m");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0015_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0015_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0015_T3", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0016_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0016_AC > input")).sendKeys("a");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0016_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0016_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0016_T3", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0017_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0017_AC > input")).sendKeys("m");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0017_AC > div.Opener")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0017_AC > div.Opener")).click();
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0017_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0017_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0017_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0017_T4", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0018_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0018_AC > input")).sendKeys("i");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0018_AC > div.Opener")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0018_AC > div.Opener")).click();
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0018_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0018_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0018_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0018_T4", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0019_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0019_AC > input")).sendKeys("i da ho");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0019_AC > input")).clear();
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0019_AC > input")).sendKeys("I da ho");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0019_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0019_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0019_T3", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0020_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0020_AC > input")).sendKeys("m");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0020_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0020_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0020_T3", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0021_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0021_AC > input")).sendKeys("i");
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0021_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0021_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0021_T3", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0022_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0022_AC > input")).sendKeys("m");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0022_AC > input")).sendKeys(webdriver.Key.ENTER);
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0022_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0022_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0022_T3", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0023_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0023_AC > input")).sendKeys("i");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0023_AC > input")).sendKeys(webdriver.Key.ENTER);
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0023_T1", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0023_T2", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0023_T3", "S");
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0023_T4", "S");

// setOptions(before) ( AUI-TS-011-ATC-0024 ) 
// 확인필요 다른 data-url에 영향을 미침. 글로벌 설정이 되는 듯 합니다. like setup

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0025_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0025_AC > input")).sendKeys("m");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0025_AC > ul > li:nth-child(1) > a")).click();
    seleniumIde.closeAlertAndAssertItsText(driver, 'selected : {"text":"Maine","capital":"Augusta"}', acceptNextAlert);
    acceptNextAlert = true;
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0025_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0026_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0026_AC > input")).sendKeys("i");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0026_AC > ul > li:nth-child(1) > a")).click();
    seleniumIde.closeAlertAndAssertItsText(driver, 'selected : {"text":"Idaho"}', acceptNextAlert);
    acceptNextAlert = true;
	driver.sleep(1000);
	alopexAssertTextContains("css", "#AUI-TS-011-ATC-0026_T1", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0027_BTN")).click();
    seleniumIde.closeAlertAndAssertItsText(driver, 'getSelectedData : {"text":"Empty"}', acceptNextAlert);
    acceptNextAlert = true;
    driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0027_AC > input")).click();
    driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0027_AC > input")).sendKeys("i");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0027_AC > ul > li:nth-child(1) > a")).click();
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0027_BTN")).click();
    seleniumIde.closeAlertAndAssertItsText(driver, 'getSelectedData : {"text":"Idaho"}', acceptNextAlert);
    acceptNextAlert = true;
    driver.sleep(1000);
    alopexAssertTextContains("css", "#AUI-TS-011-ATC-0027_T1", "S");
    alopexAssertTextContains("css", "#AUI-TS-011-ATC-0027_T2", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0028_BTN1")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0028_BTN2")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0028_BTN3")).click();
	driver.sleep(1000);
    alopexAssertTextContains("css", "#AUI-TS-011-ATC-0028_T1", "S");
    alopexAssertTextContains("css", "#AUI-TS-011-ATC-0028_T2", "S");
    alopexAssertTextContains("css", "#AUI-TS-011-ATC-0028_T3", "S");

	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0029_AC > input")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0029_AC > input")).sendKeys("i");
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0029_BTN1")).click();
	driver.sleep(1000);
	driver.findElement(webdriver.By.css("#AUI-TS-011-ATC-0029_BTN2")).click();
	driver.sleep(1000);
    alopexAssertTextContains("css", "#AUI-TS-011-ATC-0029_T1", "S");
    alopexAssertTextContains("css", "#AUI-TS-011-ATC-0029_T2", "S");
    alopexAssertTextContains("css", "#AUI-TS-011-ATC-0029_T3", "S");

// setCustomFilter ( AUI-TS-011-ATC-0030 )
// - 입력 필드에 "I" (또는 다른 어떤 키워드) 입력 후 에 나오는 목록 중에서는 Idaho 값이 있는 li 가 없고 , 
// 항상 4개의 li 값만 존재하는가?(Illinois,Indiana,Iowa,Utah); 

	// Autocomplete-AUI-TS-006 test end
}
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
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
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
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
/**
 * webdriver-recipes - 
 * 
 * @version v1.0.0
 * @link http://ui.alopex.io/
 * @license http://ui.alopex.io/
 * 
 * Copyright © 2010-2017 SK Holdings. All rights reserved.
 */
if(DO_TEST["Tabs-AUI-TS-001"]){
	// Tabs-AUI-TS-001 test start

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
driver.quit();
}

"use strict";


var seleniumIde = require("./script/selenium-ide.js");
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build();
driver.VariablesOnlyForStoreEval = null;
var acceptNextAlert = true;
var verificationErrors = [];

var assert = require('assert');
assert.contains = function contains(actual, expected, message) {
    if (actual.toString().indexOf(expected) === -1) {
        // assert.fail(actual, expected, message, '==', assert.equal);
        assert.fail(message, "", "", "");
    }
};

assert.notContains = function notContains(actual, expected, message) {
    if (actual.toString().indexOf(expected) !== -1) {
        // assert.fail(actual, expected, message, '==', assert.equal);
        assert.fail(message, "", "", "");
    }
};


driver.assert = assert;


function alopexIsElementPresentWithBaseElementId(byMethod, selector, attribute, selector2){
    driver.findElement(webdriver.By[byMethod](selector)).then(function(el){
        el.getAttribute(attribute).then(function(id){
            alopexIsElementPresent("css", selector2+id+'\"]');
        });
    });
}

/*
 *	function alopexSwitchWindow(index){ ... }
 *	현재 window handle을 window.open() 등의 다른 window handle로 옮긴다.
 *	다시 메인 window handle로 옮길 때는, driver.switchTo().defaultContent();를 호출한다.
 *	return   	: 
 *	parameter	: 
 *		index{Integer} - 생성된 window 들의 index
 *   
 *	examples	 	: 
 *		alopexSwitchWindow(1); // 0 >> 1 번째 윈도우로 대상 변경
 *		... 변경된 윈도우에서 검증 수행 ...
 *		driver.switchTo().defaultContent(); // 기본 윈도우로 대상 원복
 */

function alopexSwitchWindow(index) {
    var handlePromise = driver.getAllWindowHandles();
    handlePromise.then(function(handles) {
        var popUpWindow = handles[index];
        driver.switchTo().window(popUpWindow);
    })
}
/**
 * [alopexSwitchToLastBottomWindow 윈도우 팝업으로 웹드라이버 포커스 이동]
 * @param  {[type]} then [description]
 * @return {[type]}      [description]
 */
function alopexSwitchToLastBottomWindow(then) {
    var handlePromise = driver.getAllWindowHandles();
    handlePromise.then(function(handles) {
        var popUpWindow = handles[handles.length-1];
        driver.switchTo().window(popUpWindow).then(function(){
            isSwitched = true;
        });
    });

    var isSwitched = false;
    function checkSwiched(){
        if(!isSwitched) checkSwiched();
    }
}
/**
 * [alopexSwitchToDefaultWindow 기존 부모 윈도우로 웹드라이버 포커스 이동]
 * @return {[type]} [description]
 */
function alopexSwitchToDefaultWindow(){
    
    driver.switchTo().defaultContent().then(function(){
        isSwitched = true;
    });

    var isSwitched = false;
    function checkSwiched(){
        if(!isSwitched) checkSwiched();
    }
}
/**
 * [alopexSwitchFrame 아이프레임 내 윈도우로 웹드라이버 포커스 이동]
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */
function alopexSwitchFrame(index) {
    if(index === 0){
        driver.switchTo().defaultContent();
    }else{
        driver.findElements(webdriver.By.tagName('iframe')).then(function(elements) {
        //      console.log(elements.length); // --> if I put this code before the switch to first frame output: 1, if I put it after output: 0)
        driver.switchTo().frame(elements[index-1])
    });    
    }
    
}
/**
 * [alopexUtilStringContains description]
 * @param  {[type]} msg     [description]
 * @param  {[type]} partial [description]
 * @return {[type]}         [description]
 */
function alopexUtilStringContains(actual, partial) {
	try{ alopexGetLog(); }
    catch(e){ console.log("**************************\n* function : alopexUtilStringContains\n* actual : " + actual + "\n* partial : " + partial); }
    if (typeof actual === 'string' || actual instanceof String) {
        if (actual.indexOf(partial) === -1) {
            alopexError('Assertion error: Actual:"' + actual + '" Not Contains Expected: "' + partial + '"');
        }
    }
}
/**
 * [alopexUtilStringEqual description]
 * @param  {[type]} actual   [description]
 * @param  {[type]} expected [description]
 * @return {[type]}          [description]
 */
function alopexUtilStringEqual(actual, expected) {
    try{ alopexGetLog(); }
    catch(e){ console.log("**************************\n* function : alopexUtilStringEqual\n* actual : " + actual + "\n* expected : " + expected); }
    
	assert.equal(actual, expected, 'Assertion error: Not Equal. Expected: ' + expected + ' & Actual: ' + actual);
}
/**
 * [alopexUtilBooleanEqual ]
 * @param  {[type]} flag1 [description]
 * @param  {[type]} flag2 [description]
 * @return {[type]}       [description]
 */
function alopexUtilBooleanEqual(flag1, flag2) {
    if (typeof flag2 === 'boolean' || flag2 instanceof Boolean) {
        if (flag1 !== flag2) {
            alopexError('Assertion error: Not Equal. expected: ' + flag2 + ' & get: ' + flag1);
        }
    } else {
        alopexError('Assertion error: flag2 is not boolean type: ' + flag2);
    }
}
/**
 * [alopexAssertEquals description]
 * @param  {[type]} byMethod  [description]
 * @param  {[type]} selector  [description]
 * @param  {[type]} attribute [description]
 * @param  {[type]} expected  [description]
 * @param  {[type]} errorMsg  [description]
 * @return {[type]}           [description]
 */
function alopexAssertEquals(byMethod, selector, attribute, expected, errorMsg) {

    driver.findElement(webdriver.By[byMethod](selector)).then(function(el) {
        el.getAttribute(attribute).then(function(actual) {
            console.log("**************************\n* function : alopexAssertEquals\n* byMethod : " + byMethod + "\n* selector : " + selector + "\n* actual : " + actual + "\n* expected : " + expected);
            assert.equal(actual, expected, 'Assertion error: Not Equal. Expected: ' + expected + ' & Actual: ' + actual);
        });
    });
}
/**
 * [alopexAssertMatches 요소 속성값을 정규식을 이용해 비교. 정규식 패턴에 값이 해당될 때 검증 통과]
 * @param  {[type]} byMethod  [description]
 * @param  {[type]} selector  [description]
 * @param  {[type]} attribute [description]
 * @param  {[type]} expected  [description]
 * @param  {[type]} errorMsg  [description]
 * @return {[type]}           [description]
 */
function alopexAssertMatches(byMethod, selector, attribute, expected, errorMsg) {
    driver.findElement(webdriver.By[byMethod](selector)).then(function(el) {
        el.getAttribute(attribute).then(function(actual) {
        	var isMached = new RegExp(expected).test(actual);
            console.log("**************************\n* function : alopexAssertMatches\n* byMethod : " + byMethod + "\n* selector : " + selector + "\n* attribute : " + attribute + "\n* actual : " + actual + "\n* expected : " + expected);
			assert.strictEqual(isMached, true, 'Assertion error: Not Equal. Expected: true & Actual: ' + isMached);
        });
    });
}
/**
 * [alopexAssertNotMatches 요소 속성값을 정규식을 이용해 비교. 정규식 패턴에 값이 해당되지 않을 때 검증 통과]
 * @param  {[type]} byMethod  [description]
 * @param  {[type]} selector  [description]
 * @param  {[type]} attribute [description]
 * @param  {[type]} expected  [description]
 * @param  {[type]} errorMsg  [description]
 * @return {[type]}           [description]
 */
function alopexAssertNotMatches(byMethod, selector, attribute, expected, errorMsg) {
    driver.findElement(webdriver.By[byMethod](selector)).then(function(el) {
        el.getAttribute(attribute).then(function(actual) {
			var isMached = new RegExp(expected).test(actual);
			assert.strictEqual(isMached, false, 'Assertion error: Not Equal. Expected: false & Actual: ' + isMached);
        });
    });
}
/**
 * [alopexAssertContains 요소 속성값이 특정 문자열을 포함하면 검증 통과]
 * @param  {[type]} byMethod  [description]
 * @param  {[type]} selector  [description]
 * @param  {[type]} attribute [description]
 * @param  {[type]} expected  [description]
 * @param  {[type]} errorMsg  [description]
 * @return {[type]}           [description]
 */
function alopexAssertContains(byMethod, selector, attribute, expected, errorMsg) {
    driver.findElement(webdriver.By[byMethod](selector)).then(function(el) {
        el.getAttribute(attribute).then(function(actual) {
            console.log("**************************\n* function : alopexAssertContains\n* byMethod : " + byMethod + "\n* selector : " + selector + "\n* attribute : " + attribute + "\n* expected : " + expected + "\n* actual : " + actual);
            if(actual == null) actual = "null";
            assert.contains(actual, expected, 'Assertion error: Not Contains. Expected: ' + expected + ' Not In Actual: ' + actual, '', '');
        });
    });
}
/**
 * [alopexAssertNotContains 요소 속성값이 특정 문자열을 포함하지 않으면 검증 통과]
 * @param  {[type]} byMethod  [description]
 * @param  {[type]} selector  [description]
 * @param  {[type]} attribute [description]
 * @param  {[type]} expected  [description]
 * @param  {[type]} errorMsg  [description]
 * @return {[type]}           [description]
 */
function alopexAssertNotContains(byMethod, selector, attribute, expected, errorMsg) {
    driver.findElement(webdriver.By[byMethod](selector)).then(function(el) {
        el.getAttribute(attribute).then(function(actual) {
            console.log("**************************\n* function : alopexAssertContains\n* byMethod : " + byMethod + "\n* selector : " + selector + "\n* attribute : " + attribute + "\n* expected : " + expected + "\n* actual : " + actual);
            assert.notContains(actual, expected, 'Assertion error: Should Not Contains. but, Expected: ' + expected + ' In Actual: ' + actual, '', '');
        });
    });
}
/**
 * alopexAssertContainsInComputedStyle cssStyleProperty 에 특정 문자열을 포함하면 검증 통과]
 * @param  {[type]} byMethod         [description]
 * @param  {[type]} selector         [description]
 * @param  {[type]} cssStyleProperty [description]
 * @param  {[type]} expected         [description]
 * @return {[type]}                  [description]
*/
function alopexAssertContainsInComputedStyle(byMethod, selector, cssStyleProperty, expected){
    driver.findElement(webdriver.By[byMethod](selector)).then(function(el) {
        el.getCssValue(cssStyleProperty).then(function(actual){
            console.log("**************************\n* function : alopexAssertContainsInComputedStyle\n* byMethod : " + byMethod + "\n* selector : " + selector + "\n* cssStyleProperty : " + cssStyleProperty + "\n* expected : " + expected + "\n* actual : " + actual);
            assert.contains(actual, expected, 'Assertion error: Not Contains. Expected: ' + expected + ' Not In Actual ComputedStyle: ' + actual, '', '');
        });
    });
}

/**
 * [alopexAssertNotContainsInComputedStyle cssStyleProperty 에 특정 문자열을 포함 안하면 검증 통과]
 * @param  {[type]} byMethod         [description]
 * @param  {[type]} selector         [description]
 * @param  {[type]} cssStyleProperty [description]
 * @param  {[type]} expected         [description]
 * @return {[type]}                  [description]
 */
function alopexAssertNotContainsInComputedStyle(byMethod, selector, cssStyleProperty, expected){
    driver.findElement(webdriver.By[byMethod](selector)).then(function(el) {
        el.getCssValue(cssStyleProperty).then(function(actual){
            console.log("**************************\n* function : alopexAssertNotContainsInComputedStyle\n* byMethod : " + byMethod + "\n* selector : " + selector + "\n* cssStyleProperty : " + cssStyleProperty + "\n* expected : " + expected + "\n* actual : " + actual);
            assert.notContains(actual, expected, 'Assertion error: Should Not Contains. but, Expected: ' + expected + ' In Actual: ' + actual, '', '');
        });
    });
}

/**
 * [alopexAssertTextContains 요소의 텍스트 노드가 특정 문자열을 포함하면 검증 통과]
 * @param  {[type]} byMethod [description]
 * @param  {[type]} selector [description]
 * @param  {[type]} expected [description]
 * @param  {[type]} then     [description]
 * @return {[type]}          [description]
 */

function alopexAssertTextContains(byMethod, selector, expected, then) {
    
    driver.findElement(webdriver.By[byMethod](selector)).then(function(el) {
        el.getText().then(function(actual) {
            // try{ alopexGetLog(); }
            // catch(e){ console.log("**************************\n* function : \n* byMethod : " + byMethod + "\n* selector : " + selector + "\n* expected : " + expected); }
            console.log("**************************\n* function : alopexAssertTextContains\n* byMethod : " + byMethod + "\n* selector : " + selector + "\n* expected : " + expected + "\n* actual : " + actual);
            assert.contains(actual, expected, 'Assertion error: Actual:"' + actual + '" Not Contains Expected: "' + expected + '"');
            isSwitched = true;
            if(then) then();
        });
    });

    var isSwitched = false;
    function checkSwiched(){
        if(!isSwitched) checkSwiched();
    }
}
/**
 * [alopexAssertCheckboxRadioSelected 체크박스, 라디오 요소의 체크/언체크 상태 검증]
 * @param  {[type]} byMethod [description]
 * @param  {[type]} selector [description]
 * @param  {[type]} expected [description]
 * @return {[type]}          [description]
 */
function alopexAssertCheckboxRadioSelected(byMethod, selector, expected) {
    driver.findElement(webdriver.By[byMethod](selector)).then(function(el) {
        el.isSelected().then(function(actual) {
            console.log("**************************\n* function : alopexAssertTextContains\n* byMethod : " + byMethod + "\n* selector : " + selector + "\n* expected : " + expected + "\n* actual : " + actual);
            assert.equal(actual, expected, 'Assertion error: Not Equal. Expected: ' + expected + ' & Actual: ' + actual);
        });
    });
}
/**
 * [alopexAssertAlertMessageContains alert 발생 직후 호출. alert이 발생 했는지 확인 후, alert 내 텍스트를 가져와서 특정 문자열이 포함되었는지 검증]
 * @param  {[type]} seleniumIde [description]
 * @param  {[type]} expected    [description]
 * @return {[type]}             [description]
 */
function alopexAssertAlertMessageContains(seleniumIde, expected) {
    var msg = seleniumIde.closeAlertAndGetItsText(driver, acceptNextAlert);
    acceptNextAlert = true;
    msg.then(function(actual) {
        assert.contains(actual, expected, "Expected('" + expected + "') is Not In Actual('" + actual + "')");
    });
    acceptNextAlert = true;
}
/**
 * [alopexAssertAlertMessageEqual alert 발생 직후 호출. alert이 발생 했는지 확인 후, alert 내 텍스트를 가져와서 특정 문자열과 일치 하는지 검증]
 * @param  {[type]} seleniumIde [description]
 * @param  {[type]} expected    [description]
 * @return {[type]}             [description]
 */
function alopexAssertAlertMessageEqual(seleniumIde, expected) {
    var msg = seleniumIde.closeAlertAndGetItsText(driver, acceptNextAlert);
    acceptNextAlert = true;
    msg.then(function(actual) {
        assert.equal(actual, expected, 'Assertion error: Not Equal. Expected: ' + expected + ' & Actual: ' + actual);
    });
    acceptNextAlert = true;
}
/**
 * [alopexAssertText 요소의 텍스트 노드가 특정 문자열과 일치하는지 검증]
 * @param  {[type]} byMethod [description]
 * @param  {[type]} selector [description]
 * @param  {[type]} expected [description]
 * @return {[type]}          [description]
 */
function alopexAssertText(byMethod, selector, expected) {
    driver.findElement(webdriver.By[byMethod](selector)).then(function(el) {
        el.getText().then(function(actual) {
            assert.equal(actual, expected, 'Assertion error: Not Equal. expected: ' + expected + ' & Actual: ' + actual);
        });
    });


}
/**
 * [alopexAssertMaskedInputFormatting 특정문자열을 입력하는 테스트 케이스 복수개를 배열로 전달하여 클리어/입력/테스트 반복]
 * @param  {[type]} byMethod      [description]
 * @param  {[type]} selector      [description]
 * @param  {[type]} testCaseArray [description]
 * @return {[type]}               [description]
 */
function alopexAssertMaskedInputFormatting(byMethod, selector, testCaseArray) {

    var i = 0,
        send = '',
        expect = '',
        el = driver.findElement(webdriver.By[byMethod](selector));

    for (; i < testCaseArray.length; i++) {
        try{ alopexGetLog(); }
        catch(e){ console.log("**************************\n* function : alopexAssertMaskedInputFormatting\n* byMethod : " + byMethod + "\n* selector : " + selector+ "\n* send : " + send+ "\n* expect : " + expect); }

        send = testCaseArray[i].send;
        expect = testCaseArray[i].expect;
        el.clear();
        el.sendKeys("");
        el.sendKeys(send);
        alopexAssertEquals(byMethod, selector, 'value', expect);
    }
}
/**
 * [alopexError 에러 스택 로깅]
 * @param  {[type]} errorMsg [description]
 * @return {[type]}          [description]
 */
function alopexError(errorMsg) {
    var error = new Error();
    if(error.stack){
        console.error(errorMsg + '\n' + error.stack);
        driver.quit();
    }else{
        console.error(errorMsg + '\n' + error.toString());
        driver.quit();
    }
}
/**
 * [alopexIsElementPresent 요소가 생성 되어 존재 함을 검증]
 * @param  {[type]} byMethod [description]
 * @param  {[type]} selector [description]
 * @return {[type]}          [description]
 */
function alopexIsElementPresent(byMethod, selector){
    driver.findElement(webdriver.By[byMethod](selector))
        .then(function(){
            console.log("**************************\n* function : alopexIsElementPresent\n* byMethod : " + byMethod + "\n* selector : " + selector);
            // try{ alopexGetLog(); }
            // catch(e){ console.log("**************************\n* function : alopexIsElementPresent\n* byMethod : " + byMethod + "\n* selector : " + selector); }
        })
        .thenCatch(function(e) {
            console.log("**************************\n* function : alopexIsElementPresent\n* byMethod : " + byMethod + "\n* selector : " + selector);
            // try{ alopexGetLog(); }
            // catch(e){ console.log("**************************\n* function : alopexIsElementPresent\n* byMethod : " + byMethod + "\n* selector : " + selector); }
            alopexError('ElementPresent must be true, but false');
        });
}
/**
 * [alopexIsElementNotPresent 요소가 생성 되지 않았거나, 존재 하지 않는 상태임을 검증]
 * @param  {[type]} byMethod [description]
 * @param  {[type]} selector [description]
 * @return {[type]}          [description]
 */
function alopexIsElementNotPresent(byMethod, selector){

    driver.findElement(webdriver.By[byMethod](selector))
        .then(function(){
            console.log("**************************\n* function : alopexIsElementNotPresent\n* byMethod : " + byMethod + "\n* selector : " + selector);
            // try{ alopexGetLog(); }
            // catch(e){ console.log("**************************\n* function : alopexIsElementNotPresent\n* byMethod : " + byMethod + "\n* selector : " + selector); }
            alopexError('ElementNotPresent must be false, but true');
        })
        .thenCatch(function(e) {
            console.log("**************************\n* function : alopexIsElementNotPresent\n* byMethod : " + byMethod + "\n* selector : " + selector);
            // try{ alopexGetLog(); }
            // catch(e){ console.log("**************************\n* function : alopexIsElementNotPresent\n* byMethod : " + byMethod + "\n* selector : " + selector); }
        });
}
/**
 * [alopexGetLog description]
 * @return {[type]} [description]
 */
function alopexGetLog(){
    var caller = arguments.callee.caller;
    if(typeof caller !== 'function') return null;
    console.log("function name : " + caller.arguments.callee.name);
    for(var index in caller.arguments){
        console.log("arguments[" + index + "] ::: " + caller.arguments[index]);
    }
}
/**
 * [getUnsupportedCommandArguments description]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function getUnsupportedCommandArguments(str){
    // var str = "/* ERROR: Caught exception [unknown command [alopexPause]] */";
    // var str = "/* ERROR: Caught exception [ERROR: Unsupported command [focus | //div[@id='document-content-body-loadhtml']/div/div[5]/div/div/div[2] | ]] */";
    var array = str.split("command");
    str = array[1];
    str = str.substr(str.indexOf("[")+1, str.length);
    str = str.split("]]")[0];
    array = str.split("|");

    var returnObj = [];
    for(var i in array){
        returnObj.push(array[i].trim());
    }
    return returnObj;
}
/**
 * [alopexAssertLocation description]
 * @param  {[type]} expected [description]
 * @return {[type]}          [description]
 */
function alopexAssertLocation(expected){
	driver.getCurrentUrl().then(function(actual){
        console.log("**************************\n* function : alopexAssertLocation\n* expected : " + expected + "\n* actual : " + actual);
		alopexUtilStringEqual(getPathName(actual), getPathName(expected));
	});
}

function alopexAssertLocationContains(expected){
    driver.getCurrentUrl().then(function(actual){
        console.log("**************************\n* function : alopexAssertLocationContains\n* expected : " + expected + "\n* actual : " + actual);
        alopexUtilStringContains(getPathName(actual), expected);
    });
}

/**
 * [getPathName description]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
function getPathName(url){
    var returnUrl = url.split("/").filter(function(v, i){ if(i>=3) return v; }).join('/');
    console.log("**************************\n* function : getPathName\n* url : " + url + "\n* returnUrl : " + returnUrl);
	return returnUrl;
}

/**
 * [alopexCompareInputAndDatePickerLocation description]
 * @param  {[type]} byMethod1   [description]
 * @param  {[type]} selector1   [description]
 * @param  {[type]} byMethod2   [description]
 * @param  {[type]} selector2   [description]
 * @param  {[type]} xy          [description]
 * @param  {[type]} expectedGap [description]
 * @return {[type]}             [description]
 */
function alopexCompareInputAndDatePickerLocation(byMethod1, selector1, byMethod2, selector2, xy, expectedGap){
    driver.findElement(webdriver.By[byMethod1](selector1)).getLocation().then(function(location1){
        driver.findElement(webdriver.By[byMethod2](selector2)).getLocation().then(function(location2){
            console.log("**************************\n* function : alopexCompareInputAndDatePickerLocation\n* byMethod1 : " + byMethod1 + "\n* selector1 : " + selector1 + "\n* byMethod2 : " + byMethod2 + "\n* selector2 : " + selector2 + "\n* xy : " + xy + "\n* expectedGap : " + expectedGap);
            console.log("Location x1 :: " + location1.x);
            console.log("Location y1 :: " + location1.y);
            console.log("Location x2 :: " + location2.x);
            console.log("Location y2 :: " + location2.y);

            if(location1[xy] < 0) location1[xy] = location1[xy] * -1;
            if(location2[xy] < 0) location2[xy] = location2[xy] * -1;

            var actualGap = location1[xy] - location2[xy];
            if(actualGap < 0) actualGap = actualGap * -1;

            var result = actualGap - expectedGap;
            if(result < 0) result = result * -1;            

            // 1 정도 이하의 차이는 성공이라고 본다
            if(result > 1){
                alopexError('CompareLocation error: ActualGap:"' + actualGap + '" is bigger than ExpectedGap: "' + expectedGap + '"');
            }
        });
    });
}

/**
 * [alopexGetEval description]
 * @param  {[type]} evalString [description]
 * @param  {[type]} evalStore  [description]
 * @return {[type]}            [description]
 */
function alopexGetEval(evalString, evalStore){
    try{ alopexGetLog(); }
    catch(e){ console.log("**************************\n* function : alopexGetEval\n* evalString : " + evalString + "\n* evalStore : " + evalStore); }
	try{
        driver[evalStore] = eval(evalString);
        console.log("driver[evalStore] :: " + driver[evalStore]);
		return driver[evalStore];
		// return driver.VariablesOnlyForStoreEval;
	}catch(e){
		verificationErrors.push(e);
	}
}

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};
 
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

test(webdriver, driver, baseUrl, acceptNextAlert, verificationErrors, testPageUrl);