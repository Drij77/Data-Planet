// Banner
var textContainer = document.querySelector('.banner-heading h1 span');
var texts = ['AI model', 'AI Generate'];
var index = 0;
var textIndex = 0;
var isDeleting = false;

function typeEffect() {
    var currentText = texts[index];
    if (isDeleting) {
        textContainer.textContent = currentText.slice(0, textIndex - 1);
        textIndex--;
        if (textIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    } else {
        textContainer.textContent = currentText.slice(0, textIndex + 1);
        textIndex++;
        if (textIndex === currentText.length) {
            isDeleting = true;
        }
    }
    setTimeout(typeEffect, isDeleting ? 200 : 100);
}

typeEffect();

// testimonial Slider
$(document).ready(function () {
    $('.testimonialContainer').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
    var dotButtons = document.querySelectorAll('.slick-dots li button');
    dotButtons.forEach(function (button) {
        button.innerHTML = '';
    });
});