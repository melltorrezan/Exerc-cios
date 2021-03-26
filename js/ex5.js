document.querySelector('#btn').addEventListener('click',()=>{

// declarando arrays
// posição    0        1     2        3
let vetor =['Pedro', 'Bia','Gaby','Pablo'];
/*let listagem=' ';
// imprimir os elementos 1 em cada linha
for (let posicao=0;posicao<vetor.length;posicao++)
{
    listagem= listagem + vetor[posicao]+'<br>';

}

document.write(listagem);*/

//alguns métodos dos vetores
document.write(vetor);

//saltando de linha
document.write('<br>');

//invertendo a posição dos elementos
document.write(vetor.reverse());

//saltando de linha
document.write('<br>');

//classificar os elementos em ordem alfabética
document.write(vetor.sort());

//saltando de linha
document.write('<br>')

//mostra o tamanho do vetor - número de elementos
document.write(vetor.length)
})