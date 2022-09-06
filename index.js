(() => {
    let burgerBtn = document.querySelector('.burger-button');
    let bars = document.querySelector('.fa-bars');
    let xMark = document.querySelector('.fa-xmark');
    let nav = document.querySelector('nav');

    function toggleBurgerButton() {
        [bars, xMark].forEach(elem => elem.classList.toggle('open'));
    }

    burgerBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
        toggleBurgerButton();
    })

    nav.addEventListener('click', e => {
        let linkClick = e.target.classList.contains('nav-link');
        if (linkClick) {
            nav.classList.toggle('show');
            toggleBurgerButton();
        }
    })
})()

console.log('Hello again!')