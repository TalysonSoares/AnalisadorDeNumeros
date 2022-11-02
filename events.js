// let num = document.getElementById('fnum')
let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res =  document.querySelector('div#res');
let valores = []

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value)) {

    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}