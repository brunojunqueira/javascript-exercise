import Letter from '../modules/letter.js';

//Test if the function returns an error when end-point URLs are wrong.
test('Invalid or Null end-point', async () => {
    expect(await Letter.get('gsfvbdbdfbd', '')).toEqual(ReferenceError('fetch is not defined'));
})

//Test if the function returns something when end-point URLs are correct.
test('Success Return', async () => {
    expect(await Letter.get()).toBeDefined();
})

//RUN 'yarn test' or 'npm test' TO EXECUTE TESTS.