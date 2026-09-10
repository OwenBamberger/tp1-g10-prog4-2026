/**
 * EJERCICIOS 8, 9 y 10 - Clase Alumno
 * ---------------------------------------------------------------------------
 * Esta clase se completa en tres pasos, marcados con TODO. Cada paso agrega
 * comportamiento sin romper el anterior:
 *
 *   - Ejercicio 8:  atributos básicos, getNombreCompleto, esMayorDeEdad.
 *   - Ejercicio 9:  `edad` pasa a ser privada; getEdad/setEdad con validación.
 *   - Ejercicio 10: arreglo de materias inscriptas.
 */

// -----------------------------------------------------------------------------
// EJERCICIO 10 - interface Materia
// -----------------------------------------------------------------------------
//TODO:cambiar a type
export interface Materia {
    codigo: number;
    nombre: string;
    horas: number;
}

export class Alumno {
    public legajo: number;
    public nombre: string;
    public apellido: string;
    public email: string;

    // EJERCICIO 9: `edad` es privada. Se accede solo con getEdad/setEdad.
    private edad!: number; //uso ! para avisar que se que esta propiedad va a ser inicializada antes de ser utilizada, ya que se inicializa en el constructor a traves del setEdad

    // EJERCICIO 10: materias en las que está inscripto el alumno.
    private materias: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        edad: number,
        email: string
    ) {
        // (Ejercicio 8): asignar los atributos recibidos.
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.setEdad(edad); 
    }

    // -------------------------------------------------------------------
    // EJERCICIO 8
    // -------------------------------------------------------------------

    getNombreCompleto(): string {
        return this.nombre + " " + this.apellido;
        
    }

    esMayorDeEdad(): boolean {
        return this.edad >= 18;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 9 - encapsulamiento de `edad`
    // -------------------------------------------------------------------

    getEdad(): number {
       return this.edad;
    }

    setEdad(edad: number): void {
        if (edad < 0 || edad > 110) {
            throw new Error("Edad inválida");
        } else {
            this.edad = edad;
        }
    }

    // -------------------------------------------------------------------
    // EJERCICIO 10 - materias
    // -------------------------------------------------------------------

    agregarMateria(materia: Materia): void {
        this.materias.push(materia);
    }

    quitarMateria(codigo: number): Materia | undefined {
        const index = this.materias.findIndex(m => m.codigo === codigo); 
        if (index !== -1) {
            const materiaQuitada = this.materias[index];
            this.materias.splice(index, 1); // splice lo borra del arreglo y [0] devuelve la materia elmiminada
            return materiaQuitada;
        }    
        return undefined;
    } 

    estaInscripto(codigo: number): boolean {
        return this.materias.some(m => m.codigo === codigo); // some devuelve true si encuentra al menos un elemento que cumpla la condicin
    }

    cantidadMaterias(): number {
        return this.materias.length;
    }

    getMaterias(): Materia[] {
        return [...this.materias]; // devuelve una copia
       
    }
}
