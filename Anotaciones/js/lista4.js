let hidesub_btn4 = document.getElementById('hidesub_btn4');
let hidesub4 = document.getElementById('hidesub4');

hidesub_btn4.addEventListener('click', toggleText);

function toggleText() {
    hidesub4.classList.toggle('show');

    if (hidesub4.classList.contains('show')) {
        hidesub_btn4.innerHTML = 'Possibly';      
    }
    else {
        hidesub_btn4.innerHTML = 'Possibly';
    }
}
