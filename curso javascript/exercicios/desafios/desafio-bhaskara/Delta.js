function calcular() {
    let a = Number(window.prompt('Qual o valor de a?'))
    let b = Number(window.prompt('Qual o valor de b?'))
    let c = Number(window.prompt('Qual o valor de c? '))
    let res = document.querySelector('div#res')
    let delta = Number(b ** 2) - (4 * a * c)


    res.innerHTML = `A equação atual é <strong>${a}x² + ${b}x + ${c} = 0 </strong>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}² - 4 x ${a} x ${c}</strong> </p>`
    res.innerHTML += `<p>O valor calculado foi <strong><mark>&Delta; = ${delta}</mark></strong></p>`


}