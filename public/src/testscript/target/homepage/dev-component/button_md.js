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