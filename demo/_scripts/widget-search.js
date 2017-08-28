
$(document).ready(function() {
	initFacetedSearchWidget();
});

function initFacetedSearchWidget() {

	/* unified scrollbar initialization for the widget */
	$('#wdgtFacetedSearch li.item div.box div.viewport').jScrollPane({
		verticalDragMinHeight:23, verticalDragMaxHeight:23
	});

	/* setup click events for each "A" links in the lists */
	$('#wdgtFacetedSearch li.item div.box div.viewport ul.list-box li > a').click(function() {
		var label = $(this).attr('optval') || '';
		if(label == '') return false;
		
		var p_ele = $(this).closest('div.box');
		$(p_ele).slideUp(125);

		var alink = $('<a> </a>');
		$(alink).addClass('item-filter').html('<input type="checkbox" checked="checked"> '+label);
		$(alink).data('p-element',p_ele);
		
		$('#wdgtFacetedSearch li.filter div.box').append(alink);

		return false;
	});
	
	function searchPresets() {
		//$('#resultsPerPageSearch,#sortBySearch').hide();
		//$('#resultsPerPageSearch a.preset,#sortBySearch a.preset').trigger('click');
	}
	//searchPresets();
	
	/* setup click events for each "A" links on the filtered by listing */
	$('#wdgtFacetedSearch li.filter div.box a').live('click',function(){
		var p_ele = $(this).data('p-element'); /* retrieve the stored parent element */
		$(this).remove(); /* remove the clicked "A" element from the filtered by listing */
		$(p_ele).slideDown(100); /* show the listing of option filters */
	});

	/* initialization for the text boxes on the post date range */
	$('#wdgtFacetedSearch li.item div.box div.post-daterange input').each(function(index) {

		$(this).val($(this).attr('default-value')); /* setup default text value */

		$(this).bind('focus', function() {
			var defval = ($.trim($(this).attr('default-value'))).toLowerCase();
			var curval = ($.trim($(this).val())).toLowerCase();
			if(defval == curval) { $(this).val(''); }
		}).bind('blur', function() {
			if($.trim($(this).val()) == '') { $(this).val($(this).attr('default-value')); }
		});
	});
	
	/* apply filter button click */
	$('#wdgtFacetedSearch li.item div.box div.post-daterange a').click(function() {
		var attrFr = $('#wdgtFacetedSearch li.item div.box div.post-daterange input.daterange-from').attr('default-value');
		var attrTo = $('#wdgtFacetedSearch li.item div.box div.post-daterange input.daterange-to').attr('default-value');
		var dtFr = $.trim($('#wdgtFacetedSearch li.item div.box div.post-daterange input.daterange-from').val());
		var dtTo = $.trim($('#wdgtFacetedSearch li.item div.box div.post-daterange input.daterange-to').val());
		
		/* before proceeding, let's make sure that text boxes are not empty (default value included) */
		attrFr = attrFr.toLowerCase();
		attrTo = attrTo.toLowerCase();
		if(attrFr == dtFr.toLowerCase() || dtFr == '') {
			$('#wdgtFacetedSearch li.item div.box div.post-daterange input.daterange-from').focus();
			return false;
		}
		if(attrTo == dtTo.toLowerCase() || dtTo == '') {
			$('#wdgtFacetedSearch li.item div.box div.post-daterange input.daterange-to').focus();
			return false;
		}
		
		/* optionally, date values can be validated here */
		var label = $(this).attr('optval') + dtFr + ' - ' + dtTo;
		var p_ele = $(this).closest('div.box');
		$(p_ele).slideUp(125);

		var alink = $('<a> </a>');
		$(alink).addClass('item-filter').html('<input type="checkbox" checked="checked"> '+label);
		$(alink).data('p-element',p_ele);
		
		$('#wdgtFacetedSearch li.filter div.box').append(alink);
		return false;
	});
}