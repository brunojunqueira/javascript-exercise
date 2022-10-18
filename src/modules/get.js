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

export default get;