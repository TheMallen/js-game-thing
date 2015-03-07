// allow asynch inclusion
var MallenGame = MallenGame || {};


MallenGame.KeyPoller = (function(){
	var _keys = new Array(256);	
	/**
	 * Called whenever a key is pressed, flag it as down
	 */
	var _handleKeyDown = function(e){
		_keys[e.keyCode] = true;
	}
	
	/**
	 * Called whenever a key is unpressed, flag it as up
	 */
	var _handleKeyUp = function(e){
		_keys[e.keyCode] = false;
	}
	
	/**
	 * add event listeners to power the key polling
	 */	
	var init = function(){
		//bind our input polling
		window.addEventListener('keydown',_handleKeyDown);
		window.addEventListener('keyup',_handleKeyUp);
	}
	
	/**
	 *return true if the keycode is down and false if it is not 
	 */
	var poll = function(keyCode){
		if(_keys[keyCode]){
			return true;
		}
		else{
			return false;
		}
	}	
	/**
	 *Expose poll and init 
	 */
	return {
		"poll" : poll,
		"init" : init
	};
	
})(); //end keypoller module