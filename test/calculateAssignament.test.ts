const { calculateAssignament } = require('../src/assignments');

describe('calculateAssignament', () => {
    it('should calculate the absolute difference correctly', () => {
        const client = {name: 'g', expectation: 8};
        const trainer = { name: 'A', reputation: 4.3, availablePlaces: 1 };
        const result = calculateAssignament(client, trainer);

        expect(result).toBe(4.3 - (8 / 2));
    })
})