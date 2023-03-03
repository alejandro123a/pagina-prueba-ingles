let hidesub_btn = document.getElementById('hidesub_btn');
let hidesub = document.getElementById('hidesub');

hidesub_btn.addEventListener('click', toggleText);

function toggleText() {
    hidesub.classList.toggle('show');

    if (hidesub.classList.contains('show')) {
        hidesub_btn.innerHTML = 'Maybe';      
    }
    else {
        hidesub_btn.innerHTML = 'Maybe';
    }
}
