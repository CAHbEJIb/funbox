const container = document.querySelector('.cat-card');


const containeractiveElNow = document.querySelectorAll('.cat-card__container--active');




// console.log(containeractiveElNow[0]);
// containeractiveElNow.forEach((elem) => {
//     elem.addEventListener('mouseover', removeHover, false)

//     function removeHover() {
//         console.log(event.target);
//         console.log('event.srcElement', event.srcElement);
//         elem.classList.add('cat-card__container--active-hover');
//         elem.removeEventListener('mouseover', removeHover, false);


//         // if (!event.target.closest('.cat-card__container--active'));
//         // {

//         // }
//         // elem.classList.remove('cat-card__container--active-hover');

//     }




// });






container.addEventListener('click', () => {
    const el = event.target;
    const isBlock = el.closest('.cat-card__container');

    if (isBlock) {
        isBlock.classList.toggle('cat-card__container--active');
        let containerActive = container.querySelector('.cat-card__container--active');



        if (isBlock.classList.contains('cat-card__container--active')) {
            isBlock.addEventListener('mouseenter', switchOnHover, false);
        } else {
            isBlock.classList.remove('cat-card__container--active-hover');
            isBlock.removeEventListener('mouseenter', switchOnHover, false);
        }

        function switchOnHover() {
            isBlock.classList.add('cat-card__container--active-hover');
            isBlock.removeEventListener('mouseenter', switchOnHover, false);
        }
        isBlock.classList.remove('cat-card__container--active-hover');
    }
});

container.addEventListener('mousedown', disableCard, false);
function disableCard() {
    if (event.which === 2) {
        const el = event.target;
        const isBlock = el.closest('.cat-card__container');

        if (isBlock) { isBlock.classList.toggle('cat-card__container--disable'); }
    }

}





