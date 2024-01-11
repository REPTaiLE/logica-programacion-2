const mostrarFarenheit = document.getElementById("farenheit");
const mostrarKelvin = document.getElementById("kelvin");
const pedirDatos = document.getElementById("button");
pedirDatos.addEventListener("click", () => {
    convertirTemperatura();
});


function convertirTemperatura() {
    let temperaturaCelsius;

    // Solicitar al usuario la temperatura en grados Celsius
    do {
      temperaturaCelsius = prompt("Ingrese la temperatura en grados Celsius:");
    } while (!esNumero(temperaturaCelsius));

    // Convertir la temperatura a grados Fahrenheit y Kelvin
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    let temperaturaKelvin = parseFloat(temperaturaCelsius) + 273.15;

    // Imprimir resultados por consola
    console.log("Temperatura en grados Fahrenheit: " + temperaturaFahrenheit + " °F");
    console.log("Temperatura en Kelvin: " + temperaturaKelvin + " K");

    // Mostrar datos en HTML
    mostrarFarenheit.innerHTML = `Farenheit: ${temperaturaFahrenheit} °F`;
    mostrarKelvin.innerHTML = `Kelvin: ${temperaturaKelvin} K`;
  }

  function esNumero(valor) {
    // Función para verificar si el valor es un número
    return !isNaN(parseFloat(valor)) && isFinite(valor);
  }

