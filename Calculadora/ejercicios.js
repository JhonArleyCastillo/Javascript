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
//let edad = parseInt(prompt("Introduce tu edad"));
//  if (edad >= 18) {
    //  alert("Eres mayor de edad. Tu edad es: " + edad);
  //} else if {
    //alert("Eres menor de edad. Tu edad es: " + edad);
  //}
//} else {
  //alert("Por favor, ingresa un número válido para la edad.");
//}

//ejercicio 2//

/*let promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
    if (promedio >= 6) {
      alert( "El estudiante ha aprobado el curso con un promedio de " + promedio);
    } else {
      alert( "El estudiante ha reprobado el curso con un promedio de " + promedio);
    }
  let nota1 = parseInt(prompt("Introduce la primera nota (de 1 a 10)"));
  let nota2 = parseInt(prompt("Introduce la segunda nota (de 1 a 10)"));
  let nota3 = parseInt(prompt("Introduce la tercera nota (de 1 a 10)"));
      else if {
      alert("Las notas deben estar en el rango de 1 a 10.");
    }
    else {
    alert("Por favor, ingresa números válidos para las notas.");
  }
  */
 //ejercicio 3//

 /*let numeroa =parseInt(prompt("escriba el numeroA"));
 let numerob =parseInt(prompt("escriba el numeroB"));
 if (numeroa > numerob) {
   alert('A es mayor que B');
 } 
 else if ('numeroa < numerob') {
   alert('A es menor que B');
 } 
 else {
   alert('A es igual a B');
  }
 */
//ejercicio 4//

/*const numeros = [];
for (let i = 0; i < 10; i++) {
  const numero = parseInt(prompt('Introduce el número ${i + 1}:'));
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

if (!isNaN(peso)) {
  else if (peso <= 40) {
    alert("Persona baja de peso");
  } else if (peso >= 41 && peso <= 70) {
    alert("Persona en rango promedio");
  } else if {
    alert("Persona con sobrepeso");
  }
} else {
  alert("Por favor, ingresa un peso válido.");
}
*/

//ejercicio 6

/*let numerodia = parseInt(prompt("Introduce un número entre 1 y 7:"));

let diasemana;

switch (numerodia) {
  case 1:
    diasemana = "Lunes";
    break;
  case 2:
    diasemana = "Martes";
    break;
  case 3:
    diasemana = "Miércoles";
    break;
  case 4:
    diasemana = "Jueves";
    break;
  case 5:
    diasemana = "Viernes";
    break;
  case 6:
    diasemana = "Sábado";
    break;
  case 7:
    diasemana = "Domingo";
    break;
  default:
    diasemana = "Número de día no válido, por favor ingresa un número entre 1 y 7.";
}
alert('Día {numerodia}: {diaSemana}');
*/
// ejercicio 7
/*let comprat= parseFloat(prompt ("Ingrese el valor total de la compra"));
let descuento;
if(comprat >= 1000){descuento = comprat * 0.2;}
else{descuento = comprat * 0.05;}
var pagototal= comprat - descuento;
alert("la cantidad a pagar es " + pagototal + "pesos");*/

//ejercicio 8

/*let horas = parseInt(prompt("Introduce tus horas laboradas"));
if (horas <= 40){
    alert("has ganado $16000");}
  else {
    (
      alert("has ganado $20000");
    )
  }*/

// ejercicio 9
/*let person1n=(prompt("nombre"));
let person1= parseInt(prompt("edad"));
let person2n= (prompt("nombre"));
let person2= parseInt(prompt("edad"));
if (person1 > person2){
  alert(person1n + person1 + "es mayor que " + person2n + person2 );
}
 else{
  alert(person2n + person2 + " es mayor que" + person1n + person1 );
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

let num1= parseInt(prompt("Ingrese su numero1"));
let num2= parseInt(prompt("Ingrese numero 2"));
if (num1 = num2){
  alert (num1 * num2);
}
else{
  alert(num1 + num2);
}
    
