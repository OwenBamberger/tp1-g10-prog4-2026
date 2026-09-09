// EJERCICIO 14 - Vehículos

export class Vehiculo {
    constructor(
        public marca: string,
        public modelo: string
    ) {}

    acelerar(): void {
        console.log(`${this.marca} ${this.modelo} está acelerando`);
    }

    frenar(): void {
        console.log(`${this.marca} ${this.modelo} está frenando`);
    }
}

export class Auto extends Vehiculo {
    acelerar(): void {
        console.log(`El auto ${this.marca} ${this.modelo} está acelerando`); 
    }
}

export class Moto extends Vehiculo {
    acelerar(): void {
        console.log(`La moto ${this.marca} ${this.modelo} está acelerando`); 
    }
}

export class Camion extends Vehiculo {
    acelerar(): void {
        console.log(`El camión ${this.marca} ${this.modelo} está acelerando`); 
        throw new Error("Implementar");
    }
}
