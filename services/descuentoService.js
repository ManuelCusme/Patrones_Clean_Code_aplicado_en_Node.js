// services/descuentoService.js

// Rangos de descuento
const UMBRAL_DESCUENTO_ALTO = 1000;
const UMBRAL_DESCUENTO_MEDIO = 500;
const UMBRAL_DESCUENTO_BAJO = 100;

// Porcentajes de descuento
const PORCENTAJE_DESCUENTO_ALTO = 0.15;
const PORCENTAJE_DESCUENTO_MEDIO = 0.10;
const PORCENTAJE_DESCUENTO_BAJO = 0.05;

function calcularDescuento(subtotal) {
    if (subtotal >= UMBRAL_DESCUENTO_ALTO) {
        return subtotal * PORCENTAJE_DESCUENTO_ALTO;
    }
    if (subtotal >= UMBRAL_DESCUENTO_MEDIO) {
        return subtotal * PORCENTAJE_DESCUENTO_MEDIO;
    }
    if (subtotal >= UMBRAL_DESCUENTO_BAJO) {
        return subtotal * PORCENTAJE_DESCUENTO_BAJO;
    }
    return 0;
}

module.exports = { calcularDescuento };