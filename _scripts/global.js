function openSocialWindow(arg){
	var width = arg.width;
	var height = arg.height;
	var loc = arg.loc;
	var name = arg.name;
	name = encodeURIComponent(name);
	var url = arg.url+'?'+name;
	var specs = 'width=976,height=625';
	window.open(url,'',specs);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function() {
	$('ul.secondaryMenu .people').click(function(){
		$('ul.secondaryMenu .people').css('background-position','0 -16px');
		$('ul.secondaryMenu .all').css('background-position','-34px 0');
	});
	$('ul.secondaryMenu .all').click(function(){
		$('ul.secondaryMenu .people').css('background-position','0 0');
		$('ul.secondaryMenu .all').css('background-position','-34px -16px');
	});
	
	/*$('#dockBottom').Fisheye({
		maxWidth: 60,
		items: 'a',
		itemsText: 'span',
		container: '.dock-containerBottom',
		itemWidth: 60,
		proximity: 80,
		alignment : 'left',
		valign: 'bottom',
		halign : 'center'
	});*/

	$('.js-as-more').on('click',function(e){
		e.preventDefault();
		$(this).parents('.activity-post').find('.as-more').eq(0).toggle();
		$(this).text(function(i, text){
        	return text === "More" ? "Less" : "More";
    	});
	});

	$('.activity-show-comments a').on('click',function(e){
		e.preventDefault();
		$(this).parent().next('.activity-comments-collapse').show();
		$(this).parent().hide();
	});

	$('.activity-hide-comments a').on('click',function(e){
		e.preventDefault();
		$(this).parent().parent().prev('.activity-show-comments').show();
		$(this).parent().parent().hide();
	});






	$('.notice img').attr('src', '_images/icon_noticeActive.png');
	$('#alertCloseBtn, .notice').click(function(){
		//console.log('Close Button was clicked');
		$('#headerAlertMessage').toggle();
		return false;
	});
	$('#headerAlertMessage div.box div.viewport').jScrollPane({
		verticalDragMinHeight: 23, verticalDragMaxHeight: 23
	});
	$('ul.secondaryMenu .people').click(function(){
		$('ul.secondaryMenu .people').css('background-position','0 -16px');
		$('ul.secondaryMenu .all').css('background-position','-34px 0');
	});
	$('ul.secondaryMenu .all').click(function(){
		$('ul.secondaryMenu .people').css('background-position','0 0');
		$('ul.secondaryMenu .all').css('background-position','-34px -16px');
	});
	/*
	$('#login-container').animate({
		marginTop: '0'
	}, 2000 );
	*/
	$('#username').focus(function(){
		if($('#username').val() == 'Username'){
			$('#username').val('');
		}
	}).blur(function(){
		if($('#username').val() == ''){
			$('#username').val('Username');
		}
	});
	$('#passwordT').focus(function(){
		$('#passwordT').addClass('hide');
		$('#password').removeClass('hide').focus();
	});
	$('#password').blur(function(){
		if($('#password').val() == ''){
			$('#password').addClass('hide');
			$('#passwordT').removeClass('hide');
		}
	});





	if($('#pbs-menu-version-four').length){ 






		function primarySlideMenuTimer(){
			window.menuSlide = setTimeout(function(){
				primarySlideMenu();
			}, 2500);
		}
		//primarySlideMenuTimer();




		function primarySlideMenu(){
			//window.clearTimeout(menuSlide);
			$('.primary-slide-menu-wrapper').toggleClass('psmw-close psmw-open');
			$('.js-primary-side-menu .pbs-icon-menu, .js-primary-side-menu .pbs-icon-menu-open').toggleClass('pbs-icon-menu pbs-icon-menu-open');
		}




		$('.js-primary-side-menu').on('click', function(){
			//window.clearTimeout(menuSlide);
			primarySlideMenu();
		});
		$('.primary-slide-menu-wrapper').on('mouseenter', function(){
			//window.clearTimeout(menuSlide);
		});
		$('.primary-slide-menu-wrapper').on('mouseleave', function(){
			//primarySlideMenuTimer();
		});




		/* Accordion Widgets */
		if($('.widget-primary-accordion')){
			$('.widget-primary-accordion h5').click(function(){
				$(this).next('ul').toggle().toggleClass('open');
				$(this).find('i').toggleClass('open');
			});
			/*$('.widget-primary-accordion').hover(function(){
				$(this).find('h5 a').toggle();
			});*/
		}

		$('.widget-content-accordion h5').click(function(){
			$(this).next('.accordian-content').toggle().toggleClass('open');
			$(this).find('i').toggleClass('pbs-icon-accordion pbs-icon-accordion-open');
		});
		$('.widget-accordion-list li').click(function(){
			$(this).next('li').toggle();
		});




		if(getParameterByName('callouts') == 'hide'){
			$('#menu-dropdown-02 .promo-vert-list').hide();
		}




		// Activates menus based on click of that menu
		$('.menu-item').on('click', function(e){

			e.stopImmediatePropagation();

			$('.menu-item').find('div:first').hide();
			$('.menu-item').removeClass('active');

			$(this).addClass('active');
			$(this).find('div:first').show();

			var dropdownRightMenuHeight = $(this).find('.drop-down-right-menu').eq(0).innerHeight();
			var menuItemHeight = $(this).find('.drop-down-left-menu-list').eq(0).innerHeight();

			if(dropdownRightMenuHeight < menuItemHeight){
				$(this).find('.drop-down-right-menu').eq(0).height(menuItemHeight+'px');
			}else if(dropdownRightMenuHeight > menuItemHeight){
				$(this).find('.drop-down-left-menu-list').eq(0).height(menuItemHeight+'px');
			}
		});



		// Hover to display Dropdown menu item to Right Content
		$('.menu-item .drop-down-left-menu-list a').on('click', function(){
			var menuIndex = $(this).parent().index();
			$(this).parent().parent().find('li').removeClass('active');
			$(this).parent().addClass('active');
			console.log(menuIndex);


			var thisMenu = $(this).parent().parent().parent().parent();

			console.log(thisMenu);

			$('.drop-down-right-menu').hide();
			thisMenu.find('.drop-down-right-menu').eq(menuIndex).show();

			var dropdownRightMenuHeight = thisMenu.find('.drop-down-right-menu').eq(menuIndex).innerHeight();
			var menuItemHeight = thisMenu.find('.drop-down-left-menu-list').innerHeight();

			console.log('Right:'+dropdownRightMenuHeight+' | Left:'+menuItemHeight);

			if(dropdownRightMenuHeight < menuItemHeight){
				thisMenu.find('.drop-down-right-menu').eq(menuIndex).height(menuItemHeight+'px');
				console.log('adjusting right...');
			}else if(dropdownRightMenuHeight > menuItemHeight){
				thisMenu.find('.drop-down-left-menu-list').eq(menuIndex).height(menuItemHeight+'px');
				console.log('adjusting left...');
			}
		});


		// Sets Drop Down Menu Right Content Active
		$('.menu-item').on('mouseenter', function(){

			$(this).find('.drop-down-left-menu-list ul li').removeClass('active');
			$(this).find('.drop-down-left-menu-list ul li').eq(0).addClass('active');
			$(this).find('.drop-down-right-menu').hide();
			$(this).find('.drop-down-right-menu').eq(0).show();

			var dropdownRightMenuHeight = $(this).find('.drop-down-right-menu').eq(0).innerHeight();
			var menuItemHeight = $(this).find('.drop-down-left-menu-list').eq(0).innerHeight();

			if(dropdownRightMenuHeight < menuItemHeight){
				$(this).find('.drop-down-right-menu').eq(0).height(menuItemHeight+'px');
			}else if(dropdownRightMenuHeight > menuItemHeight){
				$(this).find('.drop-down-left-menu-list').eq(0).height(menuItemHeight+'px');
			}
		});


		// Hides menu when page is clicked
		$(document).on('click', function(e) {
			$('.menu-item').find('div:first').hide();
			$('.menu-item').removeClass('active');
		});



	}; /* END #pbs-menu-version-four */

	$('.pbs-widget h5 i').on('click', function(e){
		var myParent = $(this).parent().parent();
		$(myParent).find('ul').toggle();
		$(this).parent().toggleClass('closed');
		$(this).toggleClass('pbs-icon-keyboard-arrow-down').toggleClass('pbs-icon-keyboard-arrow-up');
	});


	/* PBS JS Widget Category Expose 
		- This widget uses a list of links to hide/show
			sections of content in the content area
		- Example - faq.shtml and Conf. Agenda
	*/
	if($('.js-pbs-category-expose').length > 0){
		$('.js-pbs-category-expose a').on('click', function(e){
			e.preventDefault();
			var contentSection = $(this).data('category');
			$('.js-pbs-category-expose a').removeClass('active');
			$(this).addClass('active');
			$('.js-pbs-content-expose').hide();
			$('#'+contentSection).show();
		});
	};


	/* PBS JS Widget Category Expose 
		- This widget uses a list of links to hide/show
			sections of content in the content area
		- Example - faq.shtml and Conf. Agenda
	*/
	if($('#conf-navigation').length > 0){
		$('#conf-navigation a').on('click', function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');

		});
	};


	/* PBS JS Widget Category Expose 
		- This widget uses a list of links to hide/show
			sections of content in the content area
		- Example - faq.shtml and Conf. Agenda
	*/
	if($('#portal-navigation').length > 0){
		$('#portal-navigation a').on('click', function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');

		});
	};


	/* PBS JS Widget Expand
		- This widget expands and contracts
		- Example - pfr
	*/
	if($('.js-restricted-parent').length > 0){
		$('.js-restricted-parent').parent().find('.js-restricted').on('click', function(e){
			e.preventDefault();
			var _this = $(this);
			var _parent = _this.parent().find('.js-restricted-parent');
			_parent.toggleClass('open');
			$(this).text(function(i, text){
	        	return text === "more" ? "less" : "more";
	    	});
		});
	};





	/* PBS Sticky Nav
		- This makes a nav bar stick to top when scrolling
		- Example - conference.shtml
	*/

	// grab the initial top offset of the navigation

	if($('.conf-navigation').length){
	   	var stickyNavTop = $('.conf-navigation').offset().top;
	   	var stickyNav = function(){
		    var scrollTop = $(window).scrollTop();
		    if (scrollTop > stickyNavTop) { 
		        $('.conf-navigation').addClass('sticky');
		    } else {
		        $('.conf-navigation').removeClass('sticky'); 
		    }
		};
		stickyNav();
		$(window).scroll(function() {
			stickyNav();
		});
	}


	/* PBS Sticky Nav
		- This makes a nav bar stick to top when scrolling
		- Example - conference.shtml
	*/

	// grab the initial top offset of the navigation

	if($('.kids-portal-navigation').length){
	   	var stickyNavTop = $('.kids-portal-navigation').offset().top;
	   	var stickyNav = function(){
		    var scrollTop = $(window).scrollTop();
		    if (scrollTop > stickyNavTop) { 
		        $('.kids-portal-navigation').addClass('sticky');
		    } else {
		        $('.kids-portal-navigation').removeClass('sticky'); 
		    }
		};
		stickyNav();
		$(window).scroll(function() {
			stickyNav();
		});
	}




	if($('.js-conf-agenda-nav').length >= 1){
		console.log('js-conf-agenda-nav detected');

		var confNav = $('.conf-agenda-nav > ul');
		var confNavLinks = $('.conf-agenda-nav > ul li').length;
		var listItems = $('.conf-agenda-nav > ul').find("li");
		console.log(confNavLinks);

		var linksWidth = 0;

		for(i=0; i<confNavLinks; i++){
			console.log(listItems[i]);
			var width = $(listItems[i]).width() + 5;
			console.log(width);
			linksWidth += width;
		}
		console.log('Links Width= '+linksWidth);

		if(linksWidth >= 930){
			$('.js-arrows').show();
			$('.conf-agenda-nav > ul').width(linksWidth).addClass('overflow');
		}

		var offset = 930 - linksWidth;
		console.log('Offset= '+offset);

		$('.js-arrows.right-arrow').click(function(){
			console.log($('.conf-agenda-nav > ul').position().left);
			if($('.conf-agenda-nav > ul').position().left > offset ){
				$('.conf-agenda-nav > ul').animate({ "left": "-=50px" }, "fast" );
			}
		});
		$('.js-arrows.left-arrow').click(function(){
			console.log($('.conf-agenda-nav > ul').position().left);
			if($('.conf-agenda-nav > ul').position().left < 0){
				$('.conf-agenda-nav > ul').animate({ "left": "+=50px" }, "fast" );
			}
		});
	}




});



