"use strict"

const swiperReviews = document.querySelector('.swiper-reviews')

if (swiperReviews) {
    const swiper = new Swiper('.swiper-reviews', {
        // Optional parameters
        loop: true,
        autoHeight: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
}

