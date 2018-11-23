// we want the application to inteligently point to the proper url when developing/production
// development: point to the mock api
// production: point to the api in express
// this will look at the host name to determine if the application is running in development
// if yes: 	it will point to our mock api hosted on port 3001
// if no: 	it will point to the production api we setup in express
export default function getBaseUrl() {
	return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3000' : 'https://sheltered-sea-32779.herokuapp.com/';
}

// there are eaiser ways to do this. Use JQuery
function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
