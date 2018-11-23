// (.) 	=> Represents the current directory. in this case it is javascript-dev-env/src/home
// (..)	=> Represents the parent directory. in this case it is javascript-dev-env/src
import './home.css';
import {getUsers, deleteUser} from './api/userApi';

// make the call then populate a html table of users
getUsers().then(result => {
	let usersBody = "";

	result.forEach(user => {
		usersBody+= `<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastName}</td>
		</tr>`
	})

	global.document.getElementById('users').innerHTML = usersBody;

	const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
