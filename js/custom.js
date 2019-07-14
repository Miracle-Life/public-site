$(function () {
    $('.header').vide({
        'mp4': 'video/video-bg',
        'webm': 'video/video-bg',
        'ogv': 'video/video-bg',
        'poster': 'video/video-bg',
    });
    $(".header-wrap__button").click(function () {
        $(this).toggleClass("on");
        $(".header-top__nav").slideToggle();
    });
    $('.carousel').carousel({
        interval: 2000
    });

    $(".faq_info").click(function() {
        $(this).toggleClass("active").find(".hiden_faq").slideToggle("normal");
        $(".faq_info").not(this).removeClass("active").find(".hiden_faq").slideUp("normal");
        $(".faq_info").not(this).find(".material-icons-remove_circle").addClass("material-icons-add_circle").removeClass("material-icons-remove_circle");
        if ($(this).hasClass("active")) $(this).find(".material-icons-add_circle").addClass("material-icons-remove_circle").removeClass("material-icons-add_circle");
    else $(this).find(".material-icons-remove_circle").addClass("material-icons-add_circle").removeClass("material-icons-remove_circle")

    });

    $('.slaid').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $(document).ready(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    });




    //................................//
    jQuery(function($) {
        $(window).scroll(function(){
            if($(this).scrollTop()>160){
                $('#navigation').addClass('fixed');
            }
            else if ($(this).scrollTop()<160){
                $('#navigation').removeClass('fixed');
            }
        });
    });




    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            $(".header-top__link").removeClass("header-top__link-active").filter(this).addClass("header-top__link-active");
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    jQuery(window).scroll(function(){
        var $sections = $('section');
        $sections.each(function(i,el){
            var top  = $(el).offset().top-100;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('.header-top__link').removeClass('header-top__link-active');
                $('a[href="#'+id+'"]').addClass('header-top__link-active');

            }
        })
    });


    $(function () {
        $(".material-icons-keyboard_arrow_down").click(function () {
            $(this).toggleClass(" material-icons-keyboard_arrow_down material-icons-keyboard_arrow_up");
        });
    })


});

