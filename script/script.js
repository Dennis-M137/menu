const openBtn = document.querySelector('.openbtn');
const closeBtn = document.querySelector('.closebtn');

openBtn.addEventListener('click', () => {
    document.getElementById('mySidenav').style.width = "250px";
}, false);

closeBtn.addEventListener('click', () => {
    document.getElementById('mySidenav').style.width = "0";
}, false);


const calc = document.querySelector('#sum');

calc.addEventListener('click', () => {
    let height = parseFloat(document.querySelector('#height').value);
    let weight = parseFloat(document.querySelector('#weight').value);
    let bmi = (weight/height/height) * 10000;
    document.querySelector('#result').innerHTML = bmi.toFixed(1);
}, false);

const submit = document.querySelector('#submit');
