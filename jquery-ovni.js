/*!
 * jQuery OVNI - 1.1
 *
 * Copyright Guilherme Girão and other contributors
 * https://github.com/guilhermegirao/jquery-ovni
 */

(function($){
	$.fn.ovni = (speed, trigger = true) => {
		let b = speed, c = trigger;
        
		if ( c ) {
			this.css( { position: 'fixed' } );

			var rh = Math.floor( ($( window ).height() - 30) * Math.random() ); // random height
			var rw = Math.floor( ($( window ).width() - 30) * Math.random() ); // random width

			this.animate({
				top: rh, 
				left: rw
			}, ( b * 650 ), () => {
				$(this).ovni(b, c);
			});
		}
	}
})(jQuery);
