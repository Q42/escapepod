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
        VoiceMsgs.insert({msg: 'Trying to set up communications.', ts: new Date()});
      }, 6000);

      Meteor.setTimeout(function() {
        VoiceMsgs.insert({msg: 'Error: cannot establish communication. Please repair the comsystem.', ts: new Date()});
        State.update(1, {$set: {state: 'COMM'}});
      }, 9000);
    }
    return {message: 42};
  }
});

// Maps to: /api/commsystem
Api.addRoute('commsystem', {authRequired: false}, {
  get: function () {
    console.log('commsystem done');
    if (!State.findOne().commSystem) {
      State.update(1, {$set: {commSystem: true, state: 'COMMDONE'}});
      VoiceMsgs.insert({msg: 'Communication system online.', ts: new Date()});

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
