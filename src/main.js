/* Global Scope */
;(function() {
	'use strict';
	var s3sync = {};	

	/* Handle rendering in the browser */
	if(typeof module !== 'undefined' && module.exports) {
		module.exports = s3sync;
	} else {
		window.s3sync = s3sync;
	}
})();
