var timeouts = [];

Template.registerHelper('stateIs', function (s) {
  var state = State.findOne();
  if (!state) return false;
  return _.contains(s.split('|'), state.state);
});

Template.admin.helpers({
  state: function() {
    var state = State.findOne();
    if (state) {
      if (state.state == 'ROBOTDONE') { // I'm sorry I put this here, but it seems to work
        Lamps.allWhiteLow();
      }
      return state.state;
    }
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
  'click [data-role="start"]': function(e, tmpl) {
    Lamps.allWhiteLow();
    State.update(1, {$set: {state: 'INTRO'}});
    timeouts.push(Meteor.setTimeout(function() {
      State.update(1, {$set: {state: 'EXPLOSION1'}});
      VoiceMsgs.insert({msg: 'Warning! Critical system failure!', ts: new Date()});
    }, 10000));
    timeouts.push(Meteor.setTimeout(function() {
      Lamps.allRedBlink();
      VoiceMsgs.insert({msg: 'Preparing emergency sequence. Escape pod powering up. Please stay in your seat and follow emergency protocol.', ts: new Date()});
    }, 13000));
    timeouts.push(Meteor.setTimeout(function() {
      VoiceMsgs.insert({msg: 'Escape pod has been succesfully dispatched.', ts: new Date()});
    }, 24000));
    timeouts.push(Meteor.setTimeout(function() {
      State.update(1, {$set: {state: 'STATIC'}});
    }, 32000));
    timeouts.push(Meteor.setTimeout(function() {
      Lamps.allOff();
      State.update(1, {$set: {state: 'EXPLOSION2'}});
    }, 37000));
    timeouts.push(Meteor.setTimeout(function() {
      State.update(1, {$set: {state: 'REBOOT'}});
      VoiceMsgs.insert({msg: 'Please wait for main system to reboot.', ts: new Date()});
    }, 52000));
    timeouts.push(Meteor.setTimeout(function() {
      Lamps.allWhiteLow();
      VoiceMsgs.insert({msg: 'Checking all systems.', ts: new Date()});
    }, 62000));
    timeouts.push(Meteor.setTimeout(function() {
      VoiceMsgs.insert({msg: 'Checking all life support.', ts: new Date()});
    }, 65000));
    timeouts.push(Meteor.setTimeout(function() {
      Lamps.robotRedBlink();
      VoiceMsgs.insert({msg: 'Hull breach detected. Current oxygen level: 69%, and dropping rapidly. If you do not wish to suffer a horrible death by suffocation, please repair breach immediately.', ts: new Date()});
    }, 70000));
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
    VoiceMsgs.find().fetch().forEach(function(m) {VoiceMsgs.remove(m._id)});
    timeouts.forEach(function(t) {
      Meteor.clearTimeout(t);
    });
    timeouts = [];
    State.update(1, {$set: {
      state: 'OFF',
      robotArm: false
    }});
    Lamps.allWhite();
  }
});
