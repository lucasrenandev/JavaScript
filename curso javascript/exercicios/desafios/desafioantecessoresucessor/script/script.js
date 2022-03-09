function antecessoresucessor() {
    let int = Number(window.prompt('Digite um número inteiro qualquer: '))

    let ant = String(int-1);
    let suce = String(int+1);

    window.alert(`Analisando o número ${int} seu antecessor é ${ant} e seu sucessor é ${suce}.`)
}