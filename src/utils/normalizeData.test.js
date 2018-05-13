import {describe, it} from 'mocha';
import {expect} from 'chai';

import normalizeData from './normalizeData';

describe('normalizeData', () => {
    it('should work', () => {
        const input = {
            type: 'FeatureCollection',
            features: []
        };
        const output = normalizeData(input);

        expect(output.type).to.be.equal('FeatureCollection');
    });
});
