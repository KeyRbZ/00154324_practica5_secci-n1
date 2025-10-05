// Precio total del carrito de la compra
const carrito = {
    productos: [
        { nombre: "Papel higiénico", unidades: 2, precio: 5 },
        { nombre: "Leche", unidades: 3, precio: 2 }
    ],
    precioTotal: 0
};

// Calculo el precio total sumando (unidades * precio) 
for (let prod of carrito.productos) {
    carrito.precioTotal += prod.unidades * prod.precio;
}

console.log(`Precio total del carrito: ${carrito.precioTotal}`);
document.getElementById("resultado").textContent = 
    `Precio total del carrito: ${carrito.precioTotal}`;

    