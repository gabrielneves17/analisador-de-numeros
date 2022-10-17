const num = document.getElementById('fnum');
const lista = document.getElementById('flista');
let resposta = document.getElementById('res');
let valores = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        const item = document.createElement('option');
        const numAdd = document.createTextNode(`Valor ${num.value} adicionado.`);
        item.appendChild(numAdd);
        lista.appendChild(item);
    } else {
        alert('Valor inválido ou já encontrado na lista!');
    }
    num.value = '';
    num.focus();
}

function analisar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos = 0; pos < valores.length; pos++) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos];
            }
            if(valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        media = soma / tot;
        resposta.innerHTML = `<p>Ao todo temos ${tot} valores cadastrados</p>`
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resposta.innerHTML += ` <p>A soma de todos os valores é ${soma}</p>`
        resposta.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(1)}</p>`
    }
}