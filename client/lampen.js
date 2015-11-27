Template.lampen.events({
  'click button.white': function (e, tmpl) {
    e.preventDefault();
    console.log('light ib');
    makeAllLightsWhite();
  },
  'click button.red': function (e, tmpl) {
    e.preventDefault();
    console.log('light opdjfigj');
    blinkAllRed();
  }
});

var bridgeIpAddress = '192.168.1.121';
var whitelist = 'aValidUser';

function putRequest(url,state) {
 	return $.ajax({
    url: url ,
    type: 'PUT',
    data: state,
    contentType: 'json'
  });
}


function makeAllLightsWhite() {
	var state = '{"on":true,"bri":5,"sat":110,"hue":47000}';
	_setLightGroup(state);
}

function blinkAllRed() {
  var redstate = '{"on":true,"bri":120,"sat":190,"hue":0}';
  var redAlert = '{"alert": "lselect" }';

	// var lampStateA = '{"on":true,"bri":200,"sat":190,"hue":0}';
	// var lampStateB = '{"on":false,"bri":10,"sat":190,"hue":0}';
 _setLightGroup(redstate);
 _setLightGroup(redAlert);

}


function _setLightGroup(state) {
	var url = 'http://'+bridgeIpAddress+'/api/'+whitelist+'/groups/0/action';
	return putRequest(url,state);
}

function _setLightLamp(lamp,state) {
	var url = 'http://'+bridgeIpAddress+'/api/'+whitelist+'/lights/' + lamp + '/state';
	putRequest(url,state);
}
