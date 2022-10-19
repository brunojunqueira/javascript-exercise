import getFullAddress from './getFullAddress.js';
import { DEFAULT_USERS_ENDPOINT, DEFAULT_POSTS_ENDPOINT } from '../utils/constants.js';
import fetchData from './fetchData.js';

/**
* Get the users and posts from end-point api and merge them.
* @param {string} usersURL Users End-point URL.
* @param {string} postsURL Posts End-point URL.
* @returns {object} Return merged data.
*/
export default async function getUsersWithPosts(usersURL = DEFAULT_USERS_ENDPOINT, postsURL = DEFAULT_POSTS_ENDPOINT) {
    try {
        //Get users and posts from end-poind api.
        const [users, posts] = await fetchData(usersURL, postsURL);
        
        //Map all users.
        const data = users.map((user) => {
            //Merge users with posts deleting userId field from posts.
            return { 
                ...user, 
                address: getFullAddress(user.address),
                company: user?.company?.name ?? null,
                posts: posts.filter( (post) => {
                    if(post.userId === user.id){
                        delete post.userId;
                        return post;
                    }
                }
            )};
        });
        
        //If everythin went okay, return data.
        return data;

    } catch (error) {
        //If an error occurs it will be returned.
        return error;
    }
}