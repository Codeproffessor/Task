$(document).ready(function() {
	function skillJS() {
		let slider = $('.skillJS__slider');
    function sliderJSOwl() {
			slider.owlCarousel({
				loop: true,
				margin: 25,
				responsiveClass: true,
				loadedClass: 'owl-carousel owl-loaded',
				responsive: {
					0: {
						items: 2,
						nav: false,
						loop: false
					},
					400: {
						items: 2,
						nav: false,
						loop: false
					},
					500: {
						items: 2,
						nav: false,
						loop: false
					},
					600: {
						items: 3,
						nav: false,
						loop: false
					},
					900: {
						items: 4,
						nav: false,
						loop: false
					}
				}
			});
    }
    sliderJSOwl();

		$(document).on('custom:resize', function() {
      sliderJSOwl();
    });

		function lastItemsSlider() {
			let lastItemsActive = $('.owl-stage').find('.active'); 
			let nextSlideNoActive = lastItemsActive.last().next(); 
			for (var i = 0; i < lastItemsActive.length; i++) {
				$(lastItemsActive[i]).removeClass('last-active');
				$(lastItemsActive[i]).removeClass('first-active');
			}
			lastItemsActive.last().addClass('last-active'); 
			lastItemsActive.first().addClass('first-active'); 
			nextSlideNoActive.addClass('last-active');
		}

		slider.on('translate.owl.carousel', function() {
			lastItemsSlider();
		});

		slider.on('resize.owl.carousel', function() {
			lastItemsSlider();
		});

		slider.on('resized.owl.carousel', function() {
			lastItemsSlider();
		});

		slider.on('translated.owl.carousel', function() {
			lastItemsSlider();
		});

		slider.on('drag.owl.carousel', function() {
			lastItemsSlider();
		});

		lastItemsSlider();

		$('.skillJS__item-slider').on('click', function() {
			let itemSlider = $('.skillJS__item-slider');
			for (let i = 0; i < itemSlider.length; i++) {
				$(itemSlider[i]).removeClass('active-skills');
			}
			$(this).addClass('active-skills');
		});
	}
	skillJS();
});
