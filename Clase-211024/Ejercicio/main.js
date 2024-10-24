// Inicializa un array vacío para almacenar las tareas
const tareas = [];

// Función para actualizar la consola y mostrar la lista de tareas
function actualizarConsola() {
    console.clear(); // Limpia la consola para mostrar la nueva lista
    console.log("Lista de Tareas:", tareas); // Muestra la lista actual de tareas en la consola
}

// Función para agregar una nueva tarea
function agregarTarea() {
    // Obtiene el elemento de entrada de texto donde se escribe la tarea
    const entradaTarea = document.getElementById('taskInput');
    // Obtiene el valor del input, eliminando espacios al principio y al final
    const valorTarea = entradaTarea.value.trim();
    
    // Verifica si el valor de la tarea no está vacío
    if (valorTarea) {
        tareas.push(valorTarea); // Agrega la tarea al array de tareas
        entradaTarea.value = ''; // Limpia el campo de entrada para que esté vacío para la próxima tarea
        renderizarTareas(); // Llama a la función para renderizar las tareas en el DOM
        actualizarConsola(); // Actualiza la consola con la nueva lista de tareas
    }
}

// Función para eliminar una tarea por su índice
function eliminarTarea(indice) {
    tareas.splice(indice, 1); // Elimina la tarea en el índice especificado del array de tareas
    renderizarTareas(); // Renderiza nuevamente las tareas después de eliminar una
    actualizarConsola(); // Actualiza la consola con la nueva lista de tareas
}

// Función para renderizar la lista de tareas en el DOM
function renderizarTareas() {
    // Obtiene el elemento del DOM donde se mostrarán las tareas
    const divListaTareas = document.getElementById('taskList');
    divListaTareas.innerHTML = ''; // Limpia el contenido previo del elemento

    // Itera sobre cada tarea en el array usando un bucle for
    for (let i = 0; i < tareas.length; i++) {
        // Crea un nuevo elemento div para cada tarea
        const divTarea = document.createElement('div');
        // Establece el contenido del div con la tarea y un botón para eliminarla
        divTarea.innerHTML = `${tareas[i]} <button onclick="eliminarTarea(${i})">Eliminar</button>`;
        // Agrega el nuevo div al contenedor de tareas en el DOM
        divListaTareas.appendChild(divTarea);
    }
}

// Asigna un evento al botón "Agregar Tarea" que llama a agregarTarea cuando se hace clic
document.getElementById('addTaskButton').addEventListener('click', agregarTarea);
// Asigna un evento al campo de entrada que llama a agregarTarea cuando se presiona 'Enter'
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') agregarTarea(); // Si se presiona 'Enter', agrega la tarea
});