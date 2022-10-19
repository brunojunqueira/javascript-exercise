import { DEFAULT_USERS_ENDPOINT, DEFAULT_POSTS_ENDPOINT } from '../utils/constants.js';

/**
* Get the users and posts from end-point api and merge them.
* @param {string} usersURL Users End-point URL.
* @param {string} postsURL Posts End-point URL.
* @returns {object} Return merged data.
*/
async function getUsersWithPosts(usersURL = DEFAULT_USERS_ENDPOINT, postsURL = DEFAULT_POSTS_ENDPOINT) {
    try {
        //Get users and posts from end-poind api.
        const [users, posts] = await Promise.all([
            fetch(usersURL).then( res => { return res.json() }),
            fetch(postsURL).then( res => { return res.json() })
        ]).then( data => {
            return data;
        });
        
        //Map all users.
        const data = users.map((user) => {
            //Format user address.
            user.address = `${user.address.street}, ${user.address.suite} - ${user.address.zipcode} ${user.address.city}`;
            //Format user company.
            user.company = user.company.name;
            //Merge users with posts deleting userId field from posts.
            return { ...user, posts: posts.filter( (item) => {
                if(item.userId === user.id){
                    delete item.userId;
                    return item;
                }
            })};
        });
        
        //If everythin went okay, return data.
        return data;

    } catch (error) {
        //If an error occurs it will be returned.
        return error.message;
    }
}

export default getUsersWithPosts;