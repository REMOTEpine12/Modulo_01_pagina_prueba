//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];


const productosFiltrados = productos.filter(producto => producto.precio < 100);

console.log("Productos con precio menor a 100:", productosFiltrados);


const productosOrdenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log("Productos ordenados por Nombre:", productosOrdenados);

const arrayNombres = productos.map(producto => producto.nombre);

console.log("Conjunto de nombres de productos: ", arrayNombres);
