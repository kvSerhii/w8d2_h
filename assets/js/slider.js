'use strict'

class Slide {
    constructor(src, description) {
        this._src = src;
        this._description = description;
    }

    get src() {
        return this._src;
    }
    get description() {
        return this._description;
    }
}

class Slider {
    constructor(slides, currentIndex = 0) {
        this._slides = slides;
        this._currentIndex = currentIndex;
    }

    get currentIndex() {
        return this._currentIndex;
    }

    set currentIndex(newIndex) {
        //Validation
        return (this._currentIndex = newIndex);
    }

    get nextIndex() {
        return (this.currentIndex + 1) % this._slides.length;
    }

    get prevIndex() {
        return (this.currentIndex - 1 + this._slides.length) % this._slides.length;
    }

    get currentSlide() {
        return this._slides[this._currentIndex];
    }
}