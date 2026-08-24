// services/descuentoService.js
function calcularDescuento(subtotal) {
    if (subtotal >= 1000) return subtotal * 0.15;
    if (subtotal >= 500) return subtotal * 0.10;
    if (subtotal >= 100) return subtotal * 0.05;
    return 0;
}

module.exports = { calcularDescuento };