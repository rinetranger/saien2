;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-aside, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
		});

	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};

	var changeImage=function(){
		const aa=document.getElementById("work001");
		const bb=document.getElementById("work002");
		const cc=document.getElementById("work003");
		const dd=document.getElementById("work004");
		const ee=document.getElementById("work005");
		const ff=document.getElementById("work006");
		const gg=document.getElementById("work007");
		const hh=document.getElementById("work008");
		if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
			const aa=document.getElementById("work001");
			aa.id="work101"
		  } else {
			aa.id="work001"
			
		  }
		  
		if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
			const bb=document.getElementById("work002");
			bb.id="work102";
			
		  } else {
			bb.id="work002";
		  }
		  
		if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
			const cc=document.getElementById("work003");
			cc.id="work103"
		  } else {
			cc.id="work003"
		  }
		 
		if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
			const dd=document.getElementById("work004");
			dd.id="work104"
			
		  } else {
			dd.id="work004"
		  }
		  
		if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
			const ee=document.getElementById("work005");
			ee.id="work105"
		  } else {
			ee.id="work005"
		  }
		  
		if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
			const ff=document.getElementById("work006");
			ff.id="work106"
		  } else {
			ff.id="work006"
		  }
		  
		if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
			const gg=document.getElementById("work007");
			gg.id="work107"
		  } else {
			gg.id="work007"
		  }
		  
		if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
			const hh=document.getElementById("work008");
			hh.id="work108"
		  } else {
			hh.id="work008"
		  }
		  
	}

	// Document on load.
	$(function(){
		fullHeight();
		contentWayPoint();
		burgerMenu();
		mobileMenuOutsideClick();
		sliderMain();
		changeImage();
	});


}());



