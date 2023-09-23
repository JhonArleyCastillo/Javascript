function convertUnits(inputValue, unitType) {
  // Declarar variables
  let result;
  let sinbuni = "m";

  // Comprobar si el valor de entrada es un número
  if (!isNaN(inputValue)) {

    // Comprobar el tipo de unidad
    switch (unitType) {

      // Unidades lineales
      case "km":
        result = inputValue / 1000;
        sinbuni = "km";
        break;
      case "hm":
        result = inputValue / 100;
        sinbuni = "hm";
        break;
      case "m":
        result = inputValue;
        sinbuni = "m";
        break;
      case "dm":
        result = inputValue * 10;
        sinbuni = "dm";
        break;
      case "cm":
        result = inputValue * 100;
        sinbuni = "cm";
        break;
      case "mm":
        result = inputValue * 1000;
        sinbuni = "mm";
        break;

      // Unidades cuadradas
      case "km2":
        result = inputValue / 1000000;
        sinbuni = "km2";
        break;
      case "ha":
        result = inputValue / 10000;
        sinbuni = "ha";
        break;
      case "m2":
        result = inputValue;
        sinbuni = "m2";
        break;
      case "dm2":
        result = inputValue * 100;
        sinbuni = "dm2";
        break;
      case "cm2":
        result = inputValue * 10000;
        sinbuni = "cm2";
        break;
      case "mm2":
        result = inputValue * 1000000;
        sinbuni = "mm2";
        break;

      // Unidades cúbicas
      case "m3":
        result = inputValue;
        sinbuni = "m3";
        break;
      case "dm3":
        result = inputValue / 1000;
        sinbuni = "dm3";
        break;
      case "cm3":
        result = inputValue / 1000000;
        sinbuni = "cm3";
        break;
      case "mm3":
        result = inputValue / 1000000000;
        sinbuni = "mm3";
        break;
      case "lt":
        result = inputValue * 1000;
        sinbuni = "lt";
        break;
      case "gl":
        result = inputValue * 264.172;
        sinbuni = "gl";
        break;

      // Caso predeterminado
      default:
        result = "Invalid unit";
        break;
    }

    // Actualizar el campo de resultado
    document.getElementById("outputResult").innerText = result.toFixed(6) + " " + sinbuni;
  } else {
    // Si el valor de entrada no es un número, establecer el resultado en una cadena vacía
    result = "";
    // Actualizar el campo de resultado
    document.getElementById("outputResult").innerText = result;
  }
}

  
  
