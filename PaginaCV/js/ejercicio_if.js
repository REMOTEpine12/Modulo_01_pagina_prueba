/*
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.

*/


notas = [92, 77, 66, 55]


for (let index = 0; index < notas.length; index++) {
    if (notas[index] >= 90) {
        console.log(notas[index] + "  Tu calificación es Excelente")
    } else if (notas[index] >= 75 && notas[index] < 90) { 
        console.log(notas[index] + "  Tu calificación está Bien")
    } else if (notas[index] >= 60 && notas[index] < 75) {
        console.log(notas[index] + "  Tu calificación es Suficiente")
    } else {
        console.log(notas[index] + "  No apruebas este curso")
    }
    
}