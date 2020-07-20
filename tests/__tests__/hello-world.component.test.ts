import {helloWorld} from '../../src/hello-world';

describe('hello-world', () => {
    it('says hello', () => {
        let hello = helloWorld();
        expect(hello).toBe('Hello World!')
    })
})