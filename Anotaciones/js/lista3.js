let hidesub_btn3 = document.getElementById('hidesub_btn3');
let hidesub3 = document.getElementById('hidesub3');

hidesub_btn3.addEventListener('click', toggleText);

function toggleText() {
    hidesub3.classList.toggle('show');

    if (hidesub3.classList.contains('show')) {
        hidesub_btn3.innerHTML = 'Could be';      
    }
    else {
        hidesub_btn3.innerHTML = 'Could be';
    }
}
