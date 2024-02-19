//
// Anchor & Scroll Header
//
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    let headerHeight = 86;
    let baseOffset = 140;
    let additionalOffset = 50;

    if (window.innerWidth <= 768) {
        headerHeight = 60;
        baseOffset = 100;
        additionalOffset = 20;
    }

    let isHeaderScrolled = false;

    function handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY > headerHeight && !isHeaderScrolled) {
            header.classList.add('header-scrolled');
            isHeaderScrolled = true;
        } else if (scrollY <= headerHeight && isHeaderScrolled) {
            header.classList.remove('header-scrolled');
            isHeaderScrolled = false;
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    document.querySelectorAll('.menu-primary a, .choosen-pricing-plan-to-form, .first-view .top .button, .first-view-services__link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const url = new URL(this.href);
            const hash = url.hash;

            if (hash) {
                e.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    const headerOffset = isHeaderScrolled ? (baseOffset - 40) : baseOffset + additionalOffset;

                    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});


//
// Language add class active
//
document.querySelectorAll('.button-lang').forEach(button => {
    button.addEventListener('click', function(e) {
        const listItem = this.parentNode;
        document.querySelectorAll('.lang-item').forEach(item => {
            item.classList.remove('active');
        });
        if (this.id === 'lang-ru') {
            const popup = document.getElementById('language-popup');
            popup.style.display = 'flex';
            popup.querySelector('.language-popup-close').onclick = popup.querySelector('.language-popup-close-btn').onclick = function() {
                popup.style.display = 'none';
                listItem.classList.add('active');
            }
        } else {
            listItem.classList.add('active');
        }
    });
});
//
// Animations counter
//
document.addEventListener("DOMContentLoaded", function() {
    function animateCounter(element, target) {
        let currentNumber = 0;
        const interval = 10;
        const duration = 2000;
        const steps = duration / interval;
        const stepSize = target / steps;
        function updateCounter() {
            currentNumber += stepSize;
            if (currentNumber < target) {
                element.querySelector('.number').innerHTML = Math.round(currentNumber) + ' <span>+</span>';
                requestAnimationFrame(updateCounter);
            } else {
                element.querySelector('.number').innerHTML = target + ' <span>+</span>';
            }
        }
        requestAnimationFrame(updateCounter);
    }

    document.querySelectorAll('.counters').forEach(function(counterElement) {
        const targetNumber = parseInt(counterElement.querySelector('.number').textContent.replace(/\D/g,''));
        animateCounter(counterElement, targetNumber);
    });
});

//
// Typing Effect
//
document.addEventListener("DOMContentLoaded", function() {
    const h1Element = document.querySelector('.typing-effect h1');
    const spanElements = h1Element.querySelectorAll('span');
    function animateText() {
        spanElements.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, index * 800);
        });
    }
    animateText();
});

//
// Offer Slider
//
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 767) {
        new Swiper('.offer-slider', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else {
        new Swiper('.offer-slider', {
            slidesPerView: 8,
            spaceBetween: 10,
        });
    }
});

//
// Popup Language
//
document.addEventListener('DOMContentLoaded', function () {
    let langRuButton = document.getElementById('lang-ru');
    let popup = document.getElementById('popupLanguage');
    let closePopupButton = document.getElementById('close-popupLanguage');
    let overlay = document.createElement('div');
    overlay.classList.add('overlayLanguage');
    langRuButton.addEventListener('click', function () {
        document.body.appendChild(overlay);
        popup.classList.add('show');
        overlay.classList.add('show');
    });
    closePopupButton.addEventListener('click', function () {
        document.body.removeChild(overlay);
        popup.classList.remove('show');
        overlay.classList.remove('show');
    });
});

//
// Open mobile menu
//
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const burgerIcon = document.querySelector('.burger-icon');
    const closeButton = document.getElementById('close-button-menu');
    const menu = document.querySelector('.header__navigations');
    const menuLinks = document.querySelectorAll('.header__navigations a');
    function toggleMenu(open) {
        if (open) {
            menu.classList.add('menu-open');
            body.style.overflow = 'hidden';
        } else {
            menu.classList.remove('menu-open');
            body.style.overflow = '';
        }
    }
    burgerIcon.addEventListener('click', function () {
        toggleMenu(true);
    });
    closeButton.addEventListener('click', function () {
        toggleMenu(false);
    });
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });
});

//
// All block href
//
document.addEventListener('DOMContentLoaded', function() {
    let offerItems = document.querySelectorAll('.swiper-slide');
    offerItems.forEach(function(item) {
        item.addEventListener('click', function() {
            let link = this.querySelector('.hidden-link');
            if (link) {
                window.location.href = link.href;
            }
        });
    });
});

//
// Filtering slides, Cases slider
//

document.addEventListener("DOMContentLoaded", function() {
    let swiper = new Swiper('.case-slider', {
        pagination: {
            el: ".swiper-pagination",
            //dynamicBullets:true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 10
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 20
            },
        },
        on: {
            slideChange: function () {
                if (window.innerWidth < 768) {
                    if (swiper.isBeginning) {
                        swiper.wrapperEl.style.marginLeft = '20px';
                    } else if (swiper.isEnd) {
                        swiper.wrapperEl.style.marginLeft = '-5px';
                    } else {
                        swiper.wrapperEl.style.marginLeft = '20px';
                    }
                }
            },
            reachBeginning: function () {
                if (window.innerWidth < 768) {
                    swiper.wrapperEl.style.marginLeft = '0px';
                }
            },
            reachEnd: function () {
                if (window.innerWidth < 768) {
                    swiper.wrapperEl.style.marginLeft = '-5px';
                }
            },
            resize: function () {
                if (window.innerWidth < 768) {
                    if (swiper.isBeginning) {
                        swiper.wrapperEl.style.marginLeft = '20px';
                    } else if (swiper.isEnd) {
                        swiper.wrapperEl.style.marginLeft = '-5px';
                    } else {
                        swiper.wrapperEl.style.marginLeft = '20px';
                    }
                } else {
                    swiper.wrapperEl.style.marginLeft = '0px';
                }
            }
        }
    });



    function filterSelection(category) {
        swiper.slides.forEach(slide => {
            if (category === 'all') {
                slide.classList.remove('hidden-slide'); ды
            } else {
                if (slide.classList.contains(category)) {
                    slide.classList.remove('hidden-slide');
                } else {
                    slide.classList.add('hidden-slide');
                }
            }
        });
        swiper.update();
        swiper.updateSlides();
        swiper.slideTo(0, 0);
    }

    document.querySelectorAll('.tabs-cases .tab-cases').forEach(tab => {
        tab.addEventListener('click', function() {
            let currentCategory = this.getAttribute('data-filter');
            document.querySelectorAll('.tabs-cases .tab-cases').forEach(t => {
                t.classList.remove('active');
            });
            this.classList.add('active');
            filterSelection(currentCategory);
        });
    });

    filterSelection('all');
    document.querySelector('.tabs-cases .tab-cases[data-filter="all"]').classList.add('active');

});

//
// Team Slider
//
document.addEventListener("DOMContentLoaded", function() {
    let swiper = new Swiper('.team-slider', {
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.6,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            991: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
        },
        on: {
            slideChange: function () {
                if (window.innerWidth < 767) {
                    if (swiper.isBeginning) {
                        swiper.wrapperEl.style.marginLeft = '90px';
                    } else if (swiper.isEnd) {
                        swiper.wrapperEl.style.marginLeft = '-5px';
                    } else {
                        swiper.wrapperEl.style.marginLeft = '90px';
                    }
                }
            },
            reachBeginning: function () {
                if (window.innerWidth < 767) {
                    swiper.wrapperEl.style.marginLeft = '90px';
                }
            },
            reachEnd: function () {
                if (window.innerWidth < 767) {
                    swiper.wrapperEl.style.marginLeft = '-5px';
                }
            },
            resize: function () {
                if (window.innerWidth >= 767) {
                    swiper.wrapperEl.style.marginLeft = '90px';
                }
            }
        }
    });
});


//
// Contacts form validation
//
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const textArea = document.getElementById('contact-text');

    const createTippy = (input, message) => {
        return tippy(input, {
            content: message,
            trigger: 'manual',
            hideOnClick: false
        });
    };

    const nameTippy = createTippy(nameInput, 'This field is required!');
    const emailTippy = createTippy(emailInput, 'Please enter a valid email address!');
    const textTippy = createTippy(textArea, 'This field is required!');

    const validateAndToggleTippy = (input, tippyInstance, validator) => {
        if (validator(input)) {
            tippyInstance.show();
        } else {
            tippyInstance.hide();
        }
    };

    const isFieldEmpty = (input) => !input.value.trim();

    const isEmailInvalid = (input) => {
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegEx.test(input.value.trim());
    };

    const addValidationHandlers = (input, tippyInstance, validator) => {
        input.addEventListener('input', () => {
            validateAndToggleTippy(input, tippyInstance, validator);
        });

        input.addEventListener('blur', () => {
            validateAndToggleTippy(input, tippyInstance, validator);
        });
    };

    addValidationHandlers(nameInput, nameTippy, isFieldEmpty);
    addValidationHandlers(emailInput, emailTippy, isEmailInvalid);
    addValidationHandlers(textArea, textTippy, isFieldEmpty);

    document.getElementById('contacts-from-home').addEventListener('submit', function(e) {
        e.preventDefault();

        validateAndToggleTippy(nameInput, nameTippy, isFieldEmpty);
        validateAndToggleTippy(emailInput, emailTippy, isEmailInvalid);
        validateAndToggleTippy(textArea, textTippy, isFieldEmpty);

        const isFormValid = !isFieldEmpty(nameInput) && !isEmailInvalid(emailInput) && !isFieldEmpty(textArea);

        if (isFormValid) {
            // отправки формы
        }
    });
});

//
// Cases Data Attribute
//
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slide-item').forEach(item => {
        item.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});

//
// Pricing Slider Mobile
//
document.addEventListener("DOMContentLoaded", function() {
    function isMobileDevice() {
        return window.innerWidth < 768;
    }

    if (!isMobileDevice()) return;

    const slides = document.querySelectorAll(".pricing-items");
    const sliderContainer = document.querySelector(".slider-container");
    const pricingList = document.querySelector(".pricing-list");
    const paginationContainer = document.querySelector(".slider-pagination");
    let currentSlide = 0;

    function createPagination() {
        slides.forEach((_, index) => {
            let dot = document.createElement("div");
            dot.classList.add("dots-pagination");
            if (index === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
                goToSlide(index);
            });
            paginationContainer.appendChild(dot);
        });
    }

    function goToSlide(slideIndex) {
        const slideWidth = slides[0].clientWidth;
        const spaceBetweenSlides = 26;
        let offset = 0;

        if (slideIndex === 0) {
            offset = 0;
        } else if (slideIndex === slides.length - 1) {
            offset = -(slideIndex * (slideWidth + spaceBetweenSlides)) + (sliderContainer.clientWidth - slideWidth - spaceBetweenSlides);
        } else {
            offset = -(slideIndex * (slideWidth + spaceBetweenSlides)) + (sliderContainer.clientWidth / 2) - (slideWidth / 2) - (spaceBetweenSlides / 2);
        }

        pricingList.style.transform = `translateX(${offset}px)`;
        currentSlide = slideIndex;
        updatePagination();
        updateActiveSlide();
    }


    function updatePagination() {
        document.querySelectorAll(".dots-pagination").forEach((dot, index) => {
            dot.classList.remove("active");
            if (index === currentSlide) {
                dot.classList.add("active");
            }
        });
    }

    function updateActiveSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            if (index === currentSlide) {
                slide.classList.add("active");
            }
        });
    }

    createPagination();
    updateActiveSlide();

    let startX, endX;
    sliderContainer.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
    sliderContainer.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        if (startX - endX > 50 && currentSlide < slides.length - 1) {
            goToSlide(currentSlide + 1);
        } else if (startX - endX < -50 && currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    }
});

//
// We Offer Slider
//
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                dots: true,
                focusOnSelect: true,
                // variableWidth: true
            }
        },
    ]
});

$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});

//
// Own Price Slide
//
document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(slider => {
        function updateSlider(slider) {
            let percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
            let bg = `linear-gradient(90deg, #32AADF ${percentage}%, #E8EEF0 ${percentage}%)`;
            slider.style.setProperty('--slider-background', bg);
        }
        slider.addEventListener('input', () => updateSlider(slider));
        updateSlider(slider);
    });
});


//
// Change Own Slide Price
//
document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(slider => {
        slider.addEventListener('input', function() {
            const outputId = slider.id + "-value";
            const output = document.getElementById(outputId);
            if (output) {
                output.value = slider.value;
                output.textContent = slider.value;
            }
        });
    });
});















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
