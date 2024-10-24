let task = ["comprar", "Estudiar", "limpiar casa"]

console.log("Lista de Tareas");

task.push("ir a la escuela");

task.splice(3,1)

task.push("ir a la casa");

//----------------- Usando forEach ---------------------//
let tasks = ["comprar", "Estudiar"];

tasks.forEach((task,index)=>{
    console.log('Tarea' + $(index) + ' :' + $(task));
    
})