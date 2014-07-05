/**
 * Manage work sample interaction
 */
$(document).ready( function(){
	$('.work-samples').isotope({
		itemSelector:'.work-sample',
		layoutMode:'masonry'
	});
});

$(window).on( 'load', function(){
	$('.work-samples').isotope('layout');
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
	var top, $ws = $(this).closest('.work-sample');
	if( $ws.hasClass('expanded') ){
		$ws.removeClass('expanded');
		e.stopPropagation();
		$('.work-samples').isotope('layout');		
		top = $ws.position().top;
		TweenMax.to( $('#work'), 0.75, { scrollTop: top, ease:Expo.easeOut } );
	}
});

$('.work-sample-menu-visit').on('click', function(){
	ga( 'send', 'event', 'links', 'click', $(this).attr('href'), {'nonInteraction': 1} );	
});

$('.work-sample-filter').on('change', function(){
	var filter = $(this).val();
  $('.work-samples').isotope({
      filter: filter
  });
});