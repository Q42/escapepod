Template.admin.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();

    var u = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    //u.text = 'I\'m afraid I can\'t do that, Dave';
    u.text = 'Welcome to the first intergalactic space flight.';

    u.lang = 'en-US';
    u.rate = 1;
    u.pitch = 1;
    u.volume = 1;
    //u.voice = voices.filter(function(voice) { return voice.name == 'Fred'; })[0];
    u.voice = voices.filter(function(voice) { return voice.name == 'Bubbles'; })[0];
    //u.voice = voices.filter(function(voice) { return voice.name == 'Good News'; })[0];
    speechSynthesis.speak(u);
  }
});
