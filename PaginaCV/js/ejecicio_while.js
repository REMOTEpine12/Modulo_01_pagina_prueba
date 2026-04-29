/*
Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while).

*/

//Objeto con frutas
const frutas = {
    acidas: ["limón", "naranja", "pomelo"],
    dulces: ["manzana", "pera", "plátano"],
    tropicales: ["mango", "piña", "papaya"]
};


/*
// Inicializar el contador de frutas total
let cantidadFrutas = 0;

// No tomar el objeto como arreglo, sino rrecorrerlo con un ciclo for...in 
for (const tipo in frutas) {
    // obtener el nombre del tipo de fruta (nombre del arreglo)
    const listafrutas = frutas[tipo];

    // contar la cantidad de frutas en cada tipo
    for (let i = 0; i < listafrutas.length; i++) {
        console.log(listafrutas[i]);
        cantidadFrutas++;
}       
}

console.log("Cantidad total de frutas: " + cantidadFrutas);
*/

//Usar un ciclo while para contar las frutas

let cantidadFrutas = 0;
let index = 0;
while (index < Object.keys(frutas).length) {
    //Obtener el nombre del tipo de fruta (nombre del arreglo)
    let cantidadtipo = Object.keys(frutas)[index];
    // Obtener la lista de frutas del tipo actual
    let listafrutas = frutas[cantidadtipo];
    
    let indexFrutas = 0;
    // Contar la cantidad de frutas en el tipo actual
    while (indexFrutas < listafrutas.length) {
        console.log(listafrutas[indexFrutas]);
        
        cantidadFrutas++;
        indexFrutas++;
    }
    index++;
}

