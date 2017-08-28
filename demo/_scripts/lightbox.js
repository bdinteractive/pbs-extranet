/*
* Lightbox Widgets - Widgets needs to be dynamically targeted. This is only the presentation layer.
*/


function showLigthBoxBlocker() {
	$('body').append('<div id="lightbox-blocker-xyz"></div>');
	var h = $(document).height();
	$('#lightbox-blocker-xyz').css({display:'block',position:'absolute', top:'0px', left:'0px', height:h+'px', width:'100%',zIndex:'100'});
	$('#lightbox-blocker-xyz').css({backgroundColor:'#000',opacity:0.03});
}

function hideLigthBoxBlocker() { $('#lightbox-blocker-xyz').remove(); }



function initLightBoxCommentDialog() {

	/* make the div element editable */
	$('#lightbox-comment div.cbar div.cbar-comment div.content').attr('contentEditable', true);


	$('#lightbox-comment div.cbar div.cbar-comment').jScrollPane({
		verticalDragMinHeight:23,
		verticalDragMaxHeight:23,
		autoReinitialise: true,
		autoReinitialiseDelay: 250
	});


	$('#lightbox-comment div.tbar > a.close').click(function() {
		$('#lightbox-comment').css({display:'none'});
		hideLigthBoxBlocker();
		return false;
	});


	/*
	* needed only to be able to transfer the focus of the cursor to the edit box
	* when it is empty because when the edit box is empty its height is only one
	* line (unknown to user) and clicking below the line will not transfer the focus
	* to the edit box making the user think the edit box is not responding.
	*/
	$('#lightbox-comment div.cbar div.cbar-comment').click(function(){
		$(this).find('div.content').focus();
	});

	$('#lightbox-comment div.fbar a').click(function() {
		alert('comment posting not functional, demo only');
		return false;
	});

	$('div.Comment-ReplyQuote a.reply').click(function() {
		showLigthBoxBlocker();
		$('#lightbox-comment').css({display:'block'});
		return false;
	});

}





function initLightBoxQuoteDialog() {

	/* make the div element editable */
	$('#lightbox-quote div.cbar div.cbar-comment div.content').attr('contentEditable', true);

	$('#lightbox-quote div.cbar div.cbar-quote').jScrollPane({
		verticalDragMinHeight:23,
		verticalDragMaxHeight:23,
		verticalGutter:24,
		autoReinitialise:true,
		autoReinitialiseDelay:250
	});

	$('#lightbox-quote div.cbar div.cbar-comment').jScrollPane({
		verticalDragMinHeight:23,
		verticalDragMaxHeight:23,
		verticalGutter:4,
		autoReinitialise:true,
		autoReinitialiseDelay:250
	});

	/*
	* needed only to be able to transfer the focus of the cursor to the edit box
	* when it is empty because when the edit box is empty its height is only one
	* line (unknown to user) and clicking below the line will not transfer the focus
	* to the edit box making the user think the edit box is not responding.
	*/
	$('#lightbox-quote div.cbar div.cbar-comment').click(function(){
		$(this).find('div.content').focus();
	});


	$('#lightbox-quote div.tbar > a.close').click(function() {
		$('#lightbox-quote').css({display:'none'});
		hideLigthBoxBlocker();
		return false;
	});
	
	$('#lightbox-quote div.fbar a').click(function() {
		alert('comment on quote posting not functional, demo only');
		return false;
	});

	$('div.Comment-ReplyQuote a.quote').click(function() {
		showLigthBoxBlocker();
		$('#lightbox-quote').css({display:'block'});
		return false;
	});

}


function initLightBoxVideo() {


	$('#lightbox-video-player div.tbar > a.close').click(function() {
		$('#lightbox-video-player').css({display:'none'});
		hideLigthBoxBlocker();
		return false;
	});

 /* #Right-Image-Widget div.right-text-widget */

	$('#Post-Thread-Content-TextArea a.video-on').click(function() {
		showLigthBoxBlocker();
		$('#lightbox-video-player').css({display:'block'});
		return false;
	});
	
	$('div.right-text-widget a.video-on, div.playbutton').click(function() {
		showLigthBoxBlocker();
		$('#lightbox-video-player').css({display:'block'});
		return false;
	});


}






function initShowContent() {

	
	$('#lightbox-show-content div.tbar > a.close').click(function() {
		$('#lightbox-show-content').css({display:'none'});
		hideLigthBoxBlocker();
		return false;
	});


	$('a.ShowContent').click(function() {
		showLigthBoxBlocker();
		$('#lightbox-show-content').css({display:'block'});
		return false;
	});

}




function initLightBoxAlertWindow(){
	
	$('#lightbox-alert-window div.tbar > a.close').click(function() {
		$('#lightbox-alert-window').css({display:'none'});
		hideLigthBoxBlocker();
		return false;
	});
	
	
	$('.Alert_impt div.show_importanticon').click(function() {
		showLigthBoxBlocker();
		$('#lightbox-alert-window').css({display:'block'});
		return false;
	});			
	

}


function initLightBoxAlertWindow_nav(){
	
	$('#lightbox-alert-window div.tbar > a.close').click(function() {
		$('#lightbox-alert-window').css({display:'none'});
	/*	hideLigthBoxBlocker();*/
		return false;
	});
	
	
	$('ul#mnutier1 a.tier1-mnuitem').click(function() {
/*		showLigthBoxBlocker();*/
		$('#lightbox-alert-window').css({display:'block'});
		return false;
	});			
	

}




$(document).ready(function() {
	initLightBoxAlertWindow_nav();					   
	initLightBoxAlertWindow();
	initLightBoxCommentDialog();
	initLightBoxQuoteDialog();
	initLightBoxVideo();
	initShowContent();	
});

