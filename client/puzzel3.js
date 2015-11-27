Template.puzzel3Coordinates.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var text = e.target.querySelector('input').value;
    if (text === '123') {
      console.log('Its ok');
      VoiceMsgs.insert({msg: 'Hurray', ts: new Date()});

    } else {
      console.log('FOUT');
      VoiceMsgs.insert({msg: 'This is not correct', ts: new Date()});
    }
  }
});
