/**
 * Manage work sample interaction
 */
$(function(){

	$('.work-samples').isotope({
		itemSelector:'.work-sample',
		layoutMode:'masonry'
	});

	$('.work-sample-title, .work-sample-image').on('click', function(){
		var $ws = $(this).closest('.work-sample');
		if( ! $ws.hasClass('expanded') ) {
			ga( 'send', 'event', 'interaction', 'expand work sample', $ws.find( '.work-sample-title' ).text(), {'nonInteraction': 1} );
			$ws.addClass('expanded');
			$('.work-samples').isotope('layout');
			e.stopPropagation();
		}
	});

	$('.work-sample-menu-close, .work-sample-image').on('click', function(e){
		var $ws = $(this).closest('.work-sample');
		if( $ws.hasClass('expanded') ){
			$ws.removeClass('expanded');
			e.stopPropagation();
			$('.work-samples').isotope('layout');		
		}
	});

	$('.work-sample-menu-visit').on('click', function(){
		ga( 'send', 'event', 'links', 'click', $(this).attr('href'), {'nonInteraction': 1} );	
	});



});