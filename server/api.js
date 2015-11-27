var Api = new Restivus({
  useDefaultAuth: false,
  prettyJson: true
});

// Maps to: /api/robotarm
Api.addRoute('robotarm', {authRequired: false}, {
  get: function () {
    State.update(1, {$set: {robotArm: true}});
    return {message: '42'};
  }
});
