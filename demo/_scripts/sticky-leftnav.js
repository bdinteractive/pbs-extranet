function initStickyLeftNavigation() {
	
	$('#sidenav-tools-bar').data('hidden', true);
	$('#sidenav-tools-bar div.tools-bar-widget-wrapper').css({visibility:'hidden'});

	/* the left-side navigation icons */
	$('#sidenav-tools-bar div.widget-icon-bar a.widgetize').click(function(){
		$('#sidenav-tools-bar div.widget-icon-bar a.widgetize').removeClass('current');
		$(this).addClass('current');
		
		var obj = $('#sidenav-tools-bar');
		var hidden = $(obj).data('hidden');
		var dataid = $(this).attr('dataid');

		$('#widget-panel-14ZERO, #widget-panel-discussionboard, #widget-panel-phoneDirectory').css({display:'none'});
		switch(dataid) {
			case 'w140':  $('#widget-panel-14ZERO').css({display:'block'}); break;
			case 'wdisq': $('#widget-panel-discussionboard').css({display:'block'}); break;
			case 'phone': $('#widget-panel-phoneDirectory').css({display:'block'}); break;
		}

		if(hidden == true) {
			$('#sidenav-tools-bar div.tools-bar-widget-wrapper').css({visibility:'visible'});
			$(obj).data('hidden', false).stop().animate({left:0}, 100);
		}

		return false;
	});
	
	
	/* the close button for the widget */
	$('#sidenav-tools-bar-close').click(function() {
		var obj = $('#sidenav-tools-bar');
		$(obj).data('hidden', true).stop().animate({left:-314}, 100, function() {
			$('#sidenav-tools-bar div.tools-bar-widget-wrapper').css({visibility:'hidden'});
			$('#widget-panel-14ZERO, #widget-panel-discussionboard, #widget-panel-phoneDirectory').css({display:'none'});
			$('#sidenav-tools-bar div.widget-icon-bar a').removeClass('current');
		});

		return false;
	});


	/* the tab titles on the widgets (when pulled-out/visible) */
	$('#sidenav-tools-bar div.tools-bar-widget ul.tools-bar-widget-tbar li a').click(function () {
		var dataid = $(this).attr('dataid');
		$('#widget-panel-14ZERO, #widget-panel-discussionboard, #widget-panel-phoneDirectory').css({display:'none'});
		switch(dataid) {
			case 'w140':  $('#widget-panel-14ZERO').css({display:'block'}); break;
			case 'wdisq': $('#widget-panel-discussionboard').css({display:'block'}); break;
			case 'phone': $('#widget-panel-phoneDirectory').css({display:'block'}); break;
		}
		
		$('#sidenav-tools-bar div.widget-icon-bar a.widgetize').removeClass('current');
		$('#sidenav-tools-bar div.widget-icon-bar a.widgetize[dataid='+dataid+']').addClass('current');
		
		return false;
	});

}

$(document).ready(function() {
	initStickyLeftNavigation();
});