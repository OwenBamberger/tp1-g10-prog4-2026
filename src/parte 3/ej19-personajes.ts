// EJERCICIO 19 - Sistema de personajes

export abstract class Personaje {
    constructor(
        public nombre: string,
        public vida: number,
        public ataque: number
    ) {} 

    abstract atacar(objetivo: Personaje): void;
}

export class Guerrero extends Personaje {
    atacar(objetivo: Personaje): void {
        objetivo.vida = Math.max(0, objetivo.vida - this.ataque);
    }
}

export class Mago extends Personaje {
    atacar(objetivo: Personaje): void {
        objetivo.vida = Math.max(0, objetivo.vida - Math.round(this.ataque * 1.5));
    }
}

export class Arquero extends Personaje {
    atacar(objetivo: Personaje): void {
        objetivo.vida = Math.max(0, objetivo.vida - Math.round(this.ataque * 0.8));
    }
}
