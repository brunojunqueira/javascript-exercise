import { Letter } from '../services/api.js';

describe('Test Letter Object', ()=>{
    //Test if the function returns an error when end-point URLs are wrong or null.
    test('Invalid or Null end-point', async () => {
        expect(await Letter.get('test', '')).toEqual(TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'));
    });

    //Test if the function returns something when end-point URLs are correct.
    test('Success Return', async () => {
        expect(await Letter.get()).toBeDefined();
    });
})

//RUN 'yarn test' or 'npm test' TO EXECUTE TESTS.