

function widgetInitNewsEvents() {
	
	function newsHoverTableRows() {
		$("#Tb_Ann_Listing .tableRowListing").hover(function(){
			$(this).find(".date").addClass("date_impt");
			$(this).find(".Arrow").addClass("Arrow_impt");
			$(this).find(".Announcement").addClass("Announcement_impt");
			$(this).find(".Alert").addClass("Alert_impt");
		},function () {
			$(this).find(".date").removeClass("date_impt");
			$(this).find(".Arrow").removeClass("Arrow_impt");
			$(this).find(".Announcement").removeClass("Announcement_impt");
			$(this).find(".Alert").removeClass("Alert_impt");
		});
	}
	newsHoverTableRows();
	
	/* the NEWS widget on the home page */
	$('#content-toparea-wrpwidgets Table.TabText td a').click(function() {
		$('#content-toparea-wrpwidgets Table.TabText td a').removeClass().addClass('default');
		$('#content-toparea-wrpwidgets Table.TabText td a span.dn-arrow').remove();
		$(this).removeClass().addClass('current').append('<span class="dn-arrow"></span>');
		
		var reldata = $(this).attr('rel');
		
		/* the following vars data should be coming from the server (ajax) but for this demo, they'll be fixed here. */
		var HQNewsData = '<div style="background-color:#c9ccb7; height:200px; width:100%;"></div>';
		var SystemWideData = '<table><tr><td><table id="Tb_Ann_Listing"><tr class="tableRowListing"><td class="date"><h6>05</h6><h7>June</h7></td><td class="Arrow">&nbsp;</td><td class="Announcement"><h2><a class="Announcement-link"  href="#">Announcement #1</a></h2><a class="Announcement-link"  href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat tempor viverra. Quisque in vehicula nulla...</a></td><td class="Alert">&nbsp;</td></tr><tr class="tableRowListing"><td class="date"><h6>07</h6><h7>June</h7></td><td class="Arrow">&nbsp;</td><td class="Announcement"><h2><a class="Announcement-link"  href="#">Announcement #2</a></h2><a class="Announcement-link"  href="#">Lorem ipsum dolor sit met, consectetur adipiscing elit. In placerat tempor viverra. Quisque in vehicula nulla..</a>.</td><td class="Alert"><div class="show_importanticon">&nbsp;</div></td></tr><tr class="tableRowListing"><td class="date"><h6>05</h6><h7>June</h7></td><td class="Arrow">&nbsp;</td><td class="Announcement"><h2><a class="Announcement-link" href="#">Announcement #3</a></h2><a class="Announcement-link"  href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat tempor viverra. Quisque in vehicula nulla... </a></td><td class="Alert">&nbsp;</td></tr><tr><td colspan="4" class="LastRow"><div class="more-annmnts"><div class="widget_White_arrow"><a href="#">More Announcements</a></div></div></td></tr></table></td></tr></table>';
		var PubMedNewsData = '<div style="background-color:#b7c5cc; height:200px; width:100%;"></div>';

		
		switch(reldata) {
			case 'HQNews': $('div.news-content').html(HQNewsData); break;
			case 'SystemWide': $('div.news-content').html(SystemWideData); newsHoverTableRows(); break;
			case 'PubMedNews': $('div.news-content').html(PubMedNewsData); break;
			default: break;
		}
		return false;
	});

	/* the UPCOMING EVENTS widget on the home page */
	$('ul.eventsTabs li').click(function() {
		
		/*console.log('Event')*/
		
		$('ul.eventsTabs li').removeClass();
		$('ul.eventsTabs li a span.dn-arrow').remove();
		$(this).addClass('current');
		
		/*console.log(this)*/
		
		$(this).find('a').append('<span class="dn-arrow"></span>');
		
		var reldata = $(this).attr('rel');
		
		// the following vars data should be coming from the server (ajax) but for this demo, they'll be fixed here.
		
		var MonthData = '<div style="background-color:#eee; height:200px; width:100%;"></div>';
		var WeekData = '<h3>March 1-7 2011</h3><div id=Event-Listing><table cellpadding=2 cellspacing=2 class=Event-Week-Listing><tr><td class=DayofWeek-Listing>Mon</td><td class=Timeofday-Listing>9:00am</td><td class=EventDetails-Listing>Craft Fair Setup</td><tr><td class=DayofWeek-Listing>Tue</td><td class=Timeofday-Listing>11:00am</td><td class=EventDetails-Listing>Craft Fair Setup</td><tr><td class=DayofWeek-Listing>Wed</td><td class=Timeofday-Listing>1:30pm</td><td class=EventDetails-Listing>Diversity Training</td><tr><td class=DayofWeek-Listing>Thurs</td><td class=Timeofday-Listing>3:30 pm</td><td class=EventDetails-Listing>Board Meeting</td></table></div>';

		switch(reldata) {
			case 'Month': $('div.Event-Listing-Wrapper').html(MonthData); break;
			case 'Week': $('div.Event-Listing-Wrapper').html(WeekData); break;
			default: break;
		}
		return false;
	});
}

function widgetInitFormManager() {
	/* Form Manager Widget */
	$('#Widget-FormManager Table.TabText td a').click(function() {
		$('#Widget-FormManager Table.TabText td a').removeClass().addClass('default');
		$('#Widget-FormManager Table.TabText td a span.dn-arrow').remove();
		$(this).removeClass().addClass('current').append('<span class="dn-arrow"></span>');
		
		var reldata = $(this).attr('rel');
		
		/* the following vars data should be coming from the server (ajax) but for this demo, they'll be fixed here. */
		var MyFormsData = ' <div class="contentArea" > <table width="100%" > <tr class="line-separator"> <td> <em> A list of e-forms you have completed </em> </td> </tr> <tr class="line-separator"> <td  ><a href="#"> Cigna Enrollment Form </a> <br> Approved 4/6/2010  </td> </tr>  <tr class="line-separator"> <td><a href="#">Cigna Enrollment Form </a>  <br>  Approved 4/6/2010 </td> </tr> <tr class="line-separator"> <td><a href="#">Cigna Enrollment Form</a> <br> Approved 4/6/2010 </td> </tr><tr class="line-separator"> <td><a href="#">Cigna Enrollment Form</a> <br> Approved 4/6/2010 </td> </tr>  <tr class="line-separator"> <td><a href="#">Cigna Enrollment Form</a> <br> Approved 4/6/2010 </td> </tr></table></div>';
		var ApprovalNeededData = '<br><div style="background-color:#EAEAEA; height:200px; width:100%;"> Some Content</div>';

		switch(reldata) {
			case 'My-Forms': $('div.Widget-FormManager-Wrapper').html(MyFormsData); break;
			case 'Approval-Needed': $('div.Widget-FormManager-Wrapper').html(ApprovalNeededData); break;
			default: break;
		}
		return false;
	});
}

$(document).ready(function() {
	widgetInitFormManager();
	widgetInitNewsEvents();
});
