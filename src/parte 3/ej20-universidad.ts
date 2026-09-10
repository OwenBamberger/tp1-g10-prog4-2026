// EJERCICIO 20 (INTEGRADOR) - Sistema de gestión de una universidad

export abstract class Persona {
    constructor(
        public legajo: number,
        public nombre: string,
        public apellido: string,
        public email: string
    ) {}

    abstract obtenerInformacion(): string;
}

export class Materia {
    private alumnosInscriptos: Alumno[] = [];
    private docentesAsignados: Docente[] = [];

    constructor(
        public codigo: number,
        public nombre: string,
        public horas: number
    ) {}

    inscribirAlumno(alumno: Alumno): void {
        if (!this.alumnosInscriptos.some(a => a.legajo === alumno.legajo)) {
            this.alumnosInscriptos.push(alumno);
        }
    }

    quitarAlumno(alumno: Alumno): void {
        if (this.alumnosInscriptos.some(a => a.legajo === alumno.legajo)) {
            this.alumnosInscriptos = this.alumnosInscriptos.filter(a => a.legajo !== alumno.legajo);
        }
    }

    asignarDocente(docente: Docente): void {
        if (!this.docentesAsignados.some(d => d.legajo === docente.legajo)) {
            this.docentesAsignados.push(docente);
        }
    }

    getAlumnosInscriptos(): Alumno[] {
        return this.alumnosInscriptos.map(a => {
            const alumnoClonado = new Alumno(a.legajo, a.nombre, a.apellido, a.email);
            return alumnoClonado;
        });
    }

    getDocentesAsignados(): Docente[] {
        return this.docentesAsignados.map(d => {
            const docenteClonado = new Docente(d.legajo, d.nombre, d.apellido, d.email, d.especialidad);
            return docenteClonado;
        });
    }
}

export class Alumno extends Persona {
    private materias: Materia[] = [];

    constructor(legajo: number, nombre: string, apellido: string, email: string) {
        super(legajo, nombre, apellido, email);
    }

    inscribirse(materia: Materia): void {
        if (!this.materias.some(m => m.codigo === materia.codigo)) {
            this.materias.push(materia);
            materia.inscribirAlumno(this);
        }
    }

    quitarMateria(materia: Materia): void {
        if (this.materias.some(m => m.codigo === materia.codigo)) {
            this.materias = this.materias.filter(m => m.codigo !== materia.codigo);
            materia.quitarAlumno(this);
        }
    }

    getMaterias(): Materia[] {
        return this.materias.map(m => {
            const materiaClonada = new Materia(m.codigo, m.nombre, m.horas);
            return materiaClonada;
        });
    }

    obtenerInformacion(): string {
        return `Alumno: ${this.nombre} ${this.apellido}. Legajo: ${this.legajo}. Cantidad de materias inscriptas: ${this.materias.length}`;
    }
}

export class Docente extends Persona {
    private materiasAsignadas: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        email: string,
        public especialidad: string
    ) {
        super(legajo, nombre, apellido, email);
    }

    asignarMateria(materia: Materia): void {
        if (!this.materiasAsignadas.some(m => m.codigo === materia.codigo)) {
            this.materiasAsignadas.push(materia);
            materia.asignarDocente(this);
        }
    }

    getMateriasAsignadas(): Materia[] {
        return this.materiasAsignadas.map(m => {
            const materiaClonada = new Materia(m.codigo, m.nombre, m.horas);
            return materiaClonada;
        });
    }

    obtenerInformacion(): string {
        return `Docente: ${this.nombre} ${this.apellido}. Legajo: ${this.legajo}. Especialidad: ${this.especialidad}`;
    }
}
