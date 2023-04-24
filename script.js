let btnclear = document.getElementbyId('reset');
let inputs = document.querySelectorAll('input');

btnclear.addEventListener('click', ()=>{
    inputs.forEach(input => input.value = "");
})