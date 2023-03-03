let hidesub_btn2 = document.getElementById('hidesub_btn2');
let hidesub2 = document.getElementById('hidesub2');

hidesub_btn2.addEventListener('click', toggleText);

function toggleText() {
    hidesub2.classList.toggle('show');

    if (hidesub2.classList.contains('show')) {
        hidesub_btn2.innerHTML = 'Perhaps';      
    }
    else {
        hidesub_btn2.innerHTML = 'Perhaps';
    }
}
