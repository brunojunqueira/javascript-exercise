import Letter from "./modules/letter.js";

//declare html element fields variables.
const names_field = document.getElementById('users__names');
const users_pre = document.getElementById('users__pre');

//Get users by Letter.get method.
const users = await Letter.get();

/**
* Change the user when Button is pressed.
* @param {object} user User selected.
*/
const handleSelectedUser = (user) => {
    users_pre.textContent = JSON.stringify(user, null, 2);
}

//Map the users create a button with user's name and append button to names_field.
users.map((user)=>{
    let button = document.createElement('button');
    button.className = "users__button";
    button.innerText = user.name;
    button.onclick = () => handleSelectedUser(user);
    names_field.appendChild(button);
});

//Defines first user from array to displayed data.
handleSelectedUser(users[0]);

