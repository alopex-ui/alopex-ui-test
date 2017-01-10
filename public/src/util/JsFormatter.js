/*
 * Formatter for Selenium 2 / WebDriver JavaScript client.
 */

if (!this.formatterType) {  // this.formatterType is defined for the new Formatter system
  // This method (the if block) of loading the formatter type is deprecated.
  // For new formatters, simply specify the type in the addPluginProvidedFormatter() and omit this
  // if block in your formatter.
  var subScriptLoader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"].getService(Components.interfaces.mozIJSSubScriptLoader);
  subScriptLoader.loadSubScript('chrome://selenium-ide/content/formats/webdriver.js', this);
}

function useSeparateEqualsForArray() {
  return true;
}

function testClassName(testName) {
  return testName.split(/[^0-9A-Za-z]+/).map(
      function(x) {
        return capitalize(x);
      }).join('');
}

function testMethodName(testName) {
  return "test" + testClassName(testName);
}

function nonBreakingSpace() {
  return "\"\\u00a0\"";
}

function array(value) {
    return JSON.stringify(value);
}

Equals.prototype.toString = function() {
    return this.e1.toString() + " == " + this.e2.toString();
};

function getByMethod(str){
  // xpath, id 등 byMethod 키워드 추출
  var byMethod = '';
  byMethod = str.substr(str.search("By") + 3, str.length);
  byMethod = byMethod.substr(0, byMethod.search('\\('));
  return byMethod;
}
Equals.prototype.assert = function() {
  // alert("this.e1.toString() :: " + this.e1.toString() + "\nthis.e2.toString() :: " + this.e2.toString());
  
// this.e1.toString() :: "ashley"
// this.e2.toString() :: driver.findElement(webdriver.By.xpath("//*[@id='bindarea']/p/input[1]")).getAttribute("value")
// 
// this.e1.toString() :: "password"
// this.e2.toString() :: driver.findElement(webdriver.By.xpath("//*[@id=\"bindarea\"]/p/input[2]")).getAttribute("type")
// 
// this.e1.toString() :: "on"
// this.e2.toString() :: driver.findElement(webdriver.By.xpath("//*[@id=\"checkbox1\"]")).getAttribute("value")
// 
// this.e1.toString() :: "{\"mycheckbox\":[\"check1\",\"check2\"]}"
// this.e2.toString() :: seleniumIde.closeAlertAndGetItsText(driver, acceptNextAlert);
// 
// acceptNextAlert = true
// 
// this.e1.toString() :: "child"
// this.e2.toString() :: driver.findElement(webdriver.By.xpath("//*[contains(@class, 'Button')]")).getText()
  expression = this.e2.toString();

  if(expression.search("closeAlertAndGetItsText") >= 0){
    result = "var msg = seleniumIde.closeAlertAndGetItsText(driver, acceptNextAlert);\nacceptNextAlert = true;\n";
    result += "if (typeof msg === 'string' || msg instanceof String) {\n";
    result += "\talopexUtilStringEqual(msg, " + this.e1.toString() + ");\n";
    result += "}";
  }

  else if(expression.search("closeAlertAndAssertItsText") >= 0){
    result = "seleniumIde.closeAlertAndAssertItsText(driver, " + this.e1.toString() + ", acceptNextAlert)";
    result += "\nacceptNextAlert = true;";
  }

  else if(expression === 'driver.getCurrentUrl()'){
    // expression :: driver.getCurrentUrl()
    result = "alopexAssertLocation(" + this.e1.toString() + ");";
  }

  else if(expression.search("getText") >= 0){
    // this.e1.toString() :: "child"
    // this.e2.toString() :: driver.findElement(webdriver.By.xpath("//*[contains(@class, 'Button')]")).getText()
    expression = getReplacedSelector(expression);

    var byMethod = getByMethod(expression);
    var args = getArguments(expression);
    args.value = getReplacedValue(this.e1.toString());
    result = "alopexAssertTextContains('" + byMethod + "', \"" + args.selector + "\", " + args.value + ");";
  }

  else{
    expression = getReplacedSelector(expression);

    var byMethod = getByMethod(expression);
    var args = getArguments(expression);
    args.value = getReplacedValue(this.e1.toString());
    result = "alopexAssertContains('" + byMethod + "', \"" + args.selector + "\", '" + args.attribute + "', " + args.value + ");";
  }

  // else if(expression.search("equals") >= 0){
  //   var byMethod = getByMethod(expression);
  //   var args = getArguments(expression);
  //   args.value = getReplacedValue(this.e1.toString());
  //   result = "alopexAssertEquals('" + byMethod + "', \"" + args.selector + "\", '" + args.attribute + "', '" + args.value + "');";
  // }

  // else{
    
  // }

  return result;
};

Equals.prototype.verify = function() {
  return verify(this.assert());
};

NotEquals.prototype.toString = function() {
  return this.e1.toString() + " != " + this.e2.toString();
};

NotEquals.prototype.assert = function() {
  return "assert.notEqual(" + this.e1.toString() + ", " + this.e2.toString()
    + ", 'Assertion error: Expected: " + this.e1.toString() + ", Actual: "
    +  + this.e2.toString() + "');";
};

NotEquals.prototype.verify = function() {
  return verify(this.assert());
};

function joinExpression(expression) {
  return "join(" + expression.toString() + ", ',')";
}

function statement(expression) {
  var s = expression.toString();
  if (s.length == 0) {
    return null;
  }
  return s + ';';
}

function assignToVariable(type, variable, expression) {
  return "/* @type " + type + " */\r\nvar " +
    variable + " = " + expression.toString();
}

function ifCondition(expression, callback) {
  return "if (" + expression.toString() + ") {\n" + callback() + "}";
}


function getArguments(str){
  var array = str.split("\"");
  var returnObj = {};
  // alert("getArguments array :: \n" + array.toString() + "\n\nlength :: " + array.length);

  if(array.length === 7 && str.search("match") >= 0){
    // driver.findElement(webdriver.By.xpath("//*[@id='bindarea']/p/input[2]")).getAttribute("value").match("^alopex|contains|[\\s\\S]*[\\s\\S]*[\\s\\S]*[\\s\\S]*[\\s\\S]*$")
    returnObj.selector = array[1];  // xpath
    returnObj.attribute = array[3]; // attribute
    returnObj.value = getReplacedValue(array[5]);     // matches string
  }

  else if(array.length === 3 && str.search("isSelected") >= 0){
    // driver.findElement(webdriver.By.xpath("//*[@id='bindarea']/label[1]/input")).isSelected()
    returnObj.selector = array[1];
  }

  else if(array.length === 5 && str.search("getAttribute") >= 0){
    // driver.findElement(webdriver.By.xpath("//*[@id='bindarea']/p/input[1]")).getAttribute("value")
    returnObj.selector = array[1];  // xpath
    returnObj.attribute = array[3]; // attribute
  }

  else if(array.length === 3 && str.search("isElementPresent") >= 0){
    // seleniumIde.isElementPresent(driver, webdriver.By.css("div.alopex_overlay")
    returnObj.selector = array[1];  // xpath
  }

  else if(array.length === 3 && str.search("getText") >= 0){
    // driver.findElement(webdriver.By.xpath("//*[contains(@class, 'Button')]")).getText()
    returnObj.selector = array[1];
  }

  else{
    console.error("getArguments Exception");
  }

  return returnObj;
}
function getReplacedSelector(str){
  // " (더블 쿼테이션)이 구분자 이기 때문에 불필요한 구분자는 ' (싱글 쿼테이션)으로 치환
  // ASIS driver.findElement(webdriver.By.xpath("//*[@id=\"bindarea\"]/label[1]/input")).isSelected()
  // TOBE driver.findElement(webdriver.By.xpath("//*[@id='bindarea']/label[1]/input")).isSelected()
  // alert("Before\ngetReplacedSelector :: " + str);
  // str = str.replace(/\\\"/g, "'");
  // alert("After\ngetReplacedSelector :: " + str);
  // return str;
  return str.replace(/\\\"/g, "'");
}
function getReplacedValue(str){
  // "alopex|contains|value" 에서 "alopex|contains|" 를 빈값으로 replace 한다. 즉, value만 추출한다.
  // ASIS ^alopex|contains|[\\s\\S]*[\\s\\S]*[\\s\\S]*[\\s\\S]*[\\s\\S]*$
  // TOBE ^[\\s\\S]*[\\s\\S]*[\\s\\S]*[\\s\\S]*[\\s\\S]*$
  // return str.replace(/alopex\|\w*\|/i, '');
  return str;
}
function assertTrue(expression) {
  // alert("assertTrue :: \n" + expression.toString());
// alert("expression.toString() :: " + expression.toString());

// expression.toString() :: driver.findElement(webdriver.By.xpath("//*[@id='bindarea']/p/input[2]")).getAttribute("value").match("^[\\s\\S]*[\\s\\S]*[\\s\\S]*[\\s\\S]*[\\s\\S]*$")
// expression.toString() :: driver.findElement(webdriver.By.xpath("//*[@id=\"bindarea\"]/label[1]/input")).isSelected()
// expression.toString() :: driver.findElement(webdriver.By.xpath("//*[@id=\"checkbox1\"]")).isSelected()
// expression.toString() :: driver.findElement(webdriver.By.xpath("//*[@id=\"checkbox2\"]")).isSelected()
  expression = expression.toString();
  expression = getReplacedSelector(expression);

  if(expression.search("match") >= 0){
    let byMethod = getByMethod(expression);
    let args = getArguments(expression);
    result = "alopexAssertMatches('" + byMethod + "', \"" + args.selector + "\", '" + args.attribute + "', '" + args.value + "');";
  }

  else if(expression.search("isSelected") >= 0){
    let byMethod = getByMethod(expression);
    let args = getArguments(expression);
    result = "alopexAssertCheckboxRadioSelected('" + byMethod + "', \"" + args.selector + "\", true);";
  }

  else if(expression.search("isElementPresent") >= 0){
    // seleniumIde.isElementPresent(driver, webdriver.By.css("div.alopex_overlay")
    let byMethod = getByMethod(expression);
    let args = getArguments(expression);
    result = "alopexIsElementPresent('" + byMethod + "', \"" + args.selector + "\");";
  }

  else{
    console.error("assertTrue Exception");
  }

  return result;
}

function assertFalse(expression) {

  // driver.findElement(webdriver.By.xpath("//*[@id=\"bindarea\"]/label[1]/input")).isSelected()
  // driver.findElement(webdriver.By.xpath("//*[@id='bindarea']/p/input[2]")).getAttribute("value").match("^alopex|contains|[\\s\\S]*[\\s\\S]*[\\s\\S]*[\\s\\S]*[\\s\\S]*$")
  // var result = "assert.strictEqual(" + expression.toString() + ", false"
  //   + ", 'Assertion error: Expected: false, Actual: "
  //   + expression.toString() + "');";

  expression = expression.toString();
  
  expression = getReplacedSelector(expression);


  if(expression.search("isElementPresent") >= 0){
    // seleniumIde.isElementPresent(driver, webdriver.By.css("div.alopex_overlay")
    var byMethod = getByMethod(expression);
    var args = getArguments(expression);
    result = "alopexIsElementNotPresent('" + byMethod + "', \"" + args.selector + "\");";
  }

  else if(expression.search("isSelected") >= 0){
    var byMethod = getByMethod(expression);
    var args = getArguments(expression);
    result = "alopexAssertCheckboxRadioSelected('" + byMethod + "', \"" + args.selector + "\", true);";
  }

  else{
    console.error("assertTrue Exception");
  }

  return result;   
}

function verify(statement) {
  return "try {\n" +
      indents(1) + statement + "\n" +
      "} catch (e) {\n" +
      indents(1) + "verificationErrors.push(e.toString());\n" +
      "}";
}

function verifyTrue(expression) {
  return verify(assertTrue(expression));
}

function verifyFalse(expression) {
  return verify(assertFalse(expression));
}

RegexpMatch.prototype.toString = function() {
    return this.expression + ".match(" + string(this.pattern) + ")";
};

function waitFor(expression) {
    return "driver.wait(function(){\n"
        + (expression.setup ? indents(1) + expression.setup() + "\n" : "")
        + indents(1) + "return (" + expression.toString() + ");\n"
        + indents(0) + "}, 30, 'Timeout');\n";
}

function assertOrVerifyFailure(line, isAssert) {
  return "assert.throws(" + line + ");";
}

function pause(milliseconds) {
  return "Thread.sleep(" + parseInt(milliseconds, 10) + ");";
}

function echo(message) {
  return "console.log(" + xlateArgument(message) + ");";
}

function formatComment(comment) {
  return comment.comment.replace(/.+/mg, function(str) {
    return "/* " + str + " */";
  });
}

function keyVariable(key) {
  return "Keys." + key;
}

this.sendKeysMaping = {
  BKSP: "BACK_SPACE",
  BACKSPACE: "BACK_SPACE",
  TAB: "TAB",
  ENTER: "ENTER",
  SHIFT: "SHIFT",
  CONTROL: "CONTROL",
  CTRL: "CONTROL",
  ALT: "ALT",
  PAUSE: "PAUSE",
  ESCAPE: "ESCAPE",
  ESC: "ESCAPE",
  SPACE: "SPACE",
  PAGE_UP: "PAGE_UP",
  PGUP: "PAGE_UP",
  PAGE_DOWN: "PAGE_DOWN",
  PGDN: "PAGE_DOWN",
  END: "END",
  HOME: "HOME",
  LEFT: "LEFT",
  UP: "UP",
  RIGHT: "RIGHT",
  DOWN: "DOWN",
  INSERT: "INSERT",
  INS: "INSERT",
  DELETE: "DELETE",
  DEL: "DELETE",
  SEMICOLON: "SEMICOLON",
  EQUALS: "EQUALS",

  NUMPAD0: "NUMPAD0",
  N0: "NUMPAD0",
  NUMPAD1: "NUMPAD1",
  N1: "NUMPAD1",
  NUMPAD2: "NUMPAD2",
  N2: "NUMPAD2",
  NUMPAD3: "NUMPAD3",
  N3: "NUMPAD3",
  NUMPAD4: "NUMPAD4",
  N4: "NUMPAD4",
  NUMPAD5: "NUMPAD5",
  N5: "NUMPAD5",
  NUMPAD6: "NUMPAD6",
  N6: "NUMPAD6",
  NUMPAD7: "NUMPAD7",
  N7: "NUMPAD7",
  NUMPAD8: "NUMPAD8",
  N8: "NUMPAD8",
  NUMPAD9: "NUMPAD9",
  N9: "NUMPAD9",
  MULTIPLY: "MULTIPLY",
  MUL: "MULTIPLY",
  ADD: "ADD",
  PLUS: "ADD",
  SEPARATOR: "SEPARATOR",
  SEP: "SEPARATOR",
  SUBTRACT: "SUBTRACT",
  MINUS: "SUBTRACT",
  DECIMAL: "DECIMAL",
  PERIOD: "DECIMAL",
  DIVIDE: "DIVIDE",
  DIV: "DIVIDE",

  F1: "F1",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  
  META: "META",
  COMMAND: "COMMAND"
};

/**
 * Returns a string representing the suite for this formatter language.
 *
 * @param testSuite  the suite to format
 * @param filename   the file the formatted suite will be saved as
 */
function formatSuite(testSuite, filename) {
  var suiteClass = /^(\w+)/.exec(filename)[1];
  suiteClass = suiteClass[0].toUpperCase() + suiteClass.substring(1);

  var formattedSuite = indents(0) + "var " + suiteClass + " = { 'tests' : {}};\n";

  for (var i = 0; i < testSuite.tests.length; ++i) {
    var testClass = testSuite.tests[i].getTitle();
    formattedSuite += suiteClass + ".tests['" + testClass + "'] = require('./" + testClass + ".js');\n";
  }

  formattedSuite += "\n"
    + indents(0) + suiteClass + ".run = function " + suiteClass + "_run() {\n"
    + indents(1) + "var webdriver = require('selenium-webdriver');\n"
    + indents(1) + "\n"
    + indents(1) + "var driver = new webdriver.Builder().\n"
    + indents(2) + "withCapabilities(webdriver.Capabilities.firefox()).\n"
    + indents(2) + "build();\n"
    + indents(1) + 'var baseUrl = "";\n'
    + indents(1) + "var acceptNextAlert = true;\n"
    + indents(1) + "var verificationErrors = [];\n"
    + indents(1) + "\n"
    + indents(1) + "Object.keys(" + suiteClass + ".tests).forEach(function (v,k,a) {\n"
    + indents(2) + suiteClass + ".tests[v](webdriver, driver, baseUrl, acceptNextAlert, verificationErrors);\n"
    + indents(1) + "});\n"
    + indents(0) + "}\n"
    + indents(1) + "\n"
    + indents(0) + "module.exports = " + suiteClass + ";\n"
    + indents(0) + "//" + suiteClass + ".run();";

  return formattedSuite;
}

this.options = {
  indent: '4',
  initialIndents: '0',
  showSelenese: 'false',
  defaultExtension: "js"
};

function defaultExtension() {
  return this.options.defaultExtension;
}

options.header = "module.exports = function ${methodName} (webdriver, driver, baseUrl, acceptNextAlert, verificationErrors)  {\n\n"
    + indents(0) + 'var seleniumIde = require("./selenium-ide.js");\n'
    + indents(0) + "var assert = require('assert');\n"
    + indents(0) + 'baseUrl = "${baseURL}" || baseUrl;\n'
    + indents(0) + "acceptNextAlert = true;\n";

options.footer = "\n}\n\n";

this.configForm =
        '<description>Header</description>' +
        '<textbox id="options_header" multiline="true" flex="1" rows="4"/>' +
        '<description>Footer</description>' +
        '<textbox id="options_footer" multiline="true" flex="1" rows="4"/>' +
        '<description>Indent</description>' +
        '<menulist id="options_indent"><menupopup>' +
        '<menuitem label="Tab" value="tab"/>' +
        '<menuitem label="1 space" value="1"/>' +
        '<menuitem label="2 spaces" value="2"/>' +
        '<menuitem label="3 spaces" value="3"/>' +
        '<menuitem label="4 spaces" value="4"/>' +
        '<menuitem label="5 spaces" value="5"/>' +
        '<menuitem label="6 spaces" value="6"/>' +
        '<menuitem label="7 spaces" value="7"/>' +
        '<menuitem label="8 spaces" value="8"/>' +
        '</menupopup></menulist>' +
        '<checkbox id="options_showSelenese" label="Show Selenese"/>';

this.name = "Node (WebDriver)";
this.testcaseExtension = ".js";
this.suiteExtension = ".js";
this.webdriver = true;

WDAPI.Driver = function() {
  this.ref = 'driver';
};

WDAPI.Driver.searchContext = function(locatorType, locator) {
  var locatorString = xlateArgument(locator);
  switch (locatorType) {
    case 'xpath':
      return 'webdriver.By.xpath(' + locatorString + ')';
    case 'css':
      return 'webdriver.By.css(' + locatorString + ')';
    case 'id':
      return 'webdriver.By.id(' + locatorString + ')';
    case 'link':
      return 'webdriver.By.linkText(' + locatorString + ')';
    case 'name':
      return 'webdriver.By.name(' + locatorString + ')';
    case 'tag_name':
      return 'webdriver.By.tagName(' + locatorString + ')';
  }
  throw 'Error: unknown strategy [' + locatorType + '] for locator [' + locator + ']';
};

WDAPI.Driver.prototype.back = function() {
  return this.ref + ".navigate().back()";
};

WDAPI.Driver.prototype.close = function() {
  return this.ref + ".close()";
};

WDAPI.Driver.prototype.findElement = function(locatorType, locator) {
  return new WDAPI.Element(this.ref + ".findElement(" + WDAPI.Driver.searchContext(locatorType, locator) + ")");
};

WDAPI.Driver.prototype.findElements = function(locatorType, locator) {
  return new WDAPI.ElementList(this.ref + ".findElements(" + WDAPI.Driver.searchContext(locatorType, locator) + ")");
};

WDAPI.Driver.prototype.getCurrentUrl = function() {
  return this.ref + ".getCurrentUrl()";
};

WDAPI.Driver.prototype.get = function(url) {
  if (url.length > 1 && (url.substring(1,8) == "http://" || url.substring(1,9) == "https://")) { // url is quoted
    return this.ref + ".get(" + url + ")";
  } else {
    return this.ref + ".get(baseUrl + " + url + ")";
  }
};

WDAPI.Driver.prototype.getTitle = function() {
  return this.ref + ".getTitle()";
};

WDAPI.Driver.prototype.getAlert = function() {
  return "seleniumIde.closeAlertAndAssertItsText(driver, msg, acceptNextAlert);\n"
    + "acceptNextAlert = true";
};

// WDAPI.Driver.prototype.getPopUp = function() {
//   return "getPopUp";
// };
// WDAPI.Driver.prototype.getPopup = function() {
//   return "getPopup";
// };

WDAPI.Driver.prototype.chooseOkOnNextConfirmation = function() {
  return "acceptNextAlert = true";
};

WDAPI.Driver.prototype.chooseCancelOnNextConfirmation = function() {
  return "acceptNextAlert = false";
};

WDAPI.Driver.prototype.refresh = function() {
  return this.ref + ".navigate().refresh()";
};

WDAPI.Element = function(ref) {
  this.ref = ref;
};

WDAPI.Element.prototype.clear = function() {
  return this.ref + ".clear()";
};

WDAPI.Element.prototype.click = function() {
  return this.ref + ".click()";
};

WDAPI.Element.prototype.getAttribute = function(attributeName) {
  return this.ref + ".getAttribute(" + xlateArgument(attributeName) + ")";
};

WDAPI.Element.prototype.getText = function() {
  return this.ref + ".getText()";
};

WDAPI.Element.prototype.isDisplayed = function() {
  return this.ref + ".isDisplayed()";
};

WDAPI.Element.prototype.isSelected = function() {
  return this.ref + ".isSelected()";
};

WDAPI.Element.prototype.sendKeys = function(text) {
  return this.ref + ".sendKeys(" + xlateArgument(text) + ")";
};

WDAPI.Element.prototype.submit = function() {
  return this.ref + ".submit()";
};

WDAPI.Element.prototype.select = function(selectLocator) {
  if (selectLocator.type == 'index') {
    return "new Select(" + this.ref + ").selectByIndex(" + selectLocator.string + ")";
  }
  if (selectLocator.type == 'value') {
    return "new Select(" + this.ref + ").selectByValue(" + xlateArgument(selectLocator.string) + ")";
  }
  return "new Select(" + this.ref + ").selectByVisibleText(" + xlateArgument(selectLocator.string) + ")";
};

WDAPI.ElementList = function(ref) {
  this.ref = ref;
};

WDAPI.ElementList.prototype.getItem = function(index) {
  return this.ref + "[" + index + "]";
};

WDAPI.ElementList.prototype.getSize = function() {
  return this.ref + ".size()";
};

WDAPI.ElementList.prototype.isEmpty = function() {
  return this.ref + ".isEmpty()";
};

WDAPI.Utils = function() {
};

WDAPI.Utils.isElementPresent = function(how, what) {
  return "seleniumIde.isElementPresent(driver, " + WDAPI.Driver.searchContext(how, what) + ")";
};

WDAPI.Utils.isAlertPresent = function() {
  return "seleniumIde.isAlertPresent(driver)";
};
