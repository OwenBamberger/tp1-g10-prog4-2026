# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

La extensibilidad mediante la fusion o declaration merging, o sea que se puede declarar la misma interface en distintos lugares y se van a fusionar en una sola declaracion, haciendo que sea muy util para trabajar con tipos que pueden ser extendidos por terceros como las librerias o los tipos del DOM. Esto no es posible con type, ya que si se declara un type con el mismo nombre, va a devolver un error.

## ¿Qué permite hacer `type` que `interface` no?

Versatilidad o flexibilidad, puede representar cualquier tipo, incluyendo uniones (string | number), tuplas ([number, number]), tipos primitivos (string, number, boolean), etc. Mientras que interface solo puede representar la forma de un objeto o funcion.

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

Sí, ambas pueden extenderse, aunque se hace de diferente manera.

Con interface se utiliza extends:

interface Persona {
nombre: string;
}

interface Alumno extends Persona {
legajo: number;
}

Con type se pueden combinar tipos mediante intersecciones (&):

type Persona = {
nombre: string;
};

type Alumno = Persona & {
legajo: number;
};

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

Elegiría interface porque describe claramente la estructura de un objeto y permite extenderla fácilmente si en el futuro necesitamos agregar características comunes a otros tipos de entidades.
