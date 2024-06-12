let num = window.document.getElementById('text1')
let lista = window.document.getElementById('text2')
let res = window.document.getElementById('res')
let valores = []


function isNumero(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) >= 1 && Number(n) <= 1000000000;
}

function inLista(n, l) {
    return l.includes(Number(n));
}


function Adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
         valores.push(Number(num.value));
         let item = document.createElement('option')
         item.text = `O produto vale ${num.value} kz`;
         lista.appendChild(item)


    }else{
        window.alert('[Erro] Preencha o espaço vazio ou número já encontrado na lista');
    }

    num.value = '';
    num.focus();
}

function finalizar() {
      if(valores.length == 0){
            window.alert('[Erro]  Adicione valores')
      } else {
        let tot = valores.length;
        let maior = valores[0]; 
        let menor = valores[0];

        for( let pos in valores){
            
            if (valores[pos] > maior) 
                maior = valores[pos];
            if (valores[pos] < menor) 
                menor = valores[pos];
        }

      
        res.innerHTML += `O maior preço de um produto comprado é: ${maior}kz. <br>`;
        res.innerHTML += `O menor preço de um produto comprado é: ${menor}kz. <br>`;
    }
}
     
