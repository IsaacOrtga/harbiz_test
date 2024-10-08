//Definimos las distintas interfaces que necesitamos
export interface Trainer {
    name: string;
    reputation: number;
    availablePlaces: number;
}

export interface Client {
    name: string;
    expectation: number;
}

export interface Assignation {
    client: string;
    trainer: string;
    fitDifference: number;
}
