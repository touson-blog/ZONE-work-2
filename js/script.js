$(".open-btn").on('click', function () {
    $(this).toggleClass("active");
    $(".header__open-nav").toggleClass("open");
    $("body").toggleClass("noscroll");
});

$(".slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 2000,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '88px',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        }
    ]
});

$('.faq-list__title').on('click', function () {
    $(this).next().toggleClass('active');
    $(this).next().slideToggle();
});