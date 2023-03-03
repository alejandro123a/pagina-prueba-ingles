
let hideText_btn5 = document.getElementById('hideText_btn5');
let hideText5 = document.getElementById('hideText5');

hideText_btn5.addEventListener('click', toggleText);

function toggleText() {
    hideText5.classList.toggle('show');

    if (hideText5.classList.contains('show')) {
        hideText_btn5.innerHTML = 'Read Less';      
    }
    else {
        hideText_btn5.innerHTML = 'Read More';
    }
}

