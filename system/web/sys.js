	// system object

if(window.Ravel.isLoaded) {

	sys = {

		// detecting which one browser user is using
			browser: {
				name: function() {
					user_agent = window;

					if(typeof user_agent.msAnimationStartTime != "undefined") {
						return "Internet Explorer";
					} else if(user_agent.navigator.vendor.indexOf("Google")  >= 0) {
						return "Google Chrome";
					} else if(user_agent.navigator.vendor.indexOf("Opera") >= 0) {
						return "Opera";
					} else if(user_agent.navigator.mozId != "") { 
						return "Mozzila Firefox";
					} 

				},
			},

			
			server: {
				host: window.location.host,
				hostname: window.location.hostname,
				url: window.location.href,
				origin: window.location.origin,
				path: window.location.pathname,
				port: window.location.port,
				protocol: window.location.protocol,
			},			

			// printing results into console log
			log: function( log ) {
				console.log(log);
			},

			lang: window.navigator.language,
			os: window.navigator.platform,
			maxTouches: window.navigator.maxTouchPoints,
			plugins: window.navigator.plugins,
			online: window.navigator.onLine,
			cookieEnabled: window.navigator.cookieEnabled,

			

		}


// define global var, function or object
function define( var_name, var_content ) {
	window.Ravel.defined.push([var_name, var_content]);
}

// call defined global var, function or object	
function pull( var_name ) {
	defined = window.Ravel.defined;

	for(var i = 0; i < defined.length; i++) {
   		if(defined[i][0] === var_name) {
    		 return defined[i][1];
   		}
	}
}


// store all ravel informations in " info " variable
info = window.Ravel;


} else {
	throw new Error("Ravel is not loaded!");
}


