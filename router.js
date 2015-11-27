Router.route('/', function () {
  this.render('main');
});

Router.route('/s1', function () {
  this.render('s1');
});
Router.route('/s2', function () {
  this.render('s2');
});
Router.route('/s3', function () {
  this.render('s3');
});
Router.route('/s4', function () {
  this.render('s4');
});

Router.route('/admin', function() {
  this.render('admin');
});
