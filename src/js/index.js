
const aboutSlider = document.querySelector('.about__images'),
    aboutSliderWrap = document.querySelector('.about__images-wrap'),
    aboutSlides = document.querySelectorAll('.about__image');

const aboutSwiper = new Swiper('.about__slider', {
    init: false,
    loop: true,
    centered: true,
    autoplay: true,
});

// const sliderMob = () => {
//
// };
// setTimeout(sliderMob, 100);

if (window.innerWidth <= 1023) {
    aboutSlider.classList.add('about__slider', 'swiper');
    aboutSliderWrap.classList.add('swiper-wrapper');
    aboutSlides.forEach( item => {
        item.classList.add('swiper-slide');
    })

    aboutSwiper.init();
}