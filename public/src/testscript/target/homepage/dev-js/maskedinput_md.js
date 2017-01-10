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