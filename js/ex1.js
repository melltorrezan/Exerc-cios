document.querySelector('#btn').addEventListener('click',()=>{

    let n1, n2, n3, n4, quad1,quad2,quad3,quad4;
    n1=parseInt(document.getElementById('n1').value);
    n2=parseInt(document.getElementById('n2').value);
    n3=parseInt(document.getElementById('n3').value);
    n4=parseInt(document.getElementById('n4').value);

    quad1 = n1*n1;
    quad2 = n2*n2;
    quad3 = n3*n3;
    quad4 = n4*n4;

    if (quad3 >= 1000) {
       alert( quad3= 'O resultado do terceiro quadrado é o maior')
    } else {
       alert('O quadrado de '+n1+' é '+quad1+'\n'+
       'O quadrado de '+n2+' é '+quad2+'\n'+
       'O quadrado de '+n3+' é '+quad3+'\n'+
       'O quadrado de '+n4+' é '+quad4)
       
    }
       
})