window.addEventListener('scroll', function() {
    const image = document.querySelector('.scroll');
    const scrollPosition = window.scrollY;
    let result= scrollPosition * 0.09;
    image.style.transform = `translateY(${result}px)`;
})

window.addEventListener('scroll', function() {
    const image = document.querySelector('.scroll_1');
    const scrollPosition = window.scrollY;
    let result= scrollPosition * 0.09;
    image.style.transform = `translatey(-${result}px)`;
})

window.addEventListener('scroll', function() {
    const image = document.querySelector('.scroll_2');
    const scrollPosition = window.scrollY;
    let result= scrollPosition * 0.10;
    image.style.transform = `translatex(-${result}px)`;
})

window.addEventListener('scroll', function() {
    const image = document.querySelector('.scroll_3');
    const scrollPosition = window.scrollY;
    let result= scrollPosition * 0.10;
    image.style.transform = `translatex(${result}px)`;
})

window.addEventListener('scroll', function() {
    const image = document.querySelector('.scroll_4');
    const scrollPosition = window.scrollY;
    let result= scrollPosition * 0.10;
    image.style.transform = `translatey(-${result}px)`;
})