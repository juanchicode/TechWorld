// 1. Configuración Inicial
console.log("1. Configuración Inicial");

let productos = [
    { id: 1, nombre: "Notebook Dell Inspiron 3535 15.6", precio: 860000, stock: 17 },
    { id: 2, nombre: "Mouse Inalámbrico M280 Logitech Color Plateado", precio: 18000, stock: 43 },
    { id: 3, nombre: "Teclado Mecánico de Aluminio K835 Tkl Logitech G", precio: 122000, stock: 37 },
    { id: 4, nombre: "Monitor 27 Gamer Curvo Samsung D366", precio: 240000, stock: 24 },
    { id: 5, nombre: "Auriculares Jbl Quantum Headset Negro Gamer", precio: 68500, stock: 32 }
];

console.log("Array inicial de productos:", productos);
console.log("\n--------------------------------------------------\n");


// 2. Operaciones Básicas y Acceso
console.log("2. Operaciones Básicas y Acceso");

console.log("Longitud del array:", productos.length);

console.log("Nombre del segundo elemento:", productos[1].nombre);
console.log("Nombre del cuarto elemento:", productos[3].nombre);
console.log("\n--------------------------------------------------\n");


// 3. Recorrido del Array
console.log("3. Recorrido del Array");

console.log("Recorrido con for...of:");
for (const producto of productos) {
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
}

console.log("\nRecorrido con forEach:");
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
});
console.log("\n--------------------------------------------------\n");


// 4. Manipulación de Arrays
console.log("4. Manipulación de Arrays");

console.log("1. Agregando dos elementos con push():");
productos.push({ id: 6, nombre: "Silla Gamer Dyvan 73210 Ergonomica Reclinable Color Rojo", precio: 156000, stock: 10 });
productos.push({ id: 7, nombre: "Webcam Logitech Brio 100 Full Hd", precio: 103000, stock: 25 });
console.log("Array después de push():", productos);

console.log("\n2. Eliminando el último elemento con pop():");
const productoEliminadoPop = productos.pop();
console.log("Elemento eliminado:", productoEliminadoPop);
console.log("Array después de pop():", productos);

console.log("\n3. Agregando un elemento al inicio con unshift():");
productos.unshift({ id: 0, nombre: "Mouse Pad gamer FG Tech Sven FGT-MP1 XL", precio: 9600, stock: 50 });
console.log("Array después de unshift():", productos);

console.log("\n4. Eliminando el primer elemento con shift():");
const productoEliminadoShift = productos.shift();
console.log("Elemento eliminado:", productoEliminadoShift);
console.log("Array después de shift():", productos);

console.log("\n5. Creando nuevo array con productos en stock (filter):");
const productosConStock = productos.filter(producto => producto.stock > 0);
console.log("Productos con stock:", productosConStock);

console.log("\n6. Creando nuevo array solo con los nombres (map):");
const nombresProductos = productos.map(producto => producto.nombre);
console.log("Nombres de productos:", nombresProductos);

console.log("\n7. Encontrando un producto con id=3 (find):");
const productoEncontrado = productos.find(producto => producto.id === 3);
if (productoEncontrado) {
    console.log("Producto encontrado:", productoEncontrado);
} else {
    console.log("No se encontró el producto con id=3.");
}

console.log("\n8. Creando nuevo array ordenado por precio descendente (sort):");
const productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
console.log("Productos ordenados por precio:", productosOrdenados);

console.log("\n--------------------------------------------------\n");
console.log("Array original sin modificar (excepto por push, pop, shift, unshift):");
console.log(productos);
