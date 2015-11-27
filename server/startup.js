Meteor.startup(function() {
  VoiceMsgs.remove({});
  State.upsert(1, {state: 'INTRO'});
});
