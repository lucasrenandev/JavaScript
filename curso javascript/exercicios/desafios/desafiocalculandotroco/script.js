function troco() {
    let compra = window.prompt('Qual produto você esta comprando? ')
    let preco = window.prompt(`Quanto custa o produto ${compra} que você esta comprando? `)
    let valor = window.prompt(`Qual foi o valor que você deu para pagar o produto ${compra}? R$`)

    preco = preco
    retorno = valor - preco
    
    window.alert(`Você comprou o produto ${compra} que custou R$${preco},00.\nVocê deu R$${valor},00 em dinheiro e vai receber R$${retorno},00 de troco.\nVolte sempre!`)
    
}