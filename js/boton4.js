
let hideText_btn4 = document.getElementById('hideText_btn4');
let hideText4 = document.getElementById('hideText4');

hideText_btn4.addEventListener('click', toggleText);

function toggleText() {
    hideText4.classList.toggle('show');

    if (hideText4.classList.contains('show')) {
        hideText_btn4.innerHTML = 'Read Less';      
    }
    else {
        hideText_btn4.innerHTML = 'Read More';
    }
}

