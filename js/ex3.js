document.querySelector('#btn').addEventListener('click',()=>{

    let nome=document.getElementById('nome').value;
    let resultado=" ";

    for (let i = 1; i <= 200; i++) {
        
        resultado=nome;
        document.write(resultado, '<br>')
    }

    
})