
let hideText_btn2 = document.getElementById('hideText_btn');
let hideText2 = document.getElementById('hideText');

hideText_btn2.addEventListener('click', toggleText);

function toggleText() {
    hideText2.classList.toggle('show');

    if (hideText2.classList.contains('show')) {
        hideText_btn2.innerHTML = 'Read Less';      
    }
    else {
        hideText_btn2.innerHTML = 'Read More';
    }
}

