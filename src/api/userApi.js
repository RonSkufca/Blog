// *** IMPORTANT ***
// think of this file as a javasript version of the repository pattern
// we are abstracting our web api from our application
// this gives us one place to hanle all our ajax calls

// this polyfill ensures this code will run in browsers that don't support fetch natively
import 'whatwg-fetch';

// this allows the url to change based on environment. i.e. development, qa, production
import getBaseUrl from './baseUrl';
const baseUrl = getBaseUrl();

// we are only exposing 1 public function
export function getUsers() {
	return get('users');
}

export function deleteUser(id) {
	return del(`users/${id}`);
}

// private
// this is the call that uses fetch
// all the fetch calls, promise resolution, and error handling are abstracted away behind this call.
function get(url) {
	return fetch(baseUrl + url).then(onSuccess, onError);
}

// we can't name this 'delete' because delete is a reserved word
function del(url) {
	const request = new Request(baseUrl + url, {	method: 'DELETE'	});

	return fetch(request).then(onSuccess, onError);
}

// private
function onSuccess(response) {
	return response.json();
}

// private
function onError(error) {
	console.log(error); // eslint-disable-line no-console
}
