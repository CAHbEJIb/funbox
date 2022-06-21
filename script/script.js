let container = document.querySelector('.cat-card');
container.addEventListener('click', () => {
    const el = event.target;

    const isBlock = el.closest('.cat-card__container');

    if (isBlock) {
        isBlock.classList.toggle('cat-card__container--active');
        let containerActive = container.querySelector('.cat-card__container--active');

        // console.log(containerActive.classList);
        console.log('тут');
        if (isBlock.classList.contains('cat-card__container--active')) {
            console.log('зашли');
            isBlock.addEventListener('mouseenter', switchOnHover, false);
            // container.classList.remove('cat-card__container--active');
        } else {
            console.log('оту');
            isBlock.classList.remove('cat-card__container--active-hover');
            isBlock.removeEventListener('mouseenter', switchOnHover, false);
        }


        function switchOnHover() {
            console.log('зашли2');

            isBlock.classList.add('cat-card__container--active-hover');


            isBlock.removeEventListener('mouseenter', switchOnHover, false);
            console.log('ушли');
        }
        isBlock.classList.remove('cat-card__container--active-hover');
    }







});




// // Находим контейнер
// const catCard = document.querySelector('.cat-card');

// const addClass = (el) => el.classList.add('active');

// const handleClick = (event) => {
//     // Элемент по которому кликнули
//     const el = event.target;

//     // Проверяем, это блок по которому надо было кликать или нет?
//     const isBlock = el.classList.contains('js-hui');

//     if (isBlock) {
//         const active = document.querySelector('.js-container .active');

//         active?.classList.remove('active');

//         addClass(el.closest('.js-hui'));
//     }
// }






// // Вешаем один лисенер на контейнер
// catCard.addEventListener('click', handleClick);






