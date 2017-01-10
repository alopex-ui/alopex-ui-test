/*

Alopex UI Test Script by SK Holdings C&C :
 
* http://cc.sk.co.kr/
* http://ui.alopex.io/
 
Full source at https://github.com/alopex-ui/alopex-ui-test
 
Copyright © 2010-2017 SK Holdings. All rights reserved.

*/
// var baseUrl = "https://alopextestpage.herokuapp.com" // Test Page
var baseUrl = "http://localhost:9000" // Homepage local
// var baseUrl = "http://uistg.alopex.io" // Homepage stg
// var baseUrl = "http://ui.alopex.io" // Homepage prd

var testPageUrl = "http://localhost:5000" // Test Page

var DO_TEST = {
	// JavaScript API
	databinding: 			false,
	maskedinput: 			false,
	navigation: 			false,
	page: 					false,
	popup: 					false,
	progress: 				false,
	request: 				false,
	setup: 					false,
	storage: 				false,
	validator: 				false,
	convert: 				false,

	// Component
	accordion: 				false,
	autocomplete: 			false,
	button: 				false,
	carousel: 				false,
	checkbox: 				false,
	dateinput: 				false,
	datepicker: 			false,
	daterange: 				false,
	dialog: 				true,
	dropdown: 				false,
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
	"tabs_AUI-TS-001": 		false
}

var test = function(webdriver, driver, baseUrl, acceptNextAlert, verificationErrors, testPageUrl) {