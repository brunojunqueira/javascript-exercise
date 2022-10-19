/**
 * Create all user buttons to change content displayed.
 * @param {function} handleSelectedUser 
 * @param {object[]} users 
 * @returns
 */

export default function createUsersButtons(users, handleSelectedUser){
    //Check if users exists.
    if(!users){
        return Error('Something went wrong, please try again.');
    }

    const buttons_field = document.querySelector('.users__names');

    //Map the users, create a button with user's name and append button to names_field.
    users.map((user)=>{
        let button = document.createElement('button');
        button.innerText = user.name;
        button.onclick = () => handleSelectedUser(user);
        buttons_field.appendChild(button);
    });

    //Defines first user from array to displayed data.
    handleSelectedUser(users[0]);

}