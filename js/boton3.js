
let hideText_btn3 = document.getElementById('hideText_btn3');
let hideText3 = document.getElementById('hideText3');

hideText_btn3.addEventListener('click', toggleText);

function toggleText() {
    hideText3.classList.toggle('show');

    if (hideText3.classList.contains('show')) {
        hideText_btn3.innerHTML = 'Read Less';      
    }
    else {
        hideText_btn3.innerHTML = 'Read More';
    }
}

