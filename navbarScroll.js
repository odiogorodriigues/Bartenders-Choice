window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let h1 = document.querySelector('#esquerda');
    header.classList.toggle('rolagem', window.scrollY > 200);
    h1.classList.toggle('visibily', window.scrollY > 200);
})