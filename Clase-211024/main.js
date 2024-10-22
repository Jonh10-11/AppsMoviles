//FUNCIÓN FLECHA
//1. ************************* */
function mifuncion (a,b){
    return a + b;
}

console.log (mifuncion (2,3));


//2. Estructura de función flecha
let salu2 = () => {};


//3. ************************* */
let saludo = (nombre) => {
    return 'Saludos ' + nombre
}

console.log (saludo ('Juan'));


//4. ************************* */
let saludar = nombre => 'Saludos ' + nombre;

console.log (saludar ('Ramirez'));


//5. Pasar parametros **********/
let suma =(a,b) => a + b;
console.log (suma (5,8));


//6. Crear Objeto en funcion flecha */
let obj = () => ({nombre:'Roberto', edad:20})

// Llamamos al objeto y accedemos a la propiedad
console.log (obj().nombre);


//7. Arreglos **************** */
let arrFunc = () => [1,2,3,4,5];

//accediendo a todo al arreglo
console.log (arrFunc());

//accediendo al arreglo
console.log (arrFunc()[4]);