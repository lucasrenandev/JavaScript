function troco() {
    let compra = window.prompt('Qual produto você esta comprando? ')
    let custo = window.prompt(`Quanto custa o produto ${compra} que você esta comprando? `)
    let valor = window.prompt(`Qual foi o valor que você deu para pagar o produto ${compra}? R$`)

    custo = 255
    retorno = valor - custo
    
    window.alert(`Você comprou o produto ${compra} que custou R$${custo},00.\n Você deu R$${valor},00 em dinheiro e vai receber R$${retorno},00 de troco.\n Volte sempre!`)
    
}