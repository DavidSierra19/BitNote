"use strict"
//Hacer un programa que envie un mensaje a la consola y a la interfaz de usuario
/*
console.log("Hola mundo")
document.write("Hola mundo")
*/

// Hacer un progrma que reciba un nombre por parte del usuario, si exite nombre saludar por nombre de otra manera saludar Hola.
/* 
const nombreUsuario = prompt("Introdusca su nombre");

if(nombreUsuario){
    document.write("Hola ", nombreUsuario, "!")
}else{
    document.write("Hola ")
}
*/

//HACER UN PROGRAMA QUE RECIBA UN NOMBRE POR PARTE DEL USUARIO, SI EXITE NOMBRE SALUDAR POR NOMBRE DE OTRA MANERA SALUDAR HOLA CON COMANDO SWITCH.
/* 
const Nombre = prompt("Inserte nombre")
console.log(typeof Nombre)
switch (Nombre){
  case Nombre:
    console.log("Hola", Nombre)
    break;
  default:
    console.log("Hola ")
    break;
} 
*/

//---HACER UN PROGRAMA QUE PIDA APARTE NOMBRE Y APELLIDO Y CONTACATENE LOS DOS MOSTRANDO EL NOMBRE COMPLETO 
/* 
let Nombre = prompt("Ingrese su Nombre");
let Apellido = prompt("Ingrese su Apellido");

console.log(typeof(Nombre))
console.log(isNaN(Nombre))

// Interpolacion de variables
document.write(`${Nombre} ${Apellido}`)
 */

//-------HACER UN PROGRAMA QUE RECIBA 2 NUMERO AL USURAIO Y LOS SUME------------
/* 
let Numero1 = prompt("Inserte Numero1");
let Numero2 = prompt("Inserte Numero2");
let Resultado = 0;

Numero1 = Number(Numero1);
Numero2 = Number(Numero2);

if(isNaN(Numero1) == true||isNaN(Numero2) == true){
  document.write("Solo se acepta numeros");
}else{
  Resultado = Numero1 + Numero2;
  document.write(Resultado) 
}
 */
//--------- HACER UN PROGRAMA QUE RECIBA DEL USUARIO UN NUMERO Y MUESTRE SI ES CERO, DE OTRA MANERA MUESTRE SI ES POSITIVO O SI ES NEGATIVO
/* 
let Numero1 = parseFloat(prompt("Ingrese un número"));
console.log(isNaN(Numero1));

if(isNaN(Numero1) == true){
  document.write("Solo se acepta numeros");
}else if (Numero1 == 0) {
  document.write("El número que ingresó es el cero");
} else if(Numero1 > 0){
  document.write("El número que ingresó es positivo");
} else{
  document.write("El número que ingresó es negativo");
} 
 */
//----------HACER UN PROGRAMA QUE RECIBA DEL USUARIO  DOS NUMERO Y MUETSRE CUAL ES EL NUMERO MAYOR Y UCAL ES EL NUMERO MENOR
/* 
let Numero1 = parseFloat(prompt("Ingrese un número 1"));
let Numero2 = parseFloat(prompt("Ingrese un número 2"));

if( isNaN(Numero1) == true || isNaN(Numero2) == true ){
   document.write("Solo se acepta numeros");
}else if (Numero1 == Numero2) {
  document.write("Los numero que ingreso son iguales");
} else if (Numero1 > Numero2){
  document.write(`El numero ${Numero1} es el numero mayor y el numero ${Numero2} es el menor`);
} else{
  document.write(`El número ${Numero1} es el numero menor y el numero ${Numero2} es el mayor`);
} */