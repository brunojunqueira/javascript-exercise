import fetchData from "../functions/fetchData";

describe('Test fetchData from API', ()=>{

    test('Null End-points', async () => {
        expect(await fetchData()).toEqual(Error('The endpoints param cannot be null!'));
    });
    
    test('Invalid End-points', async () => {
        expect(await fetchData('dslvnavns', 'fwouhgsfou', 'foihjdiohi')).toEqual(ReferenceError('fetch is not defined'));
    });
    
})