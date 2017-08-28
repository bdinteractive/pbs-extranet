function initCastSlider() {
	var listCount = $('#ImageSlider_Wrapper ul.slider-cast-box li').length;
	var listWidth = $('#ImageSlider_Wrapper ul.slider-cast-box li.list.first').outerWidth(true);
	var widthAllowance = 20;
	var totalWidth = (listCount * listWidth) + widthAllowance;
	$('#ImageSlider_Wrapper div.content').css({width:totalWidth + "px"});
	
	
	$('#ImageSlider_Wrapper').jScrollPane({
		horizontalDragMinWidth:71,
		horizontalDragMaxWidth:71
	});
}

function initContentSlider() {

	// This is for the Department Resources Content 
	$('#Gen-Content-Wrapper_LeftRail div.ContentText-DataWrap').jScrollPane({
		verticalDragMinHeight:23, verticalDragMaxHeight:23
	});
	
	// This is for the Department Resources Widget 
	$('#DepartmentResources div.ContentText-DataWrap').jScrollPane({
		verticalDragMinHeight:23, verticalDragMaxHeight:23
	});
	
	// This is for the Department Resources Widget 
	$('.leftContent .ContentText-DataWrap').jScrollPane({
		verticalDragMinHeight:23, verticalDragMaxHeight:23
	});


}


$(document).ready(function() {
	initCastSlider();
	initContentSlider();
});