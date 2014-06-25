/**
 * Manage work sample interaction
 */
$(function(){

	$('.work-sample').on('touchstart', function(){
		$(this).addClass('opaque');
	});

	$('.work-sample').on('touchend', function(){
		$(this).removeClass('opaque');
	});

	$('.work-sample').on('click', function(){
		if( ! $(this).hasClass('expanded') ) {
			ga( 'send', 'event', 'interaction', 'expand work sample', $(this).find( '.work-sample-title' ).text(), {'nonInteraction': 1} );
			$(this).addClass('expanded');
		}
	});

	$('.work-sample-menu-close').on('click', function(e){
		$(this).closest('.work-sample').removeClass('expanded');
		e.stopPropagation();
	});

	$('.work-sample-menu-visit').on('click', function(){
		ga( 'send', 'event', 'links', 'click', $(this).attr('href'), {'nonInteraction': 1} );	
	});

});