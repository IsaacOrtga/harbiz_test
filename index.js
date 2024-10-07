//Definimos las distintas interfaces que usaremos
// Asignamos los valores a las interfaces
var trainers = [
    { name: 'A', reputation: 4.5, availablePlaces: 1 },
    { name: 'B', reputation: 3.2, availablePlaces: 4 },
    { name: 'C', reputation: 1.2, availablePlaces: 3 },
    { name: 'D', reputation: 3.4, availablePlaces: 2 },
];
var clients = [
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
// Calculamos las expectativas del cliente con respecto a la reputación del entrenador
function calculateAssignament(client, trainer) {
    return trainer.reputation - (client.expectation / 2);
}
// Asignamos a la interface de Assignations cada cliente con su entrenador
function assignClient(trainers, clients) {
    // ordenamos descendentemente, de mayor a menor reputación
    trainers.sort(function (a, b) { return b.reputation - a.reputation; });
    clients.sort(function (a, b) { return b.expectation - a.expectation; });
    var assignations = [];
    for (var _i = 0, clients_1 = clients; _i < clients_1.length; _i++) {
        var client = clients_1[_i];
        var bestTrainer = null;
        // Comenzamos con un ajuste negativo para asegurarnos de que el primer resultado va a ser mayor
        var bestDifference = -1;
        for (var _a = 0, trainers_1 = trainers; _a < trainers_1.length; _a++) {
            var trainer = trainers_1[_a];
            if (trainer.availablePlaces > 0) {
                var fitDifference = calculateAssignament(client, trainer);
                if (fitDifference > bestDifference) {
                    bestDifference = fitDifference;
                    bestTrainer = trainer;
                }
            }
        }
        assignations.push({
            client: client.name,
            trainer: bestTrainer.name,
            fitDifference: bestDifference,
        });
    }
    return assignations;
}
var result = assignClient(trainers, clients);
console.log(result);
