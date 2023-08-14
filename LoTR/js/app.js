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
