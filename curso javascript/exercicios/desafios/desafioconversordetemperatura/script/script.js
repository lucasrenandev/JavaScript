function conversortemp() {
    let cel = parseFloat(window.prompt('Informe uma temperatura em °C (Celsius)'))
    let res = document.getElementById('res')

    let fahre = (cel * 1.8) + 32
    let kelvin = cel + 273.15

    res.innerHTML = `A temperatura de ${cel}°C corresponde a... <br> ${fahre.toFixed(2)}°F (fahrenheit) <br> ${kelvin.toFixed(2)}°K (kelvin)`
}