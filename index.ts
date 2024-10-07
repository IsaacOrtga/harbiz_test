//Definimos las distintas interfaces que usaremos

interface Trainer {
    name: string;
    reputation: number;
    availablePlaces: number;
}

interface Client {
    name: string;
    expectation: number;
}

interface Assignations {
    client: string;
    trainer: string;
    fitDifference: number;
}

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
]

// Calculamos las expectativas del cliente con respecto a la reputación del entrenador

function calculateAssignament(client: Client, trainer: Trainer): number {
    return trainer.reputation - (client.expectation / 2);
}

// Asignamos a la interface de Assignations cada cliente con su entrenador
function assignClient(trainers: Trainer[], clients: Client[]): Assignations[]{
    // ordenamos descendentemente, de mayor a menor reputación
    trainers.sort((a, b) => b.reputation - a.reputation);
    clients.sort((a, b) => b.expectation - a.expectation);

    const assignations: Assignations[] = [];

    for(const client of clients){
        let bestTrainer: Trainer | null = null;
        // Comenzamos con un ajuste negativo para asegurarnos de que el primer resultado va a ser mayor
        let bestDifference = -1;
        for(const trainer of trainers){
            if(trainer.availablePlaces > 0){
                // Calculamos la diferencia que hay entre las expectativas y la reputación
                let fitDifference = calculateAssignament(client, trainer);
                // si la nueva diferencia es mayor que la mejor que hemos tenido, entonces reasignamos el valor de bestDifference y así nos aseguramos de asignar de menor diferencia a mayor
                if(fitDifference > bestDifference){
                    bestDifference = fitDifference;
                    bestTrainer = trainer;
                }
            }
        }
        assignations.push({
            client: client.name,
            trainer: bestTrainer.name,
            fitDifference: bestDifference,
        })
    }
    return assignations;
}

const result = assignClient(trainers, clients);
console.log(result);
