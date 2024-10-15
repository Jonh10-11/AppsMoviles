//alert("Do you like hurting other people?");

//Funciones

/*function hello(){
    console.log('Hola js');
    console.log('Hola html');
    console.log('Hola css');

}

hello();*/


//Retorno de una funcion

/*function hello(){
    return "hola js";

}

const result = hello();
console.log(result);*/


//hello();

/*function hello(){
    return {};
}

//const result = hello();
console.log(hello());*/

/*function hello(){
    return {
        nombre:'Juan'
    }
}
console.log(hello());*/


//Funcioon que retorna a otra funcion
/*function hello(){
    return function (){
        return 'Hola JS'

    }
}

console.log(hello()());*/



//=== USO DE PARAMETROS EN FUNCIONES ===
/*function helloconJS(name){
        return 'Hola' + name
}

console.log('Juan');
console.log('Caballo');*/


//Pasar más de un parametro a la funcion
/*function helloconJS(x,y){
    return x / y;
}

console.log(helloconJS(10,20));
console.log(helloconJS(10));*/


//Control de errores en parametros
/*function helloconJS(x,y){
    if(y ==undefined){
        y=0;
    }
    return x + y;
}

console.log(helloconJS(10));*/



//=== OBJETOS ===
const user = {
    nombre : "Caballo",
    apellido : "Sánchez",
    edad : 50,
    edoCivil : 'soltero',
    domicilio : {
        ciudad : "CDMX",
        calle : "Agustin Melgar",
        numero : 100125
    },
    amigos : ['Luis', 'Mclovin'],
    activo : false,
    sendMensaje: function(){
        return 'Enviando mensaje'
    }
}

//alert ciudad, calle, numero...
//consola, los amigos
//alert (Activo o Dado de baja)
//consola nombre, apellido, estado civil.!!
//alert (estado del mensaje)

alert(`Ciudad: ${user.domicilio.ciudad}, Calle: ${user.domicilio.calle}, Número: ${user.domicilio.numero}`);

console.log(user.amigos);

alert(user.activo ? 'Activo' : 'Dado de baja');

console.log(`Nombre: ${user.nombre}, Apellido: ${user.apellido}, Estado Civil: ${user.edoCivil}`);

alert(user.sendMensaje());