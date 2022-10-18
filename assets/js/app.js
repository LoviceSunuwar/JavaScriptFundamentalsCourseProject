const sign_in_btn = document.querySelector('#sign-in-button');
const sign_up_btn =document.querySelector('#sign-up-button');
const container = document.querySelector('.container');
var panel = document.querySelector('.p-hide');
var lpanel = document.querySelector('.panels-container');

panel.style.display = 'none';


sign_up_btn.addEventListener('click',()=> {
    container.classList.add('sign-up-mode');
    lpanel.style.display = 'none';

});

sign_in_btn.addEventListener('click',()=> {
    container.classList.remove('sign-up-mode');

});

