// EJERCICIO 17 - Sistema de pagos

export interface MetodoPago {
    pagar(monto: number): void;
}

export class TarjetaCredito implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pago realizado con tarjeta de crédito por $${monto}`);
    }
}

export class Transferencia implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pago realizado con transferencia por $${monto}`);
    }
}

export class MercadoPago implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pago realizado con Mercado Pago por $${monto}`);
    }
}

export class Efectivo implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pago realizado en efectivo por $${monto}`);
    }
}

export function procesarPago(metodo: MetodoPago, monto: number): void {
    metodo.pagar(monto);
}
