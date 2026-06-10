// ======================
// COUNTER ANIMATION
// ======================

const counters = document.querySelectorAll('.counter-section h2');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.innerText;
        const count = +counter.getAttribute('data-count') || 0;

        const increment = target / 100;

        if(count < target){

            const newCount = Math.ceil(count + increment);

            counter.setAttribute('data-count', newCount);

            counter.innerText = newCount;

            setTimeout(updateCounter, 20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});


// ======================
// NAVBAR SCROLL EFFECT
// ======================

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.main-nav');

    if(window.scrollY > 50){

        navbar.style.background = '#0b3d91';

    }else{

        navbar.style.background = '#1565c0';

    }

});


// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({

            behavior:'smooth'

        });

    });

});


// ======================
// PAGE LOADED MESSAGE
// ======================

window.addEventListener('load', () => {

    console.log(
        "BlueWave University Website Loaded Successfully"
    );

});