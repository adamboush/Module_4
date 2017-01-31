
(function(window){
	var speakWord = "Goodbye";

	var gbyeSpeaker = {};

	gbyeSpeaker.speak = function (name){
		 console.log(speakWord + " " + name); 
		} 

	window.gbyeSpeaker = gbyeSpeaker;
	
 })(window);