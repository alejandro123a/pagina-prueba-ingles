let hideTexto_btn = document.getElementById('hideTexto_btn');
let hideTexto = document.getElementById('hideTexto');

hideTexto_btn.addEventListener('click', toggleText);

function toggleText() {
    hideTexto.classList.toggle('show');

    if (hideTexto.classList.contains('show')) {
        hideTexto_btn.innerHTML = 'Read Less';      
    }
    else {
        hideTexto_btn.innerHTML = 'Read More';
    }
}
