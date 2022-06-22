const container = document.querySelector('.cat-card');
container.addEventListener('click', () => {
    const el = event.target;
    const isBlock = el.closest('.cat-card__container');

    if (isBlock) {
        isBlock.classList.toggle('cat-card__container--active');
        let containerActive = container.querySelector('.cat-card__container--active');

        console.log('тут');
        if (isBlock.classList.contains('cat-card__container--active')) {
            console.log('зашли');
            isBlock.addEventListener('mouseenter', switchOnHover, false);
        } else {
            console.log('оту');
            isBlock.classList.remove('cat-card__container--active-hover');
            isBlock.removeEventListener('mouseenter', switchOnHover, false);
        }

        function switchOnHover() {
            console.log('зашли2');
            isBlock.classList.add('cat-card__container--active-hover');
            isBlock.removeEventListener('mouseenter', switchOnHover, false); console.log('ушли');
        }
        isBlock.classList.remove('cat-card__container--active-hover');
    }
});





