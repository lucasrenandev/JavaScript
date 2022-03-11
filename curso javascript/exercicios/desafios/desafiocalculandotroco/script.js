function troco() {
    let compra = window.prompt('Qual produto você esta comprando? ')
    let preco = parseFloat(window.prompt(`Quanto custa o produto ${compra} que você esta comprando? `))
    let valor = parseFloat(window.prompt(`Qual foi o valor que você deu para pagar o produto ${compra}? R$`))

    preco = preco
    retorno = (valor - preco).toFixed(2)
    
    window.alert(`Você comprou o produto ${compra} que custou R$${preco.toFixed(2)}.\nVocê deu R$${valor} em dinheiro e vai receber R$${retorno} de troco.\nVolte sempre!`)
    
}