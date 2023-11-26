const responsiveButton = document.querySelector('#responsiveMenu');
const nav = document.querySelector(".main");

responsiveButton.addEventListener('click', function(){
    nav.classList.toggle("active");
});

const password = document.getElementById("password-inp");
const eye = document.getElementById("eye");

eye.addEventListener('click', function(){
    if (password.type === 'password'){
        password.type = 'text';
        eye.style.opacity = 0.50;
    } else {
        password.type = 'password';
        eye.style.opacity = 1;
    }
})


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})