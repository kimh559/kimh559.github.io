const range = document.querySelector('input');
const div = document.querySelector('.moji');
function changeBackground(color) {
    document.body.style.background = color;
 }

range.addEventListener('input', (e) => {
  let rangeValue = e.target.value;
  div.textContent = mojis[rangeValue];
});