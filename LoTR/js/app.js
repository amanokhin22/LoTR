window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
});

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const apiDataElement = document.getElementById('api-data');

            apiDataElement.innerHTML = `<h2>API Data</h2><p>${JSON.stringify(data.title)}</p>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const showSlider = new Swiper('.showcase-carousel', {
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 3,
            },
        },
        slidesPerView: 3,

        speed: 1800,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev'
        }
    })

    document.querySelector('video').playbackRate = 2
})
