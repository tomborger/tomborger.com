/**
 * Manage site navigation (sections and nav buttons)
 */
$(function(){

	$('.site-nav-item').hover(

		// Mouseover - expand the alternate view
		function(){
			var $target = $( '#' + $(this).attr('data-target') );
			var halfscreen = $('.active-view').height() / 2;
			if( ! $target.hasClass( 'active-view' ) ){
				$target.css({
					'clip': 'rect(0,10000px,' + halfscreen + 'px,0)',
					'z-index': 3
				});
			}
		},
		// Mouseout - retract the alternate view
		function(){

			var $target = $( '#' + $(this).attr('data-target') );
			if( ! $target.hasClass( 'active-view' ) ){
				$target.css({
					'clip': 'rect(0,10000px,0,0)',
					'z-index': 3
				});
			}
		}
	);

	// If alternate view is clicked, expand alternate view, wait for transition,
	// and make it the active view. 
	$('.site-nav-item').on( 'click touchstart', function(){
		var $target = $( '#' + $(this).attr('data-target') );
		if( ! $target.hasClass( 'active-view' ) ){

			$('.site-nav-item').toggleClass( 'active-nav-item' );

			$target.css({
				'clip':'rect(0,10000px,10000px,0)',
				'z-index': 3
			});

			$('section').toggleClass( 'active-view' );

			setTimeout( function(){
				$target.css({
					'clip':'',
					'z-index':''
				});
			}, 400 );

		}
	});

	// On mobile, show nav buttons
	$('.site-nav-toggle').on( 'click', function(){
		$('.site-header').toggleClass('displayButtons');
	});

	// Update location in URL
	$('.site-nav-item').on('click', function(){
		window.location.hash = $(this).data('target');
	});

	// Listen for hashchange and update view
	window.onhashchange = function(e){
		var location = window.location.hash.substring(1) || 'about';

		$( '#' + location ).addClass('active-view');

		$( 'section:not(#' + location + ')' ).removeClass('active-view');

		$( '.site-nav-item' ).removeClass( 'active-nav-item' ).filter( '.site-nav-item-' + location ).addClass( 'active-nav-item' );

		e.preventDefault();
	};

	// Select correct view on load
	$(document).ready(function(){
		$(window).trigger('hashchange');
	});

});