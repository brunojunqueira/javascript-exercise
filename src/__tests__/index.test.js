import Letter from '../js/letter.js';

const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';

//Test if handle error when end-point URLs are null.
test('Null End-point', async () => {
    expect(await Letter.get('', '')).toEqual(Error('End-point URLs cannot be null.'));
});

//Test if API returns nothing when end-point URLs are wrong.
test('Invalid End-point', async () => {
    expect(await Letter.get('gsfvbdbdfbd', 'sfdgfsvsgvs')).toEqual(ReferenceError('fetch is not defined'));
})

//Test if API returns something when end-point URLs are correct.
test('Success Return', async () => {
    expect(await Letter.get(usersURL, postsURL)).toBeDefined();
})

//RUN 'yarn test' TO EXECUTE TESTS