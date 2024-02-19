
function openTab(tabName) {
    let i;
    let x = document.getElementsByClassName("content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";

    if (tabName === 'all') {
        initSwiperAll();
    } else if (tabName === 'tab1' && !window.swiper1Initialized) {
        initSwiper1();
    } else if (tabName === 'tab2' && !window.swiper2Initialized) {
        initSwiper2();
    } else if (tabName === 'tab3' && !window.swiper3Initialized) {
        initSwiper3();
    }
}


// Init Tab 1
function initSwiper1() {
    window.swiper1 = new Swiper('.swiper1', {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    window.swiper1Initialized = true;
}

// Init Tab 2
function initSwiper2() {
    window.swiper2 = new Swiper('.swiper2', {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    window.swiper2Initialized = true;
}

// Init Tab 3
function initSwiper3() {
    window.swiper3 = new Swiper('.swiper3', {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    window.swiper3Initialized = true;
}

function initSwiperAll() {
    if (!window.swiperAllInitialized) {
        let allSlidesHtml = '';
        let swiper1Wrapper = document.querySelector('.swiper1 .swiper-wrapper');
        let swiper2Wrapper = document.querySelector('.swiper2 .swiper-wrapper');
        let swiper3Wrapper = document.querySelector('.swiper3 .swiper-wrapper');

        if (swiper1Wrapper) allSlidesHtml += swiper1Wrapper.innerHTML;
        if (swiper2Wrapper) allSlidesHtml += swiper2Wrapper.innerHTML;
        if (swiper3Wrapper) allSlidesHtml += swiper3Wrapper.innerHTML;

        let allSwiperWrapper = document.querySelector('.all-swiper .swiper-wrapper');
        if (allSwiperWrapper) {
            allSwiperWrapper.innerHTML = allSlidesHtml;
            new Swiper('.all-swiper', {
                slidesPerView: 1,
                centeredSlides: false,
                slidesPerGroupSkip: 1,
                grabCursor: true,
                keyboard: {
                    enabled: true,
                },
                breakpoints: {
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
            window.swiperAllInitialized = true;
        } else {
            console.error('Swiper wrapper for "All" tab not found.');
        }
    }
}

window.onload = function () {
    window.swiper1Initialized = false;
    window.swiper2Initialized = false;
    window.swiper3Initialized = false;
    window.swiperAllInitialized = false;

    openTab('all');
}
