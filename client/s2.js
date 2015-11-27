Template.s2.helpers({
  stateIs: function (s) {
    var state = State.findOne();
    if (!state) return false;
    return state.state == s;
  }
});
