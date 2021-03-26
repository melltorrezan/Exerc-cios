document.querySelector('#btn').addEventListener('click',()=>{

    let numeros = document.getElementById('num').value;
    let vetor= numeros.split(',');

    //retirar as aspas dos números
    for (let i = 0; i < vetor.length; i++) {
       vetor[i] = parseInt(vetor[i]);
        
    }

    // se estiver return a - b --- ordem crescente
    // se estiver return b - a --- ordem decrescente
    vetor= vetor.sort(function(a,b){return a-b})
    document.write(vetor);
    document.write('<br>');
    document.write('Maior número: '+vetor.pop());


})