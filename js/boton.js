let hideText_btn = document.getElementById('hideText_btn2');
let hideText = document.getElementById('hideText2');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');

    if (hideText.classList.contains('show')) {
        hideText_btn.innerHTML = 'Read Less';      
    }
    else {
        hideText_btn.innerHTML = 'Read More';
    }
}
