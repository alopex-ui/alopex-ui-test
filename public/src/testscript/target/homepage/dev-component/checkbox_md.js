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