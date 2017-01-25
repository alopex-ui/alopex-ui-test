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