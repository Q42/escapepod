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
