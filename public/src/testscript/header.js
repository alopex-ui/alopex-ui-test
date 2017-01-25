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