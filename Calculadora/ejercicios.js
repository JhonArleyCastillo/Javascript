/* Función para sumar
function sumar(num1, num2) {
    return num1 + num2;
  }
  
  // Función para restar
  function restar(num1, num2) {
    return num1 - num2;
  }
  
  // Función para multiplicar
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  // Función para dividir
  function dividir(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return 'No se puede dividir por cero';
    }
  }
  */

//ejercicio 1
/*let edad = parseFloat(prompt("Introduce tu edad"));
 if (edad >= 18) {
      alert("Eres mayor de edad. Tu edad es: " + edad);
  } else if (edad <= 17){
    alert("Eres menor de edad. Tu edad es: " + edad);
  }
 else if{
  alert("Por favor, ingresa un número válido para la edad.");
}*/

//ejercicio 2//

/*let nota1 = parseFloat(prompt("Introduce la primera nota (de 1 a 10)"));
let nota2 = parseFloat(prompt("Introduce la segunda nota (de 1 a 10)"));
let nota3 = parseFloat(prompt("Introduce la tercera nota (de 1 a 10)"));
let promedio = (nota1 + nota2 + nota3) / 3;
if (promedio >= 6) {
  alert( "El estudiante ha aprobado el curso con un promedio de " + promedio);
  }else if (promedio < 6){
    alert( "El estudiante ha reprobado el curso con un promedio de " + promedio);
    }
    else {
      alert("Las notas deben estar en el rango de 1 a 10.");
    }
document.write (promedio)
  
  */
 //ejercicio 3//

 /*let numeroa =parseFloat(prompt("escriba el numeroA"));
 let numerob =parseFloat(prompt("escriba el numeroB"));
 if (numeroa > numerob) {
   alert('A es mayor que B');
 } 
 else if (numeroa < numerob) {
   alert('A es menor que B');
 } 
 else {
   alert('A es igual a B');
  }
 */
//ejercicio 4//

/*const numeros = [];
for (let i = 0; i < 10; i++) {
  const numero = parseFloat(prompt('Introduce el número ${i + 1}:'));
  if (!isNaN(numero)) {
    numeros.push(numero)
  } else {
    alert('Por favor, ingresa un número válido.')
    i--;
  }
}
numeros.sort((a, b) => a - b);
alert('Números en orden ascendente: ' + numeros.join(', '));

*/
// ejercicio 5

/*let peso = parseFloat(prompt("Ingresa tu peso en Kg:"));

if (!isNaN(peso)) 
 if ( peso <= 40 ){
       alert("Persona baja de peso");
  }  else if (peso >= 41 && peso <= 70) {
       alert("Persona en rango promedio");
  }   else if ( peso => 71){
        alert("Persona con sobrepeso");
  }
         else {
  alert("Por favor, ingresa un peso válido.");
}

*/

//ejercicio 6

/*let numerodia = parseInt(prompt("Introduce un número entre 1 a 7:"));

switch (numerodia) {
  case 1:
    diasemana = alert("Lunes");
    break;
  case 2:
    diasemana = alert("Martes");
    break;
  case 3:
    diasemana = alert("Miercoles");
    break;
  case 4:
    diasemana = alert("Jueves");
    break;
  case 5:
    diasemana = alert("Viernes");
    break;
  case 6:
    diasemana = alert("Sabado");
    break;
  case 7:
    diasemana = alert("Domingo");
    break;
  default:
    diasemana = "Número de día no válido, por favor ingresa un número entre 1 a 7.";
    break;
}
*/
// ejercicio 7
/*let comprat= parseFloat(prompt ("Ingrese el valor total de la compra"));
let descuento;
if(comprat >= 1000){descuento = comprat * 0.2;}
else{descuento = comprat * 0.05;}
var pagototal= comprat - descuento;
alert("la cantidad a pagar es " + pagototal + "pesos");*/

//ejercicio 8

/*let horas = parseFloat(prompt("Introduce tus horas laboradas"));
if (horas <= 40){
    alert("has ganado $16000");}
  else {
    (
      alert("has ganado $20000");
    )
  }*/

// ejercicio 9
/*let person1n=(prompt("nombre"));
let person1= parseFloat(prompt("edad"));
let person2n= (prompt("nombre"));
let person2= parseFloat(prompt("edad"));
if (person1 > person2){
  alert(person1n + person1 + "es mayor que " + person2n + person2 );
}
  else if(person2 < person1){
  alert(person2n, + person2, + " es mayor que", + person1n + person1 );
}
else {
 alert(" Tienen la misma edad ")
}*/

//ejercicio 10

/*let comprat= parseInt(prompt ("Ingrese el total de camisas de la compra"));
let descuento;
if(comprat >= 3){
  alert("su descuento es del 20%");
}
else{
  alert("su descuento es del 10 %");
}*/

//ejercicio 11

/*let num1= parseFloat(prompt("Ingrese su numero1"));
let num2= parseFloat(prompt("Ingrese numero 2"));
if (num1 = num2){
  alert (num1 * num2);
}
else{
  alert(num1 + num2);
}
 */   

//ejercicio 13

/*let genero=prompt("Escriba su genero: masculino o femenino").toLowerCase('es');
let edad =parseFloat (prompt("Ingrese su edad"));
if (genero ="masculino" && edad >= 18) {
  alert("Es apto para prestar servicio");
}
else {
  alert ("No es apto");
}*/
/*let peso = prompt("ingrese su peso");
switch(true) {
    case (peso <= 40):
        alert("persona baja de peso");
        break;
    case (peso > 41 && peso <= 70):
        alert("persona en peso promedio");
        break;
    case (peso > 70):
        alert("persona con sopbrepeso");
        break;
}*/
for (let i = 0; i < 5; i++) {
  nombres(i) = prompt("Ingrese el nombre de la persona " + i + 1);
  pesos(i) = prompt("Ingrese el peso de la persona " + i + 1);
switch(true) {
    case (pesos <= 40):
        alert("persona baja de peso" + nombres + pesos);
        break;
    case (pesos > 41 && pesos <= 70):
        alert("persona en peso promedio" + nombres + pesos);
        break;
    case (pesos > 70):
        alert("persona con sopbrepeso" + nombres + pesos);
        break;
}
}  
