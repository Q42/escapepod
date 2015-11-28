var Api = new Restivus({
  useDefaultAuth: false,
  prettyJson: true
});

// Maps to: /api/robotarm
Api.addRoute('robotarm', {authRequired: false}, {
  get: function () {
    console.log('robotarm done');
    if (!State.findOne().robotArm) {
      State.update(1, {$set: {robotArm: true, state: 'ROBOTDONE'}});
      VoiceMsgs.insert({msg: 'Oxygen levels stabilized.', ts: new Date()});

      Meteor.setTimeout(function() {
        VoiceMsgs.insert({msg: 'Recommencing escape pod protocol.', ts: new Date()});
      }, 3000);

      Meteor.setTimeout(function() {
        VoiceMsgs.insert({msg: 'Communication relay found.', ts: new Date()});
      }, 6000);

      Meteor.setTimeout(function() {
        VoiceMsgs.insert({msg: 'Sending distress signal.', ts: new Date()});
      }, 9000);

      Meteor.setTimeout(function() {
        VoiceMsgs.insert({msg: 'Error: cannot read location coordinates. Please insert current coordinates manually.', ts: new Date()});
        State.update(1, {$set: {state: 'COORDINATES'}});
      }, 15000);
    }
    return {message: 42};
  }
});
