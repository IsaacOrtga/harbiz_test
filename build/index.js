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
// Calculamos las expectativas del cliente con respecto a la reputación del entrenador: me declino por calcular la diferencia absoluta (es decir, si la reputación de los entrenadores van de una escala de 0 a 5, dividiré las expectatias de los clientes, que van de 0 a 10, para que los dos se ubiquen en el mismo rango, y entonces calculo la diferencia entre los dos);
function calculateAssignment(clients, trainers) {
    return trainers.reputation - (clients.expectation / 2);
}

function iterarAssignment(calculateAssignament){
    
}

console.log(calculateAssignment(clients[0], trainers[0]));
