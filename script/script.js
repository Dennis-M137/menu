
document.querySelector('.openbtn').addEventListener('click', () => {
    document.getElementById('mySidenav').style.width = "250px";
}, false);

document.querySelector('.closebtn').addEventListener('click', () => {
    document.getElementById('mySidenav').style.width = "0";
}, false);