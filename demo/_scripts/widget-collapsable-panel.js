/*
* Collapsable Panel Widgets
*/



/* Related Announcment */

function initCollapsableWidget() {

	$('#Widget-Collapsable div.tbar a').click(function(){
		
		if($(this).hasClass('folded') == true) {
			/* unfold it */
			$(this).removeClass('folded');
			$('#Widget-Collapsable div.viewport').slideDown();
		} else {
			/* fold it */
			$(this).addClass('folded');
			$('#Widget-Collapsable div.viewport').slideUp();
		}
		
		return false;
	});

	$('#Widget-Collapsable div.viewport div.panel.scroller div.content').jScrollPane({
		verticalDragMinHeight:23,
		verticalDragMaxHeight:23
	});
}

$(document).ready(function() {
	initCollapsableWidget();
});

/* Related Announcment */

/* Who to Contact */

function initCollapsableWidget2() {

	$('#CW-who-to-contact div.tbar a').click(function(){
		
		if($(this).hasClass('folded') == true) {
			/* unfold it */
			$(this).removeClass('folded');
			$('#CW-who-to-contact div.viewport').slideDown();
		} else {
			/* fold it */
			$(this).addClass('folded');
			$('#CW-who-to-contact div.viewport').slideUp();
		}
		
		return false;
	});

	
}

$(document).ready(function() {
	initCollapsableWidget2();
});

/* Who to Contact */


/* Quick List */

function initCollapsableWidget3() {

	$('#CW-Quick-List div.tbar a').click(function(){
		
		if($(this).hasClass('folded') == true) {
			/* unfold it */
			$(this).removeClass('folded');
			$('#CW-Quick-List div.viewport').slideDown();
		} else {
			/* fold it */
			$(this).addClass('folded');
			$('#CW-Quick-List div.viewport').slideUp();
		}
		
		return false;
	});

	
}

$(document).ready(function() {
	initCollapsableWidget3();
});

/* Quick List */




/* Quick List */

function initCollapsableWidget4() {

	//console.log("#4 int")

	$('#WidgetRelatedEvents div.tbar a').click(function(){
		
		//console.log("Clicked")
		
		if($(this).hasClass('folded') == true) {
			/* unfold it */
			$(this).removeClass('folded');
			$('#WidgetRelatedEvents div.content').slideDown();
		} else {
			/* fold it */
			$(this).addClass('folded');
			$('#WidgetRelatedEvents div.content').slideUp();
		}
		
		return false;
	});

	
}

$(document).ready(function() {
	initCollapsableWidget4();
});

/* Quick List */



/* Quick List */

function initCollapsableWidget6() {

	//console.log("#4 int")

	$('#WidgetRelatedAnnouncements div.tbar a').click(function(){
		
		//console.log("Clicked")
		
		if($(this).hasClass('folded') == true) {
			/* unfold it */
			$(this).removeClass('folded');
			$('#WidgetRelatedAnnouncements div.content').slideDown();
		} else {
			/* fold it */
			$(this).addClass('folded');
			$('#WidgetRelatedAnnouncements div.content').slideUp();
		}
		
		return false;
	});

	
}

$(document).ready(function() {
	initCollapsableWidget6();
});

/* Quick List */



/* Form Manager */

function initCollapsableWidget5() {

	$('#CW-FormManager div.tbar a').click(function(){
		
		if($(this).hasClass('folded') == true) {
			/* unfold it */
			$(this).removeClass('folded');
			$('#CW-FormManager div.viewport').slideDown();
		} else {
			/* fold it */
			$(this).addClass('folded');
			$('#CW-FormManager div.viewport').slideUp();
		}
		
		return false;
	});

	
}

$(document).ready(function() {
	initCollapsableWidget5();
});

/* Form Manager */
