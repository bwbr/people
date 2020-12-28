let ancoras = document.querySelectorAll('a[href^="#"]')
let heightSlider = $('.nav').height();

for (let item of ancoras) { 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',

        });
        history.pushState(null, null, hashval)
        e.preventDefault()
    });
}