// 1. CONFIGURACIÓN INICIAL Y SELECCIÓN DE ELEMENTOS DEL DOM
// Seleccionamos el elemento <form> del documento (DOM) y lo guardamos en una constante.
// Usamos 'querySelector' que busca el primer elemento que coincida con la etiqueta 'form'.
const formulario = document.querySelector('form');

// Creamos un nuevo elemento <div> en memoria (aún no está en la página).
// Este servirá como el contenedor principal de todos los comentarios.
const contenedorComentarios = document.createElement('div');

// Le asignamos un ID a este nuevo div para poder identificarlo o darle estilos con CSS después.
contenedorComentarios.id = 'lista-comentarios';

// Insertamos el nuevo contenedor en el DOM, justo después del formulario.
// 'formulario.parentNode' accede al elemento padre del formulario (el <body>).
// 'insertBefore' coloca el 'contenedorComentarios' antes del elemento que le sigue al formulario ('formulario.nextSibling').
formulario.parentNode.insertBefore(contenedorComentarios, formulario.nextSibling);



// 2. MANEJO DE EVENTOS (EVENT LISTENERS)
// Añadimos un "escuchador de eventos" al formulario. 
// Le decimos que preste atención al evento 'submit', que ocurre al hacer clic en el botón "Enviar".
// Cuando ocurra, ejecutará la función que definimos a continuación.
formulario.addEventListener('submit', function(evento) {
    
    // PREVENIR COMPORTAMIENTO POR DEFECTO
    // 'evento.preventDefault()' evita que el navegador recargue la página o intente 
    // enviar los datos a './forms.html' como dice el atributo 'action' de tu HTML.
    evento.preventDefault(); 

    
    // 3. CAPTURA DE DATOS Y USO DE OBJETOS
    // Buscamos el elemento input con el id 'name' y extraemos su valor (el texto escrito).
    const valorNombre = document.getElementById('name').value;
    
    // Buscamos el elemento textarea con el id 'msg' y extraemos su valor.
    const valorMensaje = document.getElementById('msg').value;

    // Validación rápida: Verificamos que los campos no estén vacíos antes de continuar.
    // 'trim()' elimina los espacios en blanco al principio y al final para evitar comentarios vacíos.
    if (valorNombre.trim() === '' || valorMensaje.trim() === '') {
        // Si están vacíos, mostramos una alerta y detenemos la ejecución de la función con 'return'.
        alert('Por favor, completa tu nombre y tu mensaje.');
        return; 
    }

    // Creamos un OBJETO de JavaScript para almacenar la información del comentario estructurada.
    // Esto hace que el código sea más organizado y fácil de manejar.
    const nuevoComentario = {
        autor: valorNombre,
        texto: valorMensaje,
        fecha: new Date().toLocaleTimeString() // Agregamos un extra: la hora exacta en formato local.
    };

    // Llamamos a una función separada (que crearemos abajo) encargada de dibujar el comentario en pantalla.
    // Le pasamos nuestro objeto 'nuevoComentario' como parámetro.
    renderizarComentario(nuevoComentario);

    // Finalmente, limpiamos los campos del formulario para que el usuario pueda escribir otro mensaje.
    formulario.reset();
});



// 4. FUNCIONES PARA RENDERIZAR Y MANIPULAR EL DOM
// Definimos la función encargada de construir el HTML del comentario dinámicamente.
// Recibe como parámetro (datos) el objeto que creamos en el paso anterior.
function renderizarComentario(datos) {
    
    // Creamos un div individual que representará este comentario en particular.
    const cajaComentario = document.createElement('div');
    
    // Le agregamos una clase para que en el futuro puedas estilizarlo fácilmente con CSS o Tailwind.
    cajaComentario.classList.add('comentario-item');
    // Le aplicamos unos estilos básicos directamente en JS para separar visualmente los comentarios.
    cajaComentario.style.borderBottom = "1px solid #ccc";
    cajaComentario.style.padding = "10px 0";

    // Creamos un elemento <strong> (texto en negrita) para el nombre del autor.
    const elementoAutor = document.createElement('strong');
    // Le asignamos como contenido el 'autor' que viene dentro de nuestro objeto 'datos'.
    elementoAutor.textContent = datos.autor + " "; 

    // Creamos un elemento <span> para mostrar la hora en la que se publicó.
    const elementoHora = document.createElement('span');
    elementoHora.textContent = "(" + datos.fecha + "):";
    elementoHora.style.fontSize = "0.8em"; // Hacemos la letra un poco más pequeña.
    elementoHora.style.color = "gray";

    // Creamos un elemento <p> (párrafo) para el texto principal del mensaje.
    const elementoTexto = document.createElement('p');
    // Le asignamos el 'texto' guardado en nuestro objeto 'datos'.
    elementoTexto.textContent = datos.texto;

    // Creamos el BOTÓN DE ELIMINAR para este comentario en específico.
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar comentario';
    botonEliminar.style.marginTop = "5px"; // Pequeño margen superior por estética.
    botonEliminar.style.cursor = "pointer";

    
    // 5. EVENTO DE ELIMINACIÓN (CLOSURE)
    // Le asignamos un evento 'click' única y exclusivamente a este botón "Eliminar" que acabamos de crear.
    botonEliminar.addEventListener('click', function() {
        // Cuando se hace clic, tomamos la 'cajaComentario' (el div padre que contiene todo este bloque) 
        // y utilizamos el método 'remove()' del DOM para borrarlo completamente de la página.
        cajaComentario.remove();
    });

    
    // 6. ENSAMBLAJE (APPENDCHILD)
    // Ahora que tenemos todas las piezas sueltas (nombre, hora, texto, botón), 
    // las metemos dentro de nuestra 'cajaComentario' principal usando 'appendChild'.
    // El orden en el que hacemos el 'appendChild' determina el orden en que aparecen en pantalla.
    cajaComentario.appendChild(elementoAutor);
    cajaComentario.appendChild(elementoHora);
    cajaComentario.appendChild(elementoTexto);
    cajaComentario.appendChild(botonEliminar);

    // Finalmente, tomamos toda esta caja ya armada y la metemos dentro de nuestro 
    // 'contenedorComentarios' general que pusimos en el DOM al principio del script.
    contenedorComentarios.appendChild(cajaComentario);
}