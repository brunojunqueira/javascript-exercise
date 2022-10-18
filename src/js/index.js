import Letter from "./letter.js";

const field = document.getElementById('data-field');

const data = await Letter.get('https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/posts');

console.log(data);