Template.admin.events({
  'click .alarm': function(e, tmpl) {
    console.log('alarm');
  },
  'click .static': function(e, tmpl) {
    console.log('static');
  },
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var msg = e.target.querySelector('input').value;
    VoiceMsgs.insert({msg: msg, ts: new Date()});
  }
});
