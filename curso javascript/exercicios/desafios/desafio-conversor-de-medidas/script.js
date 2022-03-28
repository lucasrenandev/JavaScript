function converter() {
    let metros = Number(window.prompt('Digite uma distância em metros (m)'))
    let res = document.getElementById('res')

    let km = metros / 1000
    let hm = metros / 100
    let deca = metros / 10
    let deci = metros / 0.1
    let cm = metros / 0.01
    let mm = metros / 0.001

    res.innerHTML = `<h2>A distância de ${metros} metros corresponde a...</h2>`
    res.innerHTML += `<p>${km} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm} hequitômetro (Hm)</p>`
    res.innerHTML += `<p>${deca} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${deci} decímetros (dm) </p>`
    res.innerHTML += `<p>${cm} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm} milímetros (mm)</p>`
    
    
}