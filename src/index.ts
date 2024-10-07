import { Trainer, Client, Assignation } from './interfaces';
import { assignClient } from './assignments';
// Asignamos los valores a las interfaces
const trainers: Trainer[] = [
    { name: 'A', reputation: 4.5, availablePlaces: 1 },
    { name: 'B', reputation: 3.2, availablePlaces: 4 },
    { name: 'C', reputation: 1.2, availablePlaces: 3 },
    { name: 'D', reputation: 3.4, availablePlaces: 2 },
];

const clients: Client[] = [
    { name: 'q', expectation: 2.6 },
    { name: 'r', expectation: 3.7 },
    { name: 's', expectation: 8.5 },
    { name: 't', expectation: 9.7 },
    { name: 'u', expectation: 2.6 },
    { name: 'v', expectation: 4.7 },
    { name: 'w', expectation: 5.6 },
    { name: 'x', expectation: 3.7 },
    { name: 'y', expectation: 8.1 },
    { name: 'z', expectation: 2.5 },
];


const assignments: Assignation[] = assignClient(trainers, clients);
console.log(assignments);
