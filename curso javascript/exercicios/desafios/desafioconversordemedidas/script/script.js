function converter() {
    let metros = parseFloat(window.prompt('Digite uma distância em metros (m)'))
    let res = document.getElementById('res')

    km = metros / 1000
    hm = metros / 100
    deca = metros / 10
    deci = metros / 0.1
    cm = metros / 0.01
    mm = metros / 0.001

    res.innerHTML = `A distância de ${metros} metros corresponde a... <br> ${km} quilômetros (Km) <br> ${hm} hequitômetro (Hm) <br> ${deca} decâmetros (Dam) <br> ${deci} decímetros (dm) <br> ${cm} centímetros (cm) <br> ${mm} milímetros (mm)`
    
}