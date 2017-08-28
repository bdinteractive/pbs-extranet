
$(document).ready(function() {
	contentTabsWidget();
});

var jspScroller = null; /* global handle for the grid slider, needed when we have to destroy the slider */

function initGridSlider() {
	/**
	 * some computations needed to synchronize the slider with the width of the content area,
	 * we don't want the slider scrolling thru empty space so we fit the container with the content.
	 **/
	var liCount = $('#wdgtRltdRes ul.ultop li.ultopli').length;
	var liWidth = $('#wdgtRltdRes ul.ultop li.ultopli:first').outerWidth(true);
	var widthAllowance = 10; /* just a little horizontal allowance */
	var totalWidth = (liCount * liWidth) + widthAllowance;
	$('#wdgtRltdRes div.slider-content-box').css({width:totalWidth + "px"});
	$('#wdgtRltdRes').jScrollPane({ horizontalDragMinWidth:71, horizontalDragMaxWidth:71});

	/* save a handle to the slider so it can be destroyed if needed be */
	jspScroller = $('#wdgtRltdRes').data('jsp'); 
}


function destroyGridSlider() {
	jspScroller.destroy(); /* destroy the slider */
	$('#wdgtRltdRes div.slider-content-box').css({width:"auto"}); /* reset width to auto */
}

function contentTabsWidget() {
	
	var tbarNum = $('#Rel_Comm_Widget_ph .tbar').children().length;
	var tbarArray = new Array();
	var i=1;
	for (i=1;i<=tbarNum;i++){
		var currentId = $('#Rel_Comm_Widget_ph div.tbar a:nth-child('+i+')').attr('dataid');
		currentId = '#Rel_Comm_Widget_ph div.panel-wrap-'+currentId;
		var j = i-1;
		tbarArray[j] = currentId;
	}
	
	$('#Rel_Comm_Widget_ph div.tbar a').click(function(){
		$('#Rel_Comm_Widget_ph div.tbar a').removeClass('current');
		$(this).addClass('current');
		var dataid = $(this).attr('dataid');
		
		var tbarNum = $(this).parent().children().length;
		
		var i=0;
		for (i=0;i<=tbarNum;i++){
			$(tbarArray[i]).css({display:'none'});
		}
		
		$('#Rel_Comm_Widget_ph div.panel-wrap-'+dataid).css({display:'block'});
		
		return false;
	});
	
	/* initialize the grid slider (default view is grid) */
	initGridSlider();
	
	$('#gridlist-switch-wrap a.doGrid').click(function() {
		/**
		* we can't just blindly turn on the grid view if we are already on the grid view because
		* it will wreck havoc on our grid slider being recreated when it still exist!
		**/
		if($(this).hasClass('Off')) {
			$('#wdgtRltdRes').removeClass('list').addClass('grid');
			$(this).removeClass('Off');
			$('#gridlist-switch-wrap a.doList').addClass('Off');
			initGridSlider(); /* create the slider */
		}
		return false;
	});
	$('#gridlist-switch-wrap a.doList').click(function() {
		/**
		* we can't also just blindly turn on the list view if we are already on the list view because
		* we will be destroying a slider that effectively no longer exist!
		**/
		if($(this).hasClass('Off')) {
			destroyGridSlider(); /* destroy the slider */
			$('#wdgtRltdRes').removeClass('grid').addClass('list');
			$(this).removeClass('Off');
			$('#gridlist-switch-wrap a.doGrid').addClass('Off');
		}
		return false;
	});
}