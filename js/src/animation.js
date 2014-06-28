/**
 * More better animation!
 */
$(function(){

	var config = {
		duration: 0.85,
		distance: window.outerWidth < 700 ? '30%' : '20%',
		ease: Circ
	}

	var timeline = new TimelineMax( { repeat: -1 });

	timeline.to( $('.anim.amic'), config.duration / 4, { left: '5px', repeat:1, yoyo:true, ease:config.ease.easeOut } )
		.to( $('.anim.able'), config.duration, { left: config.distance, ease:config.ease.easeOut, repeat:1, yoyo:true }, 0 )		
		.to( $('.anim.amic'), config.duration / 4, { left: '-5px', repeat:1, yoyo:true, ease:config.ease.easeOut }, config.duration * 2 )
		.to( $('.anim.dyn'), config.duration, { left: '-' + config.distance, ease:config.ease.easeOut, repeat:1, yoyo:true }, config.duration * 2 );
});