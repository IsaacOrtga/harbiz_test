const { assignClient } = require('../src/assignments');

describe('assignClient', () => {
    it('should match clients with trainers based on expectations and reputation', () => {
        const trainers = [
            {name: 'A', reputation: 4.8, availablePlaces: 1},
            {name: 'B', reputation: 3.1, availablePlaces: 3},
            {name: 'C', reputation: 3.5, availablePlaces: 1},
        ];

        const clients = [
            {name: 'd', expectation: 10},
            {name: 'e', expectation: 4.8},
            {name: 'f', expectation: 6.7},
        ];

        const result = assignClient(trainers, clients);

        // Deberían de quedar de la siguiente forma asignados
        expect(result).toEqual([
            {client: 'd', trainer: 'A', fitDifference: expect.any(Number)},
            {client: 'f', trainer: 'C', fitDifference: expect.any(Number)},
            {client: 'e', trainer: 'B', fitDifference: expect.any(Number)},
        ]);

        // Plazas libres que deberían de quedarles a cada uno
        expect(trainers[0].availablePlaces).toBe(0);
        expect(trainers[1].availablePlaces).toBe(0);
        expect(trainers[2].availablePlaces).toBe(2);
    });
})