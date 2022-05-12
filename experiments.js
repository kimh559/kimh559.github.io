console.log("Hello World")
console.log("The base JS code of this project is credited to Play Sound on Hover on CodePen by Abi Rana.")


/*sound 1*/

var play1Btn = document.getElementById('play1'),
  play2 = document.getElementById('play2'),
  audio1 = document.getElementById('audio1')
	audios = document.querySelectorAll('audio');
console.log(audios);


play1Btn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

play1Btn.addEventListener('mouseleave', function() {
  audio1.pause();
  audio1.currentTime = 0;
}, false);

play2Btn.addEventListener('mouseover', function() {
    audio1.play();
}, false);

play3Btn.addEventListener('mouseleave', function() {
  audio1.pause();
  audio1.currentTime = 0;
}, false);

/*sound 2*/

var play2Btn = document.getElementById('play2'),
  play3Btn = document.getElementById('play3'),
  audio2 = document.getElementById('audio2')
	audios = document.querySelectorAll('audio');
console.log(audios);


play2Btn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

play2Btn.addEventListener('mouseleave', function() {
  audio2.pause();
  audio2.currentTime = 0;
}, false);

play2Btn.addEventListener('mouseover', function() {
    audio2.play();
}, false);

play2Btn.addEventListener('mouseleave', function() {
  audio2.pause();
  audio2.currentTime = 0;
}, false);

/*sound 3*/

var play3Btn = document.getElementById("play3"),
  sound3 = document.getElementById("sound3")
	audios = document.querySelectorAll("audio");
console.log(audios);


play3Btn.addEventListener("mouseover", function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

play3Btn.addEventListener("mouseleave", function() {
  sound3.pause();
  sound3.currentTime = 0;
}, false);

/*sound 4*/

var play4Btn = document.getElementById("play4"),
  sound4 = document.getElementById("sound4")
	audios = document.querySelectorAll("audio");
console.log(audios);

play4Btn.addEventListener("mouseover", function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

play4Btn.addEventListener("mouseleave", function() {
  sound4.pause();
  sound4.currentTime = 0;
}, false);

/*sound 5*/

  var play5Btn = document.getElementById("play5"),
    sound5 = document.getElementById("sound5")
    audios = document.querySelectorAll("audio");
  console.log(audios);
  
  play5Btn.addEventListener("mouseover", function() {
  [].forEach.call(audios, function(audio) {
    // do whatever
    audio.play();
  });
  }, false);
  
  play5Btn.addEventListener("mouseleave", function() {
    sound5.pause();
    sound5.currentTime = 0;
  }, false);

/*sound 24*/

var play24Btn = document.getElementById("play24"),
  sound24 = document.getElementById("sound24")
	audio = document.querySelectorAll("audio");
console.log(audios);

play24Btn.addEventListener("mouseover", function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

play24Btn.addEventListener("mouseleave", function() {
  sound24.pause();
  sound24.currentTime = 0;
}, false);


