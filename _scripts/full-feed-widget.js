// Full Feed Schedule Carousel
$(document).ready(function(){
	imgSrc = Array("_images/media_library/unavailable_30min.png",
				   "_images/media_library/unavailable_30min.png",
				   "_images/media_library/unavailable_30min.png",
				   "_images/media_library/unavailable_30min.png",
				   "_images/media_library/unavailable_30min.png",
				   "_images/media_library/unavailable_30min.png"
				   );
	imgCaption = Array("Miss Marple and some more words @ 9pm","Poirot Poirot and there is even more lines and text for this @ 9:30 pm","Miss Marple @ 10pm","Poirot @ 10:30 pm","Miss Marple @ 11pm", "Poirot @ 11p:30 pm");
	imgLinkUrl = Array("http://www.google.com/","#","#","#","#");
	tmSlots = Array("9PM", "9:30PM", "10PM", "10PM", "10:30PM", "11PM", "11PM", "11:30PM" , "12:00AM" );

	$('#TimeCarousel').jTimeSlot({
		width:300, arrayTime:tmSlots,
		arrayImageSrc:imgSrc,
		arrayImageCaption:imgCaption,
		arrayImageLinkUrl:imgLinkUrl
	});
});