
const aboutSlider = document.querySelector('.about__images'),
    aboutSliderWrap = document.querySelector('.about__images-wrap'),
    aboutSlides = document.querySelectorAll('.about__image');

    aboutSlider.classList.add('about__slider', 'swiper');
    aboutSliderWrap.classList.add('swiper-wrapper');
    aboutSlides.forEach( item => {
        item.classList.add('swiper-slide');
    })

const aboutSwiper = new Swiper('.about__slider', {
    loop: true,
    centered: true,
    autoplay: true,
    effect: "cards",
        grabCursor: true,
});

    




const feedbackSlider = document.querySelector('.feedback__slider'),
    feedbackSliderWrap = document.querySelector('.feedback__list'),
    feedbackSlides = document.querySelectorAll('.feedback__item');

    feedbackSlider.classList.add('swiper');
    feedbackSliderWrap.classList.add('swiper-wrapper');
    feedbackSlides.forEach( item => {
        item.classList.add('swiper-slide');
    })

const feedbackSwiper = new Swiper('.feedback__slider', {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
});