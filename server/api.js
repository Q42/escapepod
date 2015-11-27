var Api = new Restivus({
  useDefaultAuth: false,
  prettyJson: true
});

// Maps to: /api/robotarm
Api.addRoute('robotarm', {authRequired: false}, {
  get: function () {
    // TODO set some internal state
    return {message: '42'};
  }
});
