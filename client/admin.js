Template.admin.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var msg = e.target.querySelector('input').value;
    VoiceMsgs.insert({msg: msg, ts: new Date()});
/*
    var u = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    //u.text = 'I\'m afraid I can\'t do that, Dave';
    //u.text = 'Welcome to the first intergalactic space flight.';
    //u.text = 'You are out of oxygen! yay!';
    //u.text = 'This was a triumph. I\'m making a note here: huge success.';
    //u.text = 'We are Borg. Resistence is futile.';
    //u.text = 'You\'re going to die.';
    u.text = e.target.querySelector('input').value;

    u.lang = 'en-US';
    u.rate = 1;
    u.pitch = 1;
    u.volume = 1;
    //u.voice = voices.filter(function(voice) { return voice.name == 'Fred'; })[0];
    //u.voice = voices.filter(function(voice) { return voice.name == 'Bubbles'; })[0];
    //u.voice = voices.filter(function(voice) { return voice.name == 'Good News'; })[0];
    //u.voice = voices.filter(function(voice) { return voice.name == 'Whisper'; })[0];
    speechSynthesis.speak(u);
    */
  }
});
