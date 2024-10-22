// Inicializa un array vacío para almacenar las tareas
const tasks = [];

// Función para actualizar la consola y mostrar la lista de tareas
function updateConsole() {
    console.clear(); // Limpia la consola para mostrar la nueva lista
    console.log("Lista de Tareas:", tasks); // Muestra la lista actual de tareas en la consola
}

// Función para agregar una nueva tarea
function addTask() {
    // Obtiene el elemento de entrada de texto donde se escribe la tarea
    const taskInput = document.getElementById('taskInput');
    // Obtiene el valor del input, eliminando espacios al principio y al final
    const taskValue = taskInput.value.trim();
    
    // Verifica si el valor de la tarea no está vacío
    if (taskValue) {
        tasks.push(taskValue); // Agrega la tarea al array de tareas
        taskInput.value = ''; // Limpia el campo de entrada para que esté vacío para la próxima tarea
        renderTasks(); // Llama a la función para renderizar las tareas en el DOM
        updateConsole(); // Actualiza la consola con la nueva lista de tareas
    }
}

// Función para eliminar una tarea por su índice
function removeTask(index) {
    tasks.splice(index, 1); // Elimina la tarea en el índice especificado del array de tareas
    renderTasks(); // Renderiza nuevamente las tareas después de eliminar una
    updateConsole(); // Actualiza la consola con la nueva lista de tareas
}

// Función para renderizar la lista de tareas en el DOM
function renderTasks() {
    // Obtiene el elemento del DOM donde se mostrarán las tareas
    const taskListDiv = document.getElementById('taskList');
    taskListDiv.innerHTML = ''; // Limpia el contenido previo del elemento

    // Itera sobre cada tarea en el array usando un bucle for
    for (let i = 0; i < tasks.length; i++) {
        // Crea un nuevo elemento div para cada tarea
        const taskDiv = document.createElement('div');
        // Establece el contenido del div con la tarea y un botón para eliminarla
        taskDiv.innerHTML = `${tasks[i]} <button onclick="removeTask(${i})">Eliminar</button>`;
        // Agrega el nuevo div al contenedor de tareas en el DOM
        taskListDiv.appendChild(taskDiv);
    }
}

// Asigna un evento al botón "Agregar Tarea" que llama a addTask cuando se hace clic
document.getElementById('addTaskButton').addEventListener('click', addTask);
// Asigna un evento al campo de entrada que llama a addTask cuando se presiona 'Enter'
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') addTask(); // Si se presiona 'Enter', agrega la tarea
});