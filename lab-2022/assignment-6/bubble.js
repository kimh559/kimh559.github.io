let bubbles = document.querySelectorAll('.bubble');
let container = document.querySelector('#container');

bubbles.forEach(function (bubble) {
    bubble.style.left = (80 * Math.random()) + '%';
    bubble.style.bottom = (60* Math.random()) + '%';
});

container.addEventListener('click', function (event) {
    console.log(event) 
    if (event.target.classList.contains('bubble')){
        event.target.remove();   
     }
});