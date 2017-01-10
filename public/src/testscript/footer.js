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