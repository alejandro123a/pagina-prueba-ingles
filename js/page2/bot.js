let hideTexto0_btn = document.getElementById('hideTexto0_btn');
let hideTexto0 = document.getElementById('hideTexto0');

hideTexto0_btn.addEventListener('click', toggleText);

function toggleText() {
    hideTexto0.classList.toggle('show');

    if (hideTexto0.classList.contains('show')) {
        hideTexto0_btn.innerHTML = 'Read Less';      
    }
    else {
        hideTexto0_btn.innerHTML = 'Read More';
    }
}
