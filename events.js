// let num = document.getElementById('fnum')
let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res =  document.querySelector('div#res');
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> A soma dos valores informados foi ${soma}.</p>`
        res.innerHTML += `<p> A media dos valores informados é ${media}.</p>`

    }
}