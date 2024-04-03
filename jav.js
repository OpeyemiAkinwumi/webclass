let signIn = document.querySelector('.inin');
let signUp = document.querySelector('.upup');

let moveBox = document.querySelector('.form_box');
let bodyy = document.querySelector('body');

let signInBox = document.querySelector('#in');
let signUpBox = document.querySelector('#up');

let loginBox = document.querySelector('.form_in');
let registerBox = document.querySelector('.form_up');


const blue = () => {
    moveBox.style.left = '0';
    moveBox.style.transition = '0.2s all ease-in';
    loginBox.style.left = '40px';
    loginBox.style.opacity = '1';
    loginBox.style.transition = '0.2s all ease-in-out';
    registerBox.style.right = '-300px';
    registerBox.style.opacity = '0';
    registerBox.style.transition = '0.2s all ease-in-out';
    signUpBox.style.backgroundColor = '#37beee';
    bodyy.style.backgroundColor = '#10a8e9';
}
signIn.addEventListener('click', blue)

const red = () => {
    moveBox.style.left = '350px';
    moveBox.style.transition = '0.2s all ease-in-out';
    loginBox.style.left = '-280px';
    loginBox.style.opacity = '0';
    loginBox.style.transition = '0.2s all ease-in-out';
    registerBox.style.right = '40px';
    registerBox.style.opacity = '1';
    registerBox.style.transition = '0.2s all ease-in-out';
    signUpBox.style.backgroundColor = '#e24363';
    bodyy.style.backgroundColor = '#DD1B3D';
}
signUp.addEventListener('click', red)

