import getUsersWithPosts from './getUsersWithPosts.js';

/**
 * Letter it's an object that contains get method wich is responsible to manage API and return results.
 */
const Letter = {
    get: getUsersWithPosts
}

export default Letter;