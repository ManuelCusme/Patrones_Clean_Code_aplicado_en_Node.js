// services/pedidoService.js
const { calcularDescuento } = require('./descuentoService');
const { calcularEnvio } = require('./envioService');

const IVA = 0.15; // Impuesto al Valor Agregado

function calcularSubtotal(productos) {
    return productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
}

function calcularIVA(subtotalConDescuento) {
    return subtotalConDescuento * IVA;
}

function calcularTotal(subtotal, descuento, iva, envio) {
    return subtotal - descuento + iva + envio;
}

function procesarPedido(cliente, productos) {
    const subtotal = calcularSubtotal(productos);
    const descuento = calcularDescuento(subtotal);
    const subtotalConDescuento = subtotal - descuento;
    const iva = calcularIVA(subtotalConDescuento);
    const envio = calcularEnvio(cliente.ciudad);
    const total = calcularTotal(subtotal, descuento, iva, envio);

    return {
        cliente,
        productos,
        subtotal,
        descuento,
        iva,
        envio,
        total
    };
}

module.exports = { procesarPedido };