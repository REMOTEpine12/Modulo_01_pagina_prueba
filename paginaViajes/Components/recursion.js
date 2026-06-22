function buscarRegalo(gifts, giftName, index = 0) {
    // Validación de entrada: verificar que gifts sea un arreglo
    if (!Array.isArray(gifts)) {
        return "Error: La lista proporcionada no es válida.";
    }

    // Caso base 1: El índice llegó al final sin encontrar el regalo
    if (index === gifts.length) {
        return `El regalo "${giftName}" no está en la lista.`;
    }

    // Caso base 2: Se encontró el regalo en la posición actual
    if (gifts[index] === giftName) {
        return `¡Regalo encontrado! "${giftName}" está en la posición ${index}.`;
    }

    // Llamada recursiva: avanza al siguiente índice
    return buscarRegalo(gifts, giftName, index + 1);
}

// --- Pruebas de funcionamiento ---
const listaDeRegalos = ["Pelota", "Libro", "Consola", "Audífonos", "Suéter"];

console.log(buscarRegalo(listaDeRegalos, "Consola"));   // "¡Regalo encontrado! "Consola" está en la posición 2."
console.log(buscarRegalo(listaDeRegalos, "Calcetines")); // "El regalo "Calcetines" no está en la lista."
console.log(buscarRegalo("No soy un array", "Libro"));  // "Error: La lista proporcionada no es válida."