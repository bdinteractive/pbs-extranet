    $(window).bind("load", function() {
		$("div#headlines-images").slideViewerPro({
			thumbs: 2,
			autoslide: false,
			asTimer: 3500,
			typo: true,
			typoFullOpacity: 0.7,
			galBorderWidth: 1,
			galBorderColor: "#cccccc",
			thumbsBorderOpacity: 1,
			buttonsWidth:15,
			thumbsActiveBorderColor: "cccccc",
			shuffle: false,
			leftButtonInner: "<img src='_images/time_crsl_left.png'/>",
			rightButtonInner: "<img src='_images/time_crsl_right.png'/>",
			thumbsTopMargin: 15,
			thumbsBorderWidth: 0,
			thumbsBorderColor: "#cccccc",
			thumbsRightMargin: 14,
		});
    }); 