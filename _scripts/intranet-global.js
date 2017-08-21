
function openSocialWindow(arg){
	var width = arg.width;
	var height = arg.height;
	var loc = arg.loc;
	var name = arg.name;
	name = encodeURIComponent(name);
	var url = arg.url+'?'+name;
	var specs = 'width='+width+',height='+height;
	window.open(url,'',specs);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function() {
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
		primarySlideMenuTimer();

		function primarySlideMenu(){
			window.clearTimeout(menuSlide);
			$('.primary-slide-menu-wrapper').toggleClass('close open');
			$('.js-primary-side-menu .pbs-icon-menu, .js-primary-side-menu .pbs-icon-menu-open').toggleClass('pbs-icon-menu pbs-icon-menu-open');
		}

		$('.js-primary-side-menu').on('click', function(){
			window.clearTimeout(menuSlide);
			primarySlideMenu();
		});
		$('.primary-slide-menu-wrapper').on('mouseenter', function(){
			window.clearTimeout(menuSlide);
		});
		$('.primary-slide-menu-wrapper').on('mouseleave', function(){
			primarySlideMenuTimer();
		});


		$('.widget-primary-accordion h5').click(function(){
			$(this).next('ul').toggle().toggleClass('open');
			$(this).find('i').toggleClass('pbs-icon-accordion pbs-icon-accordion-open');
		})

		$('.widget-accordion-list li').click(function(){
			console.log('Clicked');
			$(this).next('li').toggle();
		});

		if(getParameterByName('callouts') == 'hide'){
			$('#menu-dropdown-02 .promo-vert-list').hide();
		}
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
	};

	$('.pbs-widget h5 i').on('click', function(e){
		var myParent = $(this).parent().parent();
		$(myParent).find('ul').toggle();
		$(this).parent().toggleClass('closed');
		$(this).toggleClass('pbs-icon-keyboard-arrow-down').toggleClass('pbs-icon-keyboard-arrow-up');
	})


});




