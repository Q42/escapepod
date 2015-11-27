Template.admin.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();
    console.log('hi');
  }
});


/*

 var u = new SpeechSynthesisUtterance();
 var voices = window.speechSynthesis.getVoices();
 u.text = 'I\'m afraid I can\'t do that.   Dave';

 u.lang = 'en-US';
 u.rate = 0.8;
 u.pitch = 1.2;
 u.volume= 0.5;
 u.voice = voices.filter(function(voice) { return voice.name == 'Fred'; })[0];
 speechSynthesis.speak(u);
*/
