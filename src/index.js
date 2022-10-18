import Letter from "./modules/letter.js";

const names_field = document.getElementById('users__names');
const users_pre = document.getElementById('users__pre');

const users = await Letter.get();

function handleSelectedUser(user){
    users_pre.textContent = JSON.stringify(user, null, 2);
}

users.map((user)=>{
    let button = document.createElement('button');
    button.className = "users__button"
    button.innerText = user.name;
    button.onclick = () => handleSelectedUser(user);
    names_field.appendChild(button);
});

handleSelectedUser(users[0]);

