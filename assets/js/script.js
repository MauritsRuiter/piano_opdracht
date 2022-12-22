document.getElementById("c").onclick = function(){ // als op de c-toets wordt geklikt
	var c_toets = document.getElementById("audio_c"); // zoek het c-toets audio-element op
	c_toets.play();
	console.log("nigga"); // speel het audio-element af
}

document.getElementById("d").onclick = function(){
	var d_toets = document.getElementById("audio_d");
	d_toets.play();
}

document.getElementById("e").onclick = function(){
	var e_toets = document.getElementById("audio_e");
	e_toets.play();
}

document.getElementById("bruh").onclick = function(){
	var bruh_toets = document.getElementById("audio_bruh");
	bruh_toets.play();
	console.log("koekmok")
}

document.getElementById("nah").onclick = function(){
	var nah_toets = document.getElementById("audio_nah");
	nah_toets.play();
}

document.getElementById("oop").onclick = function(){
	var oop_toets = document.getElementById("audio_oop");
	oop_toets.play();
}

document.getElementById("auw").onclick = function(){
	var auw_toets = document.getElementById("audio_auw");
	auw_toets.play();
}