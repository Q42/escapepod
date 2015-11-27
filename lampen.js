

function makeAllLightsWhite() {
  var url = 'http://'+bridgeIpAddress+'/api/'+bridgeUser+'/groups/0/action';
	return putRequest(url,state);
}
