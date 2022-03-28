function troco() {
    let compra = window.prompt('Qual produto você esta comprando? ')
    let preco = Number(window.prompt(`Quanto custa o produto ${compra} que você esta comprando? `))
    let valor = Number(window.prompt(`Qual foi o valor que você deu para pagar o produto ${compra}? R$`))

    preco = preco
    retorno = valor - preco
    
    window.alert(`Você comprou o produto ${compra} que custou R$${preco.toFixed(2)}.\nVocê deu R$${valor} em dinheiro e vai receber R$${retorno.toFixed(2)} de troco.\nVolte sempre!`)
    
}