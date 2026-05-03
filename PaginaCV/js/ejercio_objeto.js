/* 
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, 
autor: (string) el autor del libro, anio: (number) el año de publicación, 
estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.


También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. 
Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'


Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.

*/


const libro = {
    titulo: "Los Cronopolios",
    autor: "Luis Panini",
    anio: 2016,
    estado: "disponible", //prestado o disponible
    describirLibro: function() {
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },
    capitulos: ["Las espirales del tiempo", "la oscuridad paralela", "La noche infinita"],
    agregarCap: function(capitulo) {
        this.capitulos.push(capitulo);
    },
    eliminarCap: function(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index > -1) {
            this.capitulos.splice(index, 1);
        }
    }
};


libro.describirLibro();