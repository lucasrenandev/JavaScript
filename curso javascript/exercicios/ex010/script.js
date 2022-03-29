function Tabuada() {
    let número = document.querySelector('#txtn')
    let tabuada = document.querySelector('#seltab')
    if (número.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }else {
        let num = Number(número.value)
        contador = 1
        tabuada.innerHTML = '' 
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${contador} = ${num * contador}`
            item.value = `tab${contador}`
            tabuada.appendChild(item)
            contador ++
        }
    }
    
}