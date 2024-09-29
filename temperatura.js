// Escuchar el evento de envío del formulario
document.getElementById("temperaturaForm").addEventListener("submit", function(event) {
    // Evitar el envío del formulario para que la página no se recargue
    event.preventDefault(); 

    // Obtener el valor del input y convertirlo a un número de punto flotante
    let temperaturaCelsius = parseFloat(document.getElementById("temperaturaCelsius").value);

    // Validar si la entrada es un número
    if (isNaN(temperaturaCelsius)) {
        // Si no es un número, mostrar un mensaje de error
        alert("Error: Por favor, ingrese un número válido.");
        return; // Salir de la función si hay un error
    }

    // Convertir la temperatura de Celsius a Fahrenheit
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    // Convertir la temperatura de Celsius a Kelvin
    let temperaturaKelvin = temperaturaCelsius + 273.15;

    // Obtener el div donde se mostrarán los resultados
    const resultadosDiv = document.getElementById("resultados");
    
    // Actualizar el contenido del div con los resultados formateados
    resultadosDiv.innerHTML = `
        <p>Temperatura en Fahrenheit: ${temperaturaFahrenheit.toFixed(2)} °F</p>
        <p>Temperatura en Kelvin: ${temperaturaKelvin.toFixed(2)} K</p>
    `;
});


