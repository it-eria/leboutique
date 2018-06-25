//= vendors/jquery-3.1.1.min.js
//= vendors/slick.js
//= vendors/bootstrap.min.js


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});


$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    responsive: [

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<div class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
                nextArrow: '<div class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<div class="left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
                nextArrow: '<div class="right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'
            }
        }
        
    ]
});

// accordion-01
$(document).ready(function(){
    $(".accordion-01 .set > a").on("click", function(){
        if($(this).hasClass('active'))
        {
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".accordion-01 .set > a i").removeClass("fa-minus").addClass("fa-plus");
        }
        else
        {
            $(".accordion-01 .set > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".accordion-01 .set > a").removeClass("active");
            $(this).addClass("active");
            $('.accordion-01 .content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }
    });
});



$(".scrollTo").on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: ($(target).offset().top)}, 1500)
});