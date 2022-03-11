let body = document.querySelector('body');

let randomNumber = Math.round(Math.random());

if (randomNumber == 0) {
    body.classList.add('combo1');
}
    else {
    body.classList.add('combo2');
    }