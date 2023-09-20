//ejercicio 1
//const edad = parseInt(prompt("Introduce tu edad"));

//if (!isNaN(edad)) {
//  if (edad >= 18) {
    //  alert("Eres mayor de edad. Tu edad es: " + edad);
  //} else {
    //alert("Eres menor de edad. Tu edad es: " + edad);
  //}
//} else {
  //alert("Por favor, ingresa un número válido para la edad.");
//}

//ejercicio 2//

/*function calcularPromedio(nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
  }
  
  function verificarAprobacion(promedio) {
    if (promedio >= 6) {
      return "El estudiante ha aprobado el curso con un promedio de " + promedio;
    } else {
      return "El estudiante ha reprobado el curso con un promedio de " + promedio;
    }
  }
  
  const nota1 = parseFloat(prompt("Introduce la primera nota (de 1 a 10):"));
  const nota2 = parseFloat(prompt("Introduce la segunda nota (de 1 a 10):"));
  const nota3 = parseFloat(prompt("Introduce la tercera nota (de 1 a 10):"));
  
  if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    if (nota1 >= 1 && nota1 <= 10 && nota2 >= 1 && nota2 <= 10 && nota3 >= 1 && nota3 <= 10) {
      const promedio = calcularPromedio(nota1, nota2, nota3);
      const mensaje = verificarAprobacion(promedio);
      alert(mensaje);
    } else {
      alert("Las notas deben estar en el rango de 1 a 10.");
    }
  } else {
    alert("Por favor, ingresa números válidos para las notas.");
  }
  */
 //ejercicio 3//

 /*const numeroA =parseInt(prompt("escriba el numeroA"));  // Puedes cambiar este valor por el que desees
 const numeroB =parseInt(prompt("escriba el numeroB"));   // Puedes cambiar este valor por el que desees
 
 if (numeroA > numeroB) {
   alert('A es mayor que B');
 } else if (numeroA < numeroB) {
   alert('A es menor que B');
 } else {
   alert('A es igual a B');
  }
 */
//ejercicio 4//

/*const numeros = [];

// Leer 10 números
for (let i = 0; i < 10; i++) {
  const numero = parseInt(prompt('Introduce el número ${i + 1}:'));
  if (!isNaN(numero)) {
    numeros.push(numero);
  } else {
    alert('Por favor, ingresa un número válido.');
    // Si no es un número válido, decrementamos i para repetir la iteración actual
    i--;
  }
}

// Ordenar los números de forma ascendente
numeros.sort((a, b) => a - b);

// Mostrar los números de forma ascendente
alert('Números en orden ascendente: ' + numeros.join(', '));
*/
// ejercicio 5

/*const peso = parseFloat(prompt("Ingresa tu peso en Kg:"));

if (!isNaN(peso)) {
  if (peso <= 40) {
    alert("Persona baja de peso");
  } else if (peso >= 41 && peso <= 70) {
    alert("Persona en rango promedio");
  } else {
    alert("Persona con sobrepeso");
  }
} else {
  alert("Por favor, ingresa un peso válido.");
}
*/

//ejercicio 6

/*const numeroDia = parseInt(prompt("Introduce un número entre 1 y 7:"));

let diaSemana;

switch (numeroDia) {
  case 1:
    diaSemana = "Lunes";
    break;
  case 2:
    diaSemana = "Martes";
    break;
  case 3:
    diaSemana = "Miércoles";
    break;
  case 4:
    diaSemana = "Jueves";
    break;
  case 5:
    diaSemana = "Viernes";
    break;
  case 6:
    diaSemana = "Sábado";
    break;
  case 7:
    diaSemana = "Domingo";
    break;
  default:
    diaSemana = "Número de día no válido, por favor ingresa un número entre 1 y 7.";
}

alert('Día ${numeroDia}: ${diaSemana}');
*/
// ejercicio 7
var comprat= parseFloat(prompt ("Ingrese el valor total de la compra"))
var descuento;
if(comprat >= 1000){descuento = comprat * 0.2;}
else{descuento = comprat * 0.05;}
var pagototal= comprat - descuento;
alert("la cantidad a pagar es" + pagototal.toFixed + "pesos");