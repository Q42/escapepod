Template.registerHelper('stateIs', function (s) {
  var state = State.findOne();
  if (!state) return false;
  return _.contains(s.split('|'), state.state);
});

Template.admin.helpers({
  state: function() {
    var state = State.findOne();
    if (state) return state.state;
  },
  robotArm: function() {
    var state = State.findOne();
    if (state) return ''+state.robotArm;
  }
});

Template.admin.events({
  'click [data-role="intro1"]': function(e, tmpl) {
    VoiceMsgs.insert({msg: 'Sally Starlet here from Titan Inc. inviting you to join us on an intergalactic space flight to Via Muerta. Our luxury cruise offers comfort and entertainment throughout the entire two lightyears. As always we guarantee maximum safety from the terrors of space.', ts: new Date()});
  },
  'click [data-role="intro2"]': function(e, tmpl) {
    VoiceMsgs.insert({msg: 'So sign up today and be among the first to experience the stars.', ts: new Date()});
  },
  'click [data-role="intro"]': function(e, tmpl) {
    State.update(1, {$set: {state: 'INTRO'}});
    Meteor.setTimeout(function() {
      VoiceMsgs.insert({msg: 'Warning! Critical breach!', ts: new Date()});
    }, 10000);
    Meteor.setTimeout(function() {
      VoiceMsgs.insert({msg: 'Warning! Life support failing. Please stay in your seat and follow the instructions in the escape pod protocol.', ts: new Date()});
    }, 13000);
    Meteor.setTimeout(function() {
      State.update(1, {$set: {state: 'STATIC'}});
    }, 32000);
    Meteor.setTimeout(function() {
      State.update(1, {$set: {state: 'OFF'}});
    }, 37000);
    Meteor.setTimeout(function() {
      State.update(1, {$set: {state: 'REBOOT'}});
    }, 52000);
  },
  'click [data-role="crash"]': function(e, tmpl) {
    State.update(1, {$set: {state: 'CRASH'}});
  },
  'click [data-role="alarm"]': function(e, tmpl) {
    State.update(1, {$set: {state: 'ALARM'}});
  },
  'click [data-role="reboot"]': function(e, tmpl) {
    State.update(1, {$set: {state: 'REBOOT'}});
  },
  'click [data-role="static"]': function(e, tmpl) {
    State.update(1, {$set: {state: 'STATIC'}});
  },
  'click [data-role="puzzel3"]': function(e, tmpl) {
    State.update(1, {$set: {state: 'PUZZEL3'}});
  },
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var msg = e.target.querySelector('input').value;
    VoiceMsgs.insert({msg: msg, ts: new Date()});
  },
  'click [data-role="reset"]': function(e, tmpl) {
    VoiceMsgs.find().fetch().forEach(function(m) {VoiceMsgs.remove(m._id)})
    State.update(1, {$set: {
      state: 'OFF',
      robotArm: false
    }});
  }
});
