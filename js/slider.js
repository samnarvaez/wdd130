const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.styles.marginLeft = "-200%";
    slider.styles.transition = "all 0.5s";
    setTimeout(function () {
        slider.styles.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.styles.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.styles.marginLeft = "0";
    slider.styles.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.styles.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function () {
    Next();
});

btnLeft.addEventListener('click', function () {
    Prev();
});

// option automatic

setInterval(function (){
    Next();
}, 6000);