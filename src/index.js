import createUsersButtons from './functions/createUsersButtons.js';
import { Letter } from './services/api.js'

const users_pre = document.querySelector('.users__pre');
const copy_button = document.querySelector('#users__copy');

//Get users by Letter.get method.
const data = await Letter.get();

/**
* Change the user when Button is pressed.
* @param {object} user User selected.
*/
const handleSelectedUser = (user) => {
    users_pre.textContent = JSON.stringify(user, null, 2);
}

createUsersButtons(data, handleSelectedUser);

/**
* Change the text of copy_button and copy the text of users_pre to clipboard.
*/
const handleCopyButtonPressed = () => {

    copy_button.textContent = "Copied!"

    setTimeout(()=>{
        copy_button.textContent = "Copy to Clipboard";
    }, 1000);

    navigator.clipboard.writeText(users_pre.textContent);
}

copy_button.addEventListener('click', handleCopyButtonPressed);



