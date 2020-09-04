"use strict"

// const buttonElem = document.getElementById("btn");
// const bodyElem = document.querySelector("body");
// const divElem = document.querySelector("div");

// buttonElem.addEventListener('click', clickHandler);
// // buttonElem.dispatchEvent(new MouseEvent('click'));   // Event imitation
// bodyElem.addEventListener('click', clickHandler);
// divElem.addEventListener('click', clickHandler);

// function clickHandler(event) {
//     console.log(event.currentTarget.nodeName);
// }

/* const btnChange = document.getElementById('btn2');
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');

btnChange.addEventListener("click", inpChanger);

function inpChanger(event) {
    event.preventDefault();
    let tmp = inp1.value;
    inp1.value = inp2.value;
    inp2.value = tmp;
} */

//Slider
const slider = new Slider([
    new Slide('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', "man"),
    new Slide("https://i.redd.it/5xn16fgmrs851.jpg", "demo"),
    new Slide("https://c0.wallpaperflare.com/preview/635/294/448/sky-dark-night-moon.jpg", "grass"),
]);

const img = document.getElementById('image');
const [prevBtn, nextBtn] = document.querySelectorAll('#sliderContainer >div> button');

const createButtonHandler = (direction = 'next') => (event) => {
    const newIndex = slider[direction === 'next' ? 'nextIndex' : 'prevIndex'];
    slider.currentIndex = newIndex;
    updateView();
};

nextBtn.addEventListener('click', createButtonHandler('next'));
prevBtn.addEventListener('click', createButtonHandler('prev'));

updateView();

function updateView() {
    const {
        currentSlide: {
            src,
            description
        },
    } = slider;
    img.setAttribute('src', src);
    img.setAttribute('title', description);
}