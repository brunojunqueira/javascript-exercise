const defaultUsersURL = 'https://jsonplaceholder.typicode.com/users';
const defaultPostsURL = 'https://jsonplaceholder.typicode.com/posts';

/**
* Get the users and posts from end-point api and merge them.
* @param {string} usersURL Users End-point URL.
* @param {string} postsURL Posts End-point URL.
* @returns {object} Return merged data.
*/
async function get(usersURL = defaultUsersURL, postsURL = defaultPostsURL) {
    try {
        //Get users and posts from end-poind api.
        const [users, posts] = await Promise.all([
            fetch(usersURL).then( response => { return response.json() }),
            fetch(postsURL).then( response => { return response.json() })
        ]).then( data => {
            return data;
        });
        
        //Merge users with posts.
        const data = users.map((user) => {
            return { ...user, posts: posts.filter( (item) => (item.userId === user.id) ) };
        });
        
        //If everythin went okay, return data.
        return data;

    } catch (error) {
        //If an error occurs it will be returned.
        return error.message;
    }
}

export default get;