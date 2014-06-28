/**
 * Vertically center content on the homepage
 */
$(function(){

	var vCenterAbout = function(){

		// Wrap in transient div
		$('#about').wrapInner("<div id='_transient'></div>");

		// Get top margin for .about-animation
		var freeSpace = $('#about').height() - $('#_transient').outerHeight();
		if( freeSpace < 1 ) {
			// Content is taller than section!
			return;
		}
		var topMargin = freeSpace / 2;

		// Remove transient div
		$('#_transient').contents().unwrap();

		// Set top margin
		TweenMax.to( $('.about-animation'), 1, { marginTop: topMargin, ease:Back.easeOut } );

	}

	setTimeout( vCenterAbout, 300 );

	// Catch slow loaders
	setTimeout( vCenterAbout, 750 );
	setTimeout( vCenterAbout, 1500 );

	// Center on resize
	$(window).on( 'resize orientationChange', function(){
		vCenterAbout();
	});

});