import {describe, it} from 'mocha';
import {expect} from 'chai';

import Boilerplate from '../src/Boilerplate/Boilerplate';

describe('Boilerplate', () => {
    it('should work', () => {
        const expected = 'It\'s work!';
        const result = Boilerplate();

        expect(result).to.be.equal(expected);
    });
});
