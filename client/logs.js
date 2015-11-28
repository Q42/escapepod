Template.logs.helpers({
  messages: function() {
    return VoiceMsgs.find({}, {sort: {ts:1}}).fetch();
  }
});
