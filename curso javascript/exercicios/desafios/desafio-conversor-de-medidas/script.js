function converter() {
    let metros = Number(window.prompt('Digite uma distância em metros (m)'))
    let res = document.getElementById('res')

    km = metros / 1000
    hm = metros / 100
    deca = metros / 10
    deci = metros / 0.1
    cm = metros / 0.01
    mm = metros / 0.001

    res.innerHTML = `<h2>A distância de ${metros} metros corresponde a...</h2>`
    res.innerHTML += `<p>${km} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm} hequitômetro (Hm)</p>`
    res.innerHTML += `<p>${deca} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${deci} decímetros (dm) </p>`
    res.innerHTML += `<p>${cm} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm} milímetros (mm)</p>`
    
    
}