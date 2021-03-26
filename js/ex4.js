document.querySelector('#btn').addEventListener('click', ()=>{
    let qtd = parseInt(document.getElementById('qtd').value);
    let preco = parseFloat(document.getElementById('preco').value);
    let total = qtd*preco;

    //calculando o valor do desconto 
    // se qtd <=5 2%    qtd> e qtd <=10 3%    qtd>10 5%
    // 3 respostas = 2° de ifs =      n° de respostas - 1 = (2)
    // 2% sobre valor = 2/100*valor
    let desc;
    // if encadeado ou if 
    if (qtd <= 5) {
        desc = 2/100*total
        
    } else if (qtd>5 && qtd<=10){ 
        desc = 3/100*total

    } else {
        desc = 5/100*total

    }

    totald = total - desc

    //formata e exibe os cálculos
    total = total.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
    desc = desc.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
    totald = totald.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})

    document.getElementById('total').value = total;
    document.getElementById('desc').value = desc;
    document.getElementById('totald').value = totald;
   
})

document.querySelector('#btn1').addEventListener('click', ()=>{
    let senha=document.getElementById('senha');
    document.getElementById('btn1').style.display='none';
    document.getElementById('btn2').style.display='inline';
    

    if(senha.type=='password'){
        senha.type='text';
    } 
});

    document.querySelector('#btn2').addEventListener('click', ()=>{
        let senha=document.getElementById('senha');
        if(senha.type=='text'){

            senha.type='password';
            document.getElementById('btn1').style.display='inline';
            document.getElementById('btn2').style.display='none';
        }
    });