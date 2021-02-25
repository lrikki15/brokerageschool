document.addEventListener('DOMContentLoaded', () => {
    /*alert('Yahoo!')
    $('.feedbacks__content').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    });*/
    $('.feedbacks__content').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 576,
        settings: {
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
        });
        
})
