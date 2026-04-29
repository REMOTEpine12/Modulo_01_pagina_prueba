let librosleidos = ["El señor de los anillos", "Harry Potter", "El código Da Vinci", "Cien años de soledad", "El principito"];
let libro = ["Los Cronopolios"]

function agregarlibro(libro) {
    librosleidos.push(libro);
    console.log("Libro agregado: " + libro);
}

function mostrarlibros() {
    console.log("Libros leídos:");
    for (let i = 0; i < librosleidos.length; i++) {
        console.log("- " + librosleidos[i]);
    }
}

agregarlibro(libro);
mostrarlibros();
