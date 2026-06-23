function encontrarMaximo(arr, inicio = 0, fin = arr.length - 1) {
    // Caso base: si el arreglo tiene un solo elemento
    if (inicio === fin) {
        return arr[inicio];
    }

    // Caso base: si el arreglo tiene dos elementos, comparamos directamente
    if (fin === inicio + 1) {
        return Math.max(arr[inicio], arr[fin]);
    }

    // 1. Divide: calculamos el punto medio
    const medio = Math.floor((inicio + fin) / 2);

    // 2. Resuelve recursivamente para cada mitad
    const maxIzq = encontrarMaximo(arr, inicio, medio);
    const maxDer = encontrarMaximo(arr, medio + 1, fin);

    // 3. Combina: comparamos los resultados de las dos mitades
    return Math.max(maxIzq, maxDer);
}

// Ejemplo de uso:
const numeros = [3, 15, 7, 2, 29, 1, 8];
const maximo = encontrarMaximo(numeros);

console.log(`El número máximo es: ${maximo}`); 