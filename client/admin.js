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
  'click .alarm': function(e, tmpl) {
    State.update(1, {$set: {state: 'ALARM'}});
  },
  'click .static': function(e, tmpl) {
    State.update(1, {$set: {state: 'STATIC'}});
  },
  'click .puzzel3': function(e, tmpl) {
    State.update(1, {$set: {state: 'PUZZEL3'}});
  },
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var msg = e.target.querySelector('input').value;
    VoiceMsgs.insert({msg: msg, ts: new Date()});
  }
});
