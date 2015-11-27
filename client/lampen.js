Template.lampen.events({
  'click button': function (e, tmpl) {
    e.preventDefault();
    console.log('light ib');

  }
});


var bridgeIpAddress = '10.41.1.54';
var whitelist = 'aValidUser';

function makeAllLightsWhite() {
  var url = 'http://'+bridgeIpAddress+'/api/'+bridgeUser+'/groups/0/action';
	return putRequest(url,state);
}
