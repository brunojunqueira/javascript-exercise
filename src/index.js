import Letter from "./modules/letter.js";

const field = document.getElementById('data-field');

const data = await Letter.get();

field.textContent = JSON.stringify(data, null, 2);
