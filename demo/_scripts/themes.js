
$(document).ready(function() {
	initTheme();
});

var userThemeChoice;

function getCookie(c_name) {
	var userTheme = document.cookie;
	userTheme = userTheme.substr(userTheme.indexOf("=")+1);
	userThemeChoice = userTheme;
	switch(userTheme) {
		case "theme-01" : themeLocation = "_themes/theme1/theme.css"; break;
		case "theme-02" : themeLocation = "themes/theme2/theme.css"; break;
		case "theme-03" : themeLocation = "themes/theme3/theme.css"; break;
		case "theme-04" : themeLocation = "themes/theme4/theme.css"; break;
		default : themeLocation = "_themes/theme4/theme.css";
	}
	document.write("<link id='themeStyleSheet' rel='stylesheet' type='text/css' media='all' href='"+themeLocation+"' />");
}
//getCookie("theme")

function initTheme() {
	//console.log('Theme Init')
	$('#'+userThemeChoice).addClass('active');
	$('#themeSwitcher ul > li a').click(function(){
		//console.log('Theme Link Clicked')
		if($(this).hasClass('active')) {
			return false;
		}
		$('#themeSwitcher ul > li a').removeClass('active')
		var themeLocation = "";
		var themeName = $(this).attr('id');
		themeName = themeName.toLowerCase();
		switch(themeName) {
			case "theme-01" : themeLocation = "_themes/theme1/"; break;
			case "theme-02" : themeLocation = "_themes/theme2/"; break;
			case "theme-03" : themeLocation = "_themes/theme3/"; break;
			case "theme-04" : themeLocation = "_themes/theme4/"; break;
			default: themeLocation = ""; break;
		}
		if(themeLocation !== "") {
			setCookie("theme",themeName,365);
			$('#themeSwitcher ul > a').removeClass('active');
			$(this).addClass('active');
			var themeLayout = themeLocation + "theme.css";
			$('#themeStyleSheet').attr('href', themeLayout);
		
		}
		return false;
	});
}

function setCookie(c_name,value,exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
}
