"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAssignament = calculateAssignament;
exports.assignClient = assignClient;
// Calculamos las expectativas del cliente con respecto a la reputación del entrenador para sacar la diferencia y tomar dicha diferencia como referencia de cuánto de cerca están sus expectativas o exigencias de la reputación del entrenador
function calculateAssignament(client, trainer) {
    return trainer.reputation - (client.expectation / 2);
}
// Asignamos a la interface de Assignations cada cliente con su entrenador
function assignClient(trainers, clients) {
    // ordenamos descendentemente, de mayor a menor reputación
    trainers.sort((a, b) => b.reputation - a.reputation);
    clients.sort((a, b) => b.expectation - a.expectation);
    const assignations = [];
    for (const client of clients) {
        // Asignamos un valor inicial de null a bestTrainer, ya que al principio no lo tenemos
        let bestTrainer = null;
        // Comenzamos con un ajuste negativo para asegurarnos de que el primer resultado va a ser mayor
        let bestDifference = -1;
        for (const trainer of trainers) {
            if (trainer.availablePlaces > 0) {
                // Calculamos la diferencia que hay entre las expectativas y la reputación
                let fitDifference = calculateAssignament(client, trainer);
                // Redondeamos a dos decimales
                let fitDifferenceRounded = Math.round(fitDifference * 100) / 100;
                // si la nueva diferencia es mayor que la mejor que hemos tenido, entonces reasignamos el valor de bestDifference y así nos aseguramos de asignar de menor diferencia a mayor
                if (fitDifferenceRounded > bestDifference) {
                    bestDifference = fitDifferenceRounded;
                    bestTrainer = trainer;
                }
            }
        }
        // Añadimos la nueva asignación a la interface Assignations
        if (bestTrainer) {
            assignations.push({
                client: client.name,
                trainer: bestTrainer.name,
                fitDifference: bestDifference,
            });
            bestTrainer.availablePlaces--;
        }
        else {
            console.error('No hay entrenadores disponibles para el cliente ' + client.name);
        }
    }
    return assignations;
}
