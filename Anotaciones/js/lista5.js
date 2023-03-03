let hidesub_btn5 = document.getElementById('hidesub_btn5');
let hidesub5 = document.getElementById('hidesub5');

hidesub_btn5.addEventListener('click', toggleText);

function toggleText() {
    hidesub5.classList.toggle('show');

    if (hidesub5.classList.contains('show')) {
        hidesub_btn5.innerHTML = 'Migth be';      
    }
    else {
        hidesub_btn5.innerHTML = 'Migth be';
    }
}
