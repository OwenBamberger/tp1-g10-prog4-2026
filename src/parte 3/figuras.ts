// EJERCICIO 12 - Clase abstracta Figura

export abstract class Figura {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

export class Circulo extends Figura {
    constructor(private radio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

export class Rectangulo extends Figura {
    constructor(
        private base: number,
        private altura: number
    ) {
        super();
    }

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura);
    }
}

export class Cuadrado extends Figura {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return Math.pow(this.lado, 2);
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }
}
