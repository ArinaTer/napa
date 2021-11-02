// slide home
$('.slick-slider').slick({
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.prev__btn'),
    nextArrow: $('.next__btn'),
})

// slide reviews
$('.reviews__video').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{ 
        breakpoint: 768,
        settings: {
            slidesToShow: 1.50,
        }
    }],
    prevArrow: $('.prev__arrow'),
    nextArrow: $('.next__arrow'),
});

// slide
$('.training__list').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{ 
        breakpoint: 768,
        settings: {
            slidesToShow: 1.50,
        }
    }],
    prevArrow: $('.prev__arrow'),
    nextArrow: $('.next__arrow'),
});

// slide
$('.gallery__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.prev__arrow'),
    nextArrow: $('.next__arrow'),
});

// On before slide change
$('.gallery__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    gsap.fromTo('.gallery__slider--item img', 1.3, { x: 120, scale: 1.1, ease: Power2.out }, { x: 0, scale: 1, ease: Power2.out })
});

// Menu Burger
const $burger = $('.burger'),
    $menuClose = $('.mobile__menu--close');

$burger.on('click', function (e) {
    e.preventDefault()
    $('.mobile__menu').addClass('is-open');
    $('body').addClass('noscroll')
})

$menuClose.on('click', function (e) {
    e.preventDefault()
    $('.mobile__menu').removeClass('is-open');
    $('body').addClass('noscroll')
})

$('.accordion__header').click(function (e) {
    e.preventDefault()
    $(".accordion__body").not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
    $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("open-accordion");
    $(this).closest(".accordion__item").toggleClass("open-accordion");
});

// tabs login/reg
$(".tab-slider--body").hide();
$(".tab-slider--body:first").show();
$(".tab-slider--nav li").click(function () {
    $(".tab-slider--body").hide();

    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    if ($(this).attr("rel") == "tab2") {
        $('.tab-slider--tabs').addClass('slide');
    } else {
        $('.tab-slider--tabs').removeClass('slide');
    }

    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
});

// password show/hide
$('.toggle-password').click(function () {
    $(this).children().toggleClass('mdi-eye-outline mdi-eye-off-outline');
    let input = $(this).prev();
    input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
});

// Smooth-scrollbar
var el = document.querySelector('#page-content');
var scrollbar = Scrollbar.init(el, { 
    damping: 0.1,
    delegateTo: document,
});

// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.from('.facts .block__title', {
    scrollTrigger: {
        trigger: ".facts",
        start: "top center",
    },
    y: 30, 
    autoAlpha: 0, 
    ease: Power1.out
})
// gsap.from('.about .block__title', {
//     scrollTrigger: {
//         trigger: ".about",
//         start: "top center",
//     },
//     y: 30,
//     autoAlpha: 0,
//     ease: Power1.out
// })
// gsap.from('.about .about__title', {
//     scrollTrigger: {
//         trigger: ".about",
//         start: "top center",
//     },
//     y: 30,
//     autoAlpha: 0,
//     ease: Power1.out
// })
gsap.from('.video', {
    scrollTrigger: {
        trigger: ".video",
        start: "top center",
    },
    y: 50,
    autoAlpha: 0,
    scale: 0.95,
    ease: Power1.out
})
gsap.from('.partners__content', {
    scrollTrigger: {
        trigger: ".partners",
        start: "top center",
    },
    y: 30, 
    autoAlpha: 0, 
    ease: Power1.out
})
gsap.from('.gallery__content', {
    scrollTrigger: {
        trigger: ".gallery",
        start: "top center",
    },
    y: 30, 
    autoAlpha: 0, 
    ease: Power1.out
})
gsap.from('.footer__item', .5, {
    scrollTrigger: {
        trigger: ".footer",
        start: "top center",
    },
    y: 30, 
    autoAlpha: 0, 
    ease: Power1.out
})
gsap.from('.footer__logo', .5, {
    scrollTrigger: {
        trigger: ".footer",
        start: "top center",
    },
    y: 30, 
    autoAlpha: 0, 
    ease: Power1.out
}, "+=.5")
gsap.from('.form__content', {
    scrollTrigger: {
        trigger: ".form__content",
        start: "top center",
    },
    y: 30, 
    autoAlpha: 0, 
    ease: Power1.out
})
gsap.from('.companies-img img', {
    scrollTrigger: {
        trigger: ".companies-img",
        start: "top center",
    },
    y: 50,
    autoAlpha: 0,
    scale: 0.95,
    ease: Power1.out
})
gsap.from('.course-img img', {
    scrollTrigger: {
        trigger: ".course-img",
        start: "top center",
    },
    y: 50,
    autoAlpha: 0,
    scale: 0.95,
    ease: Power1.out
})
gsap.from('.contact-animation', {
    scrollTrigger: {
        trigger: ".contact",
        start: "top center",
    },
    y: 50,
    autoAlpha: 0,
    ease: Power1.out
})
gsap.from('.banner--item', {
    scrollTrigger: {
        trigger: ".course-banner",
        start: "top center",
    },
    y: 50,
    autoAlpha: 0,
    ease: Power1.out
})
gsap.from('.choses-course__content', {
    scrollTrigger: {
        trigger: ".choses-course",
        start: "top center",
    },
    y: 50,
    autoAlpha: 0,
    ease: Power1.out
})
gsap.from('.course-gallery__content', {
    scrollTrigger: {
        trigger: ".course-gallery",
        start: "top center",
    },
    y: 50,
    autoAlpha: 0,
    ease: Power1.out
})

var tlFacts = new TimelineLite();
var tlCourses = new TimelineLite();
var tlAuthor = new TimelineLite();
var tlFaq = new TimelineLite();
var tlTeachers = new TimelineLite();
var tlReviews = new TimelineLite();
var tlCformat = new TimelineLite();
var tlCsteps = new TimelineLite();
var tlCsteps2 = new TimelineLite();
var tlPriceForm = new TimelineLite();

tlFacts.staggerFromTo(".facts .amount", .5, {y: 30, autoAlpha: 0, ease: Power1.out}, {y: 0, autoAlpha: 1, ease: Power1.out}, 0.05);
ScrollTrigger.create({
    once: true,
    trigger: ".facts",
    start: "top center",
    animation: tlFacts
})

tlCformat.staggerFromTo(".course-info .course-info__list", .5, {y: 30, autoAlpha: 0, ease: Power1.out}, {y: 0, autoAlpha: 1, ease: Power1.out}, 0.05);
ScrollTrigger.create({
    once: true,
    trigger: ".course-info",
    start: "top center",
    animation: tlCformat
})

tlCsteps.staggerFromTo(".learnne__content .learnne-animation", .5, {y: 30, autoAlpha: 0, ease: Power1.out}, {y: 0, autoAlpha: 1, ease: Power1.out}, 0.05);
ScrollTrigger.create({
    once: true,
    trigger: ".learnne__content",
    start: "top center",
    animation: tlCsteps
})

tlCsteps2.staggerFromTo(".training .list__info", .5, {y: 30, autoAlpha: 0, ease: Power1.out}, {y: 0, autoAlpha: 1, ease: Power1.out}, 0.05);
ScrollTrigger.create({
    once: true,
    trigger: ".training",
    start: "top center",
    animation: tlCsteps2
})

tlPriceForm.staggerFromTo(".price-form .price-animation", .5, {y: 30, autoAlpha: 0, ease: Power1.out}, {y: 0, autoAlpha: 1, ease: Power1.out}, 0.05);
ScrollTrigger.create({
    once: true,
    trigger: ".price-form",
    start: "top center",
    animation: tlPriceForm
})

tlCourses.staggerFromTo(".ticket a", .5, {y: 30, autoAlpha: 0, ease: Power1.out}, {y: 0, autoAlpha: 1, ease: Power1.out}, 0.05);
ScrollTrigger.create({
    once: true,
    trigger: ".ticket",
    start: "top center",
    animation: tlCourses
})

tlAuthor
    .staggerFromTo('.author__content .circle-animate', .5, {x: 50, ease: Power1.out, autoAlpha: 0}, {x: 0, ease: Power1.out, autoAlpha: 1}, 0.2)
    .fromTo('.author__content .author__img--hooks', .5, {y: 30, ease: Power1.out, autoAlpha: 0}, {y: 0, ease: Power1.out, autoAlpha: 1})
    .fromTo('.author__content .quote__text', .5, {y: 30, ease: Power1.out, autoAlpha: 0}, {y: 0, ease: Power1.out, autoAlpha: 1}, "-=0.7")
    .fromTo('.author__content .quote__text--author', .5, {y: 30, ease: Power1.out, autoAlpha: 0}, {y: 0, ease: Power1.out, autoAlpha: 1})
ScrollTrigger.create({
    once: true,
    trigger: ".author",
    start: "top center",
    animation: tlAuthor
})

tlFaq
    .fromTo('.faq__content .block__title', .5, {y: 30, ease: Power1.out, autoAlpha: 0}, {y: 0, ease: Power1.out, autoAlpha: 1})
    .staggerFromTo('.accordion .accordion__item', .5, {y: 30, ease: Power1.out, autoAlpha: 0}, {y: 0, ease: Power1.out, autoAlpha: 1}, 0.2)
ScrollTrigger.create({
    once: true,
    trigger: ".faq__content",
    start: "top center",
    animation: tlFaq
})

tlTeachers.staggerFromTo('.liders__card', .5, {y: 30, ease: Power1.out, autoAlpha: 0}, {y: 0, ease: Power1.out, autoAlpha: 1}, 0.2)
ScrollTrigger.create({
    once: true,
    trigger: ".liders",
    start: "top center",
    animation: tlTeachers
})

tlReviews.staggerFromTo('.reviews__video .video--item', .5, {x: 30, ease: Power1.out, autoAlpha: 0}, {x: 0, ease: Power1.out, autoAlpha: 1}, 0.2)
ScrollTrigger.create({
    once: true,
    trigger: ".reviews__content",
    start: "top center",
    animation: tlReviews
})

scrollbar.addListener(() => {
    ScrollTrigger.refresh();
});
ScrollTrigger.addEventListener("refresh", () => scrollbar.update());
ScrollTrigger.refresh();

// Init Phone mask
let inputPhone = $('[type="tel"]').inputmask({
    mask: "+\\9\\98 99 999 99 99",
    placeholder: "-",
});

// Toggle Video Modal
$('[data-fancybox]').fancybox();

// window onload
gsap.set('.header', { y: 30, autoAlpha: 0 })
$(window).on('load', function() {
    gsap.to('.header', .5, { y: 0, autoAlpha: 1, ease: Power1.out })
})