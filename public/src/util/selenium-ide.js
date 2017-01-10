function isElementPresent(driver, by) {
    try {
		driver.findElement(by).thenCatch(function(e) {
            return false;    
        });
		return true;
    } catch (e) {
		return false;
    }
}

function isAlertPresent(driver) {
    try {
        driver.switchTo().alert();
        return true;
    } catch (e) {
        return false;
    }
}

function closeAlertAndGetItsText(driver, acceptNextAlert) {
    try {
        var alert = driver.switchTo().alert();
        var alertText = alert.getText();
        console.log("alertText :: " + alertText);
        if (acceptNextAlert) {
            alert.accept();
        } else {
            alert.dismiss();
        }
        return alertText;
    } catch (ignore) {}
}

function closeAlertAndAssertItsText(driver, expected, acceptNextAlert) {
    try {
        driver.switchTo().alert().then(function(alert){
            alert.getText().then(function(actual){
                driver.assert.contains(actual, expected, 'Assert Error: Actual[' + actual + '] does Not contain Expected['+ expected +']');
                alert.accept();
                // return actual;
            });
        });

    } catch (ignore) {}
}

module.exports.isElementPresent = isElementPresent;
module.exports.isAlertPresent = isAlertPresent;
module.exports.closeAlertAndGetItsText = closeAlertAndGetItsText;
module.exports.closeAlertAndAssertItsText = closeAlertAndAssertItsText;
// driver.manage().timeouts().implicitlyWait(...)