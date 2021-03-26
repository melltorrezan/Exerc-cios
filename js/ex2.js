
document.querySelector('#btn').addEventListener('click',()=>{
    let num = document.getElementById('n1')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert('Por Favor, digite um número!')
    } else{
        let n = Number(num.value)
        let c = 1
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }

})