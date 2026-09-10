// EJERCICIO 18 - Sistema de notificaciones

export abstract class Notificacion {
    abstract enviar(mensaje: string): void;
}

export class NotificacionEmail extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`Enviando email con el mensaje: ${mensaje}`);
    }
}

export class NotificacionSMS extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`Enviando SMS con el mensaje: ${mensaje}`);
    }
}

export class NotificacionPush extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`Enviando notificación push con el mensaje: ${mensaje}`);
    }
}

export function enviarNotificaciones(notificaciones: Notificacion[], mensaje: string): void {
    notificaciones.forEach(notificacion => {
        notificacion.enviar(mensaje);
    });
}
