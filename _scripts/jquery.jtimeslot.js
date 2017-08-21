(function( $ ){

	$.fn.jTimeSlot = function(options) {


		/* plugin default values */
		var defaults = {
			padding: 6,
			imagePadding:3,
			width:300 /* default width of the panel */,
			showArrows:true /* show the arrows (default is true) */,
			arrowsWidth:10,
			arrowsHeight:15,
			slideSpeed:250 /* default sliding speed */,
			arrayTime: Array(),
			arrayImageSrc: Array(),
			arrayImageCaption: Array(),
			arrayImageLinkUrl: Array(),
			timePerSlot: 3 /* count of TIME per slot/display */,
			imagePerSlot: 2 /* number of images to show per slot/display */
		}


		options =  $.extend(defaults, options);


		function doShiftLeft($this) {
			var slot = $this.data('dtaJtsSlotLapse');
			var slotsCount = $this.data('dtaJtsSlotMax');
			var timeSlotWidth = $this.data('dtaJtsSlotWidth');
			var imageSlotWidth = $this.data('dtaJtsImageSlotWidth');

			var $timeViewPortContent = $this.find('ul.jtsTimeSlotWrap > li.jtsTimePanel > ul.jtsTimeSlot > li.jtsTimeViewPort > div.content');
			var $imageViewPortContent = $this.find('ul.jtsTimeSlotWrap > li.jtsImagePanel > div.content');

			slot = (slot > 0) ? (slot - 1) : (slotsCount - 1);

			margin_left = 0 - (timeSlotWidth * slot);
			$timeViewPortContent.animate({marginLeft:margin_left}, options.slideSpeed);
			
			margin_left = 0 - (imageSlotWidth * slot);
			$imageViewPortContent.animate({marginLeft:margin_left}, options.slideSpeed);

			$this.data('dtaJtsSlotLapse', slot);
		}


		function doShiftRight($this) {
			var slot = $this.data('dtaJtsSlotLapse');
			var slotsCount = $this.data('dtaJtsSlotMax');
			var timeSlotWidth = $this.data('dtaJtsSlotWidth');
			var imageSlotWidth = $this.data('dtaJtsImageSlotWidth');

			var $timeViewPortContent = $this.find('ul.jtsTimeSlotWrap > li.jtsTimePanel > ul.jtsTimeSlot > li.jtsTimeViewPort > div.content');
			var $imageViewPortContent = $this.find('ul.jtsTimeSlotWrap > li.jtsImagePanel > div.content');

			slot = (slot < (slotsCount - 1)) ? (slot+1) : 0;

			margin_left = 0 - (timeSlotWidth * slot);
			$timeViewPortContent.animate({marginLeft:margin_left}, options.slideSpeed);

			margin_left = 0 - (imageSlotWidth * slot);
			$imageViewPortContent.animate({marginLeft:margin_left}, options.slideSpeed);

			$this.data('dtaJtsSlotLapse', slot);
		}


		function initArrowBindings($this) {
			$arrowLeft = $this.find('> ul.jtsTimeSlotWrap > li > ul.jtsTimeSlot > li.jtsArrow.left > a');
			$arrowRight = $this.find('> ul.jtsTimeSlotWrap > li > ul.jtsTimeSlot > li.jtsArrow.right > a');

			$arrowLeft.bind('click', function() { doShiftLeft($this); return false; });
			$arrowRight.bind('click', function() { doShiftRight($this); return false; });
		}


		function createPanels($this) {
			var html = '<ul class="jtsTimeSlotWrap"><li class="jtsTimePanel"></li><li class="jtsImagePanel"></li></ul>';
			$this.html(html);

			$containerPanel = $this.find('> ul.jtsTimeSlotWrap');
			$timePanel	= $containerPanel.find('> li.jtsTimePanel');
			$imagePanel	= $containerPanel.find('> li.jtsImagePanel');

			html = '<ul class="jtsTimeSlot"><li class="jtsArrow left"><a href="#"></a></li><li class="jtsTimeViewPort"> </li><li class="jtsArrow right"><a href="#"></a></li></ul>';
			$timePanel.html(html);
			
			$timePanel.find('> ul.jtsTimeSlot > li').css({float:'left',display:'block', position:'relative', padding:"0px", margin:"0px", overflow:"hidden"});
			$timePanel.find('> ul.jtsTimeSlot > li.jtsArrow').css({width:options.arrowsWidth + "px", height:options.arrowsHeight + "px"});
			$timePanel.find('> ul.jtsTimeSlot > li.jtsArrow > a').css({position:'relative', display:'block', width:options.arrowsWidth + "px", height:options.arrowsHeight + "px"});


			$timeViewPort = $timePanel.find('> ul.jtsTimeSlot > li.jtsTimeViewPort');
			$timeViewPort.css({width:(options.width - (options.arrowsWidth*2)) + "px"});
			$timeViewPort.html('<div class="content"></div>');
			$timeViewPort.find('> div.content').css({width:'20000em', height:'100%'});

			$imagePanel.css({display:'block', position:'relative', width:'100%', overflow:'hidden'});
			$imagePanel.html('<div class="content"></div>');
			$imagePanel.find('> div.content').css({width:'20000em', height:'100%'});
			
			$containerPanel.css({width: options.width + "px"});

		}


		function createTimeSlots(slots, width, items, $this) {
			$viewPort = $this.find('ul.jtsTimeSlotWrap > li.jtsTimePanel > ul.jtsTimeSlot > li.jtsTimeViewPort');
			$viewPortContent = $this.find('ul.jtsTimeSlotWrap > li.jtsTimePanel > ul.jtsTimeSlot > li.jtsTimeViewPort > div.content');
			var html = '';
			var pad = options.padding;
			var w = ($viewPort.width() - (pad*2));
			var innerWidth = w / options.timePerSlot;
			var ndx = 0;
			for(i = 0; i < slots; i++) {
				innerHtml =  '';
				for(j = 0; j < options.timePerSlot; j++) {
					markerClass = '';
					if(j == 0) { markerClass = ' first '; }
					else if(j == (options.timePerSlot - 1)) { markerClass = ' last '; }
					timeData = (typeof(options.arrayTime[ndx]) === 'undefined') ? '' : options.arrayTime[ndx];
					innerHtml = innerHtml + '<span class="jtsTimeSlotTrackInner '+markerClass+'" style="display:inline-block; width:'+innerWidth+'px;">'+timeData+'</span>';
					ndx = ndx + 1;
				}
				html = html + '<div class="jtsTimeRaceWay" style="width:'+w+'px; padding-left:'+pad+'px; padding-right:'+pad+'px; height:100%;">'+innerHtml+'</div>';
			}
			$viewPortContent.html(html);
		}


		function createImageSlots($this, slots) {
			$viewPort = $this.find('ul.jtsTimeSlotWrap > li.jtsImagePanel');
			$viewPortContent = $viewPort.find('> div.content');
			var trackWidth = $viewPort.width();
			var sectorWidth = (trackWidth / options.imagePerSlot) - (options.imagePerSlot * options.imagePadding);
			var ndx = 0;
			html = '';

			for(i = 0; i < (slots); i++) {
				innerHtml = '';
				for(j = 0; j < (options.imagePerSlot); j++) {
					imgSrc = (typeof(options.arrayImageSrc[ndx]) === 'undefined') ? '' : options.arrayImageSrc[ndx];
					imgCaption = '<span class="jtsImageCaption">'+((typeof(options.arrayImageCaption[ndx]) === 'undefined') ? '' : options.arrayImageCaption[ndx])+'</span>';
					linkUrl = (typeof(options.arrayImageLinkUrl[ndx]) === 'undefined') ? '#' : options.arrayImageLinkUrl[ndx];
					
					if(imgSrc !== '') {
						innerHtml = innerHtml + '<a href="'+linkUrl+'" class="jtsImageSector" style="display:inline-block; position:relative; width:'+sectorWidth+'px;"><img src="'+imgSrc+'" />'+imgCaption+'</a>';
					} else {
						innerHtml = innerHtml + '';
					}
					ndx++;
				}
				//html = html + '<div class="jtsImageTrack" style="display:inline-block; width:'+trackWidth+'px;">'+innerHtml+'</div>';
				// EDITED FOR IE 7 COMPAT (BD)
				html = html + '<div class="jtsImageTrack" style="width:'+trackWidth+'px;">'+innerHtml+'</div>';
			}
			$viewPortContent.html(html);
		}


		/* iterate over the current set of matched elements */
		return this.each(function() {
			var $this = $(this);
			var opt = options;
			var tmeLen = opt.arrayTime.length;
			var imgLen = opt.arrayImageSrc.length;
			var slots = parseInt(tmeLen / opt.timePerSlot);
			slots = slots + (tmeLen % opt.timePerSlot ? 1 : 0);
			var slotWidth = parseInt((opt.width - (opt.arrowsWidth * 2)) / opt.timePerSlot); 


			createPanels($this);
			createTimeSlots(slots, slotWidth, opt.timePerSlot, $this);
			createImageSlots($this, slots);
			initArrowBindings($this);

			$timeViewPort = $this.find('ul.jtsTimeSlotWrap > li.jtsTimePanel > ul.jtsTimeSlot > li.jtsTimeViewPort');
			$imageViewPort = $this.find('ul.jtsTimeSlotWrap > li.jtsImagePanel');
			
			$this.data('dtaJtsSlotLapse', 0);
			$this.data('dtaJtsSlotMax', slots);
			$this.data('dtaJtsSlotWidth', $timeViewPort.width());
			$this.data('dtaJtsImageSlotWidth', $imageViewPort.width());
		});

    }

})( jQuery );