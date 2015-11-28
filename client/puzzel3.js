Template.puzzel3Coordinates.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var text = e.target.querySelector('input').value;
    if (text === '30\'-25\'5') {
      State.update(1, {$set: {state: 'COORDINATESDONE'}});
      VoiceMsgs.insert({msg: 'Current coordinates received. Sending distress signal.', ts: new Date()});

      Meteor.setTimeout(function() {
        VoiceMsgs.insert({msg: 'Succesfully sent distress signal.', ts: new Date()});
      }, 3000);

      Meteor.setTimeout(function() {
        VoiceMsgs.insert({msg: 'Distress signal has been received by Titan Inc.', ts: new Date()});
      }, 6000);
    } else {
      VoiceMsgs.insert({msg: 'Invalid coordinates. Please retry.', ts: new Date()});
    }
  }
});

Template.puzzel3Coordinates.onRendered(function () {
  this.$('.prompt input').focus();
});
