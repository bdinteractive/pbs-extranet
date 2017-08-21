function initExecutiveBlogWidget() {

	$('#WidgetExectiveBlog div.tbar a').click(function(){
		
		if($(this).hasClass('folded') == true) {
			/* unfold it */
			$(this).removeClass('folded');
			$('#WidgetExectiveBlog div.viewport').slideDown();
		} else {
			/* fold it */
			$(this).addClass('folded');
			$('#WidgetExectiveBlog div.viewport').slideUp();
		}
		
		return false;
	});

	$('#WidgetExectiveBlog div.viewport div.panel.scroller div.content').jScrollPane({
		verticalDragMinHeight:23,
		verticalDragMaxHeight:23
	});
}

$(document).ready(function() {
	initExecutiveBlogWidget();
});