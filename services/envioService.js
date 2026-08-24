// services/envioService.js
function calcularEnvio(ciudad) {
    const tarifas = {
        "Ambato": 5,
        "Quito": 10,
        "Guayaquil": 12
    };
    return tarifas[ciudad] || 15; // 15 es el valor por defecto
}

module.exports = { calcularEnvio };