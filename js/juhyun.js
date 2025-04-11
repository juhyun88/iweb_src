document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY; 
    const header = document.querySelector("#headerwarp");

    if (!header) return; 

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }

        header.style.transition = "transform 0.3s ease-in-out"; 
        lastScrollY = currentScrollY; 
        });
    });

    //의사들 배너 슬라이드//
$(function() {
    if ($(".doctor-list").length) { // .main-info-list가 존재할 때만 실행
            $(".doctor-list").slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true, // 화살표 버튼 활성화
                    fade: false,
                    dots: false,
                    autoplay: true,
                    speed: 1000,
                    infinite: true,
                    autoplaySpeed: 3000,
                    easing: 'easeInOutQuint',
                    pauseOnHover: false,
                    centerMode: true,
                    zIndex: 1,
                    responsive: [
                            {
                                    breakpoint: 1221,
                                    settings: {
                                            slidesToShow: 3,
                                            slidesToScroll: 1,
                                    }
                            },
                    ]
            });
    }
});


//첫번째 배너 슬라이드//
$(function () {
    if ($(".firstbanner-rightsection .rightsection_img").length) {
        $(".firstbanner-rightsection .rightsection_img").slick({
            centerMode: false,
            centerPadding: '0px',
            infinite: true, // 무한 루프 활성화
            arrows: true, // 화살표 버튼 활성화
            speed: 300, // 슬라이드 전환 속도
            slidesToShow: 2, // 한 번에 보여줄 슬라이드 개수
            slidesToScroll: 1, // 한 번에 움직일 슬라이드 개수
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>', // 이전 화살표
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>', // 다음 화살표
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }
});


//유튜브 슬라이드//
$(function () {
    if ($("youtobe_section_img").length) {
        $("youtobe_section_img").slick({
            infinite: true, // 무한 루프 활성화
            arrows: true, // 화살표 버튼 활성화
            speed: 300, // 슬라이드 전환 속도
            slidesToShow: 4, // 한 번에 보여줄 슬라이드 개수
            slidesToScroll: 1, // 한 번에 움직일 슬라이드 개수
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>', // 이전 화살표
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>', // 다음 화살표
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }
});