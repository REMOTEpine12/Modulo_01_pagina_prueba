const nombres = [
  "Maria", "Juan", "Jose", "Francisco", "Pedro", "Francisca", "Antonio", "Manuel", "Ana", "Joseph", "Juana", "Miguel", "Josefa", "Antonia", 
  "Joan", "Catalina", "Martin", "Teresa", "Rosa", "Manuela", "Domingo", 
  "Isabel", "Josepha", "Ramon", "Diego", "Andres", "Magdalena", "Pere", 
  "Anna", "Ysabel", "Luis", "Margarita", "Theresa", "Margarida", "Joaquin", 
  "Josef", "Vicente", "Angela", "Jaume", "Alonso", "Salvador", "Fernando", 
  "Dolores", "Jaime", "Agustin", "Tomas", "Sebastian", "Carmen", "Antoni", 
  "Gregorio", "Miquel", "Mariana", "Cathalina", "Lorenzo", "Luisa", 
  "Mariano", "Joana", "Santiago", "Paula", "Gabriel", "Nicolas", 
  "Bartolome", "Rafael", "Bernardo", "Esteban", "Pablo", "Felipe", 
  "Carlos", "Julian", "Lucia", "Vicenta", "Alfonso", "Ramona", "Angel", 
  "Agustina", "Thomas", "Josep", "Joaquina", "Benito", "Juliana", "Petra", 
  "Leonor", "Clara", "Blas", "Catharina", "Madalena", "Narciso", "Felix", 
  "Simon", "Gaspar", "Agueda", "Francesch", "Gregoria", "Pau", "Marianna", 
  "Isidro", "Beatriz", "Micaela", "Rita", "Geronimo"
];


const nombresOrdenados = nombres.sort((a, b) => a.localeCompare(b));

console.log("Nombres ordenados alfabéticamente:", nombresOrdenados);

console.log( nombresOrdenados[0][0]); //Imprime solo la primera letra del nombre seleccionado

function obtenerPar(nombres) {
    let puntero1 = 0;
    let puntero2 = 1;
    const nombresPares = [];

    while (puntero2 < nombres.length) {
        if(nombres[puntero1][0] === nombres[puntero2][0]) {
            nombresPares.push([nombres[puntero1], nombres[puntero2]]);
        }
        puntero1++;
        puntero2++;
        
    }
    return nombresPares;
}

const nombresPares = obtenerPar(nombresOrdenados);

console.log("Nombres con la misma letra inicial:", nombresPares);