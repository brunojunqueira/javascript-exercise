/**
* Get the users and posts from end-point api and merge them.
* @param {string} usersURL Users End-point URL.
* @param {string} postsURL Posts End-point URL.
* @returns {object} Return merged data.
*/
async function get(usersURL, postsURL) {
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

        return data;

    } catch (error) {
        if(!usersURL || !postsURL){
            return Error('End-point URLs cannot be null.');
        }
        //If a error has been thrown the console will log it.
        return error;
    }
}

export default get;