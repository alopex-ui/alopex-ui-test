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