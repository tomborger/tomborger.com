/**
 * Manage work sample interaction
 */
$(function(){

	var ws = {

		// Bool: is a work sample currently selected?
		active: false,

		// Natural positioning of the selected work sample
		origTop: null,
		origLeft: null,
		origWidth: null,

		// Prefab CSS values to position work sample directly over selected frame
		getDetachedStyles: function(){

			var _this = this;

			return {
				'top': _this.origTop + 'px',
				'left': _this.origLeft + 'px',
				'width': _this.origWidth + 'px'
			}

		},

		resetDetachedStyles: function(){
			return {
				'top': '',
				'left': '',
				'width': ''
			}
		},

		// Activate a work sample
		activate: function( $frame ){

			// Disable scrolling of #work contents, and (more importantly) reset 
			// scrollTop to its original value so even if it glitches, it rights
			// itself quickly.
			var workScrollTop = $('#work').scrollTop();
			$('#work').on('scroll', function(){
				$(this).scrollTop( workScrollTop );
			});

			var _this = this;

			this.active = true;
			this.$frame = $frame;
			this.origTop = this.$frame.offset().top;
			this.origLeft = this.$frame.offset().left;
			this.origWidth = this.$frame.width();

			// Find the work sample inside the list item
			this.$sample = this.$frame.find('.work-sample');

			// Position sample outside of flow while the list is hidden
			this.$sample.css( this.getDetachedStyles() ).addClass( 'highlighting' );

			// Hide work samples
			setTimeout( function(){
				$( 'body' ).addClass( 'work-sample-active' );
			}, 0 );

			// Transition sample from original position to highlighted position
			// Delayed until after list transition
			setTimeout( function(){
				_this.$sample.addClass( 'highlighted' ).removeClass( 'highlighting' ).css( _this.resetDetachedStyles() );
			}, 50 );

		},
		deactivate: function(){

			var _this = this;

			// Show work samples
			$( 'body' ).removeClass( 'work-sample-active' );

			setTimeout( function(){
				// Return sample to original position
				_this.$sample.css( _this.getDetachedStyles() ).removeClass( 'highlighted' ).addClass('obscuring');
			}, 0 );

			setTimeout( function(){

				_this.$sample.removeClass('obscuring').css( _this.resetDetachedStyles() );
				
				// All scrolling on #work again
				$('#work').off('scroll');

			}, 300 );

			// Reset object
			this.active = false;

		},
		init: function(){

			var _this = this;

			$( '.work-sample-item' ).on( 'click', function(){ 
				if( ! _this.active ){
					_this.activate( $(this) );
				}
			});

			$( '.back-button' ).on( 'click', function(){
				if( _this.active ){
					_this.deactivate();
				}
			});
		}
	}

	ws.init();

});