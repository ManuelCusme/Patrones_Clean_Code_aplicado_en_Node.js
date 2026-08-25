const { crearCliente } = require('./models/cliente');
const { crearProducto } = require('./models/producto');
const { procesarPedido } = require('./services/pedidoService');
const { imprimirFactura, notificarCliente } = require('./utils/factura');

// Datos de entrada
const cliente = crearCliente("Juan Pérez", "juan@gmail.com", "Ambato");
const productos = [
    crearProducto("Laptop", 850, 1),
    crearProducto("Mouse", 25, 2),
    crearProducto("Teclado", 40, 1),
    crearProducto("Monitor", 200, 1),     // Nuevo producto
    crearProducto("Audífonos", 30, 2)     // Nuevo producto
];

// Procesar pedido
const resultado = procesarPedido(cliente, productos);

// Mostrar factura
imprimirFactura(resultado);
notificarCliente(cliente.email, resultado.total);

// Validación final (KISS)
if (resultado.total > 0 && cliente.email !== "" && cliente.nombre !== "") {
    console.log("Pedido procesado correctamente.");
}