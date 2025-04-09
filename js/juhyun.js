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
                    autoplaySpeed: 10000,
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
                                