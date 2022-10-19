/**
 * Fetch all data from API and return results.
 * @param  {...string} endpoints 
 * @returns The data from API or an error message.
 */

export default async function fetchData(...endpoints){

    if(endpoints.length === 0){
        return Error('The endpoints param cannot be null!');
    }

    try{
        //Map all endpoints creating a fetch to each one.
        const fetchs = endpoints.map( (endpoint) => {
            return fetch(endpoint)
                .then( res => { 
                    return res.json();
                });
        }); 

        //Make a resquest to all endpoints and return a response.
        const result = await Promise.all(fetchs).then( data => {
            return data;
        }).catch((error) => {
            return error.message;
        });

        return result;
    } catch (error) {
        return error;
    }
}