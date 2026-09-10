import { alumnos, type Alumno } from "../models/db.js";

// Ejercicio 1
export function obtenerNombres(alumnos: Alumno[]): string[] {
    return alumnos.map(alumno => alumno.nombre);
}

// Ejercicio 2
export function obtenerNombresCompletos(alumnos: Alumno[]): string[] {
    return alumnos.map(alumno => `${alumno.nombre} ${alumno.apellido}`);
}

// Ejercicio 3
export function obtenerMayoresDeEdad(alumnos: Alumno[]): Alumno[] {
    return alumnos.filter(alumno => alumno.edad >= 18);
}

// Ejercicio 4
export function obtenerAprobados(alumnos: Alumno[]): Alumno[] {
    return alumnos.filter(alumno => alumno.nota >= 6);
}

// Ejercicio 5
export function calcularPromedio(alumnos: Alumno[]): number {
    if (alumnos.length === 0) return 0;
    const suma = alumnos.reduce((acc, alumno) => acc + alumno.nota, 0);
    return suma / alumnos.length;
}

// Ejercicio 6
export function obtenerMejorAlumno(alumnos: Alumno[]): Alumno | undefined {
    if (alumnos.length === 0) return undefined;
    return alumnos.reduce((mejor, actual) => (actual.nota > mejor.nota ? actual : mejor));
}

// Ejercicio 7
export function buscarPorLegajo(
    alumnos: Alumno[],
    legajo: number
): Alumno | undefined {
    return alumnos.find(alumno => alumno.legajo === legajo);
}

// Ejercicio 8
export function buscarPorNombre(
    alumnos: Alumno[],
    nombre: string
): Alumno | undefined {
    return alumnos.find(alumno => alumno.nombre === nombre);
}

// Ejercicio 9
export function existeDesaprobado(alumnos: Alumno[]): boolean {
    return alumnos.some(alumno => alumno.nota < 6);
}

// Ejercicio 10
export function todosAprobaron(alumnos: Alumno[]): boolean {
    return alumnos.every(alumno => alumno.nota >= 6);
}

// Ejercicio 11
export function cantidadAprobados(alumnos: Alumno[]): number {
    return alumnos.filter(alumno => alumno.nota >= 6).length;
}

// Ejercicio 12
export function sumarEdades(alumnos: Alumno[]): number {
    return alumnos.reduce((acc, alumno) => acc + alumno.edad, 0);
}

// Ejercicio 13
export function obtenerAlumnosDeCiudad(
    alumnos: Alumno[],
    ciudad: string
): Alumno[] {
    return alumnos.filter(alumno => alumno.ciudad === ciudad);
}

// Ejercicio 14
export function calcularPromedioPorCiudad(
    alumnos: Alumno[],
    ciudad: string
): number {
    const deLaCiudad = obtenerAlumnosDeCiudad(alumnos, ciudad);
    return calcularPromedio(deLaCiudad);
}

// Ejercicio 15
export function transformar<T, R>(
    elementos: T[],
    callback: (elemento: T) => R
): R[] {
    return elementos.map(callback);
}

// Ejercicio 16
export function filtrar<T>(
    elementos: T[],
    callback: (elemento: T) => boolean
): T[] {
    return elementos.filter(callback);
}

// Ejercicio 17
export function buscar<T>(
    elementos: T[],
    callback: (elemento: T) => boolean
): T | undefined {
    return elementos.find(callback);
}

// Ejercicio 18
export function calcularTotal(
    alumnos: Alumno[],
    callback: (alumno: Alumno) => number
): number {
    return alumnos.reduce((acc, alumno) => acc + callback(alumno), 0);
}

// Ejercicio 19
export function agruparPorCiudad(
    alumnos: Alumno[]
): Record<string, Alumno[]> {
    return alumnos.reduce((acc, alumno) => {
        (acc[alumno.ciudad] ??= []).push(alumno);
        return acc;
    }, {} as Record<string, Alumno[]>);
}

// Ejercicio 20
export interface Estadisticas {
    cantidadTotal: number;
    cantidadAprobados: number;
    cantidadDesaprobados: number;
    promedio: number;
    mejorAlumno: Alumno | undefined;
}

export function obtenerEstadisticas(
    alumnos: Alumno[]
): Estadisticas {
    return {
        cantidadTotal: alumnos.length,
        cantidadAprobados: cantidadAprobados(alumnos),
        cantidadDesaprobados: alumnos.length - cantidadAprobados(alumnos),
        promedio: calcularPromedio(alumnos),
        mejorAlumno: obtenerMejorAlumno(alumnos),
    };
}