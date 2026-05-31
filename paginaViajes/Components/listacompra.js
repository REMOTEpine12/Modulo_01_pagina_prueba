const listadeCompras = new Set();



const agregarCompra = (compra) => {
    listadeCompras.add(compra);
    console.log(`Compra agregada: ${compra}`);
};

const eliminarCompra = (compra) => {
    if (listadeCompras.has(compra)) {
        listadeCompras.delete(compra);
        console.log('Compra eliminada: ' + compra);
    }
};

const mostrarLista = () => {
    console.log("Lista de Compras: ");
    listadeCompras.forEach((compra) => {
        console.log("- " + compra);
    })
};

export { agregarCompra, eliminarCompra, mostrarLista };
