Template.registerHelper('stateIs', function (s) {
  var state = State.findOne();
  if (!state) return false;
  return state.state == s;
});

Template.admin.helpers({
  state: function () {
    var state = State.findOne();
    if (state) {
      return state.state;
    }
  }
});

Template.admin.events({
  'click [data-role="intro1"]': function(e, tmpl) {
    VoiceMsgs.insert({msg: 'Sally Starlet here from Titan Inc. inviting you to join us on an intergalactic space flight to Via Muerta. Our luxury cruise offers comfort and entertainment throughout the entire two lightyears. As always we guarantee maximum safety from the terrors of space.', ts: new Date()});
  },
  'click [data-role="intro2"]': function(e, tmpl) {
    VoiceMsgs.insert({msg: 'So sign up today and be among the first to experience the stars.', ts: new Date()});
  },
  'click [data-role="alarm"]': function(e, tmpl) {
    State.update(1, {$set: {state: 'ALARM'}});
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
  }
});
