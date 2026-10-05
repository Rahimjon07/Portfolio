const inputEl = document.querySelector('.input');
console.log(inputEl.checked);

const bodyEl =document.querySelector('body');

inputEl.checked

inputEl.checked = false;
updateBody()

function updateBody(){
    if(inputEl.checked){
       bodyEl.style.background = 'black';
    }else{
        bodyEl.style.background = 'white';
    }
}
inputEl.addEventListener('input', () => {
    updateBody()
})

function updatelocalStorage(){
    localStorage.setItem('mode', JSON.stringify(inputEl.checked));
}


