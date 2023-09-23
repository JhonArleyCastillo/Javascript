function convertUnits() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const unitType = document.getElementById('unitType').value;
    const unitSelect = document.getElementById('unitSelect');
  
    let unitSymbol;
  
    if (unitType === 'Lineal') {
      unitSymbol = 'm'; // Length unit symbol
    } else if (unitType === 'Area') {
      unitSymbol = 'm<sup>2</sup>'; // Area unit symbol
    }else if (unitType === "Volumen"){
        unitSymbol = "m<sup>3</sup>";
    }
    }
  
    // conversor de unidades lineales
    if (unitType === 'Lineal') {
      for (let i = 0; i < unitSelect.options.length; i++) {
        if (unitSelect.options[i].value.endsWith('2')) {
          unitSelect.options[i].style.display = 'none';
        } else {
          unitSelect.options[i].style.display = '';
        }
      }
    //conversor de unidades al cuadrado^2
    }if (unitType === 'Area') {
      for (let i = 0; i < unitSelect.options.length; i++) {
        if (unitSelect.options[i].value.endsWith('2')) {
          unitSelect.options[i].style.display = '';
        } else {
          unitSelect.options[i].style.display = 'none';
        }
      }
    
    //conversor de unidades a volumen^3
    } else if (unitType === 'Volumen') {
    for (let i = 0; i < unitSelect.options.length; i++) {
      if (unitSelect.options[i].value.endsWith('2')) {
        unitSelect.options[i].style.display = '';
      } else {
        unitSelect.options[i].style.display = 'none';
      }
    }
  }
  
    if (!isNaN(inputValue)) {
      let result;
  
      switch (unitSelect.value) {
        // Length unit conversions
        case 'Km':
          result = inputValue / 1000; // 1 kilometer = 1000 meters
          break;
        case 'Hm':
          result = inputValue / 100; // 1 hectometer = 100 meters
          break;
        case 'Dm':
          result = inputValue * 10; // 1 decimeter = 0.1 meters
          break;
        case 'm':
          result = inputValue; // 1 meter = 1 meter
          break;
        case 'cm':
          result = inputValue * 100; // 1 centimeter = 0.01 meters
          break;
        case 'mm':
          result = inputValue * 1000; // 1 millimeter = 0.001 meters
          break;
  
        // Area unit conversions
        case 'Km2':
          result = inputValue / 1000000; // 1 kilometro cuadrado= 1,000,000 metros cuadrados
          break;
        case 'Ha':
          result = inputValue / 10000; // 1 hectarea = 10,000 metros cuadrados
          break;
        case 'm2':
          result = inputValue; // 1 metro cuadrado
          break;
        case 'dm2':
          result = inputValue * 100; // 1 decimetro cuadrado = 100 centimetros cuadrados
          break;
        case 'cm2':
          result = inputValue * 10000; // 1 centimetro cuadrado = 10,000 milimetros cuadrados
          break;
        case 'mm2':
          result = inputValue * 1000000; // 1 milimetro cuadrado = 0.000001 metros cuadrados
          break;
        
        // Unidades de Volumenes
        case 'M<sup>3</sup>':
          result = inputValue / 1000000; // 1 metro cubico
          break;
        case 'dm<sup>3</sup>':
          result = inputValue / 10000; // 1 decimetro cubico
          break;
        case 'cm<sup>3</sup>':
          result = inputValue; // 1 centimetro cubico
          break;
        case 'mm<sup>3</sup>':
          result = inputValue * 100; // 1 milimetro cubico
          break;
        case 'Lt':
          result = inputValue * 1000; // 1 Litro
          break;
        case 'Gl':
          result = inputValue * 264.172; // 1 Galon
          break;
        default:
          result = 'Invalid unit';
      }
  
      document.getElementById('outputResult').innerText = result.toFixed(6) + ' ' + unitSymbol;
    } else if (
      document.getElementById('outputResult').innerText = '',
    )if(
        document.getElementById("outputResult").innerText= "";
    )

  
  