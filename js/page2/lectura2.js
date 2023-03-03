let hidesub2_btn = document.getElementById('hidesub2_btn');
let hidesub2 = document.getElementById('hidesub2');

hidesub2_btn.addEventListener('click', toggleText);

function toggleText() {
    hidesub2.classList.toggle('show');

    if (hidesub2.classList.contains('show')) {
        hidesub2_btn.innerHTML = 'Anotaciones Less';      
    }
    else {
        hidesub2_btn.innerHTML = 'Anotaciones More';
    }
}
