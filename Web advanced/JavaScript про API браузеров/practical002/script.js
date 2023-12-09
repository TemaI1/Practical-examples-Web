const container = document.querySelector('.container');

const imgs = Array.from(container.querySelectorAll('img'));



const sliders = document.querySelector('.sliders');

const slider = Array.from(sliders.querySelectorAll('img'));



const btnPrevious = document.querySelector(".btn_previous");

const btnNext = document.querySelector(".btn_next");



const slideCount = imgs.length - 1;

let slideIndex = 0;



function updateSlider() {

    imgs.forEach((slide, index) => {

        if (index === slideIndex) {

            slide.style.display = 'block';

        } else {

            slide.style.display = 'none';

        }

    });



    slider.forEach((item, index) => {

        if (index === slideIndex) {

            item.removeAttribute('src');

            item.setAttribute('src', 'img/slider2.png');

        }

        slider.forEach((item, index) => {

            if (index !== slideIndex) {

                item.removeAttribute('src');

                item.setAttribute('src', 'img/slider1.png');

            }

        });



    });

}



slider.forEach((item, index) => {

    item.addEventListener("click", () => {

        slideIndex = index;

        updateSlider();

    })

});



btnNext.addEventListener("click", () => {

    slideIndex++;

    if (slideIndex > slideCount) {

        slideIndex = 0;

    }

    updateSlider();

})



btnPrevious.addEventListener("click", () => {

    slideIndex--;

    if (slideIndex < 0) {

        slideIndex = slideCount;

    }

    updateSlider();

})



updateSlider();