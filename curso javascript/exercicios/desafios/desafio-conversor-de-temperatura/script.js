function conversortemp() {
    let cel = Number(window.prompt('Informe uma temperatura em °C (Celsius)'))
    let res = document.getElementById('res')

    let fahre = (cel * 1.8) + 32
    let kelvin = cel + 273.15

    res.innerHTML = `<h2>A temperatura de ${cel}°C corresponde a...</h2>`
    res.innerHTML += `<p>${fahre}°F (Fahrenheit)</p>`
    res.innerHTML += `<p>${kelvin}°K (kelvin)</p>`
}