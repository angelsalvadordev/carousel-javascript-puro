let carouselComponent = {
    carousel: document.getElementsByClassName('carousel')[0],
    arrowLeft: document.getElementsByClassName('carousel-arrow-left')[0],
    arrowRight: document.getElementsByClassName('carousel-arrow-right')[0],
    slider: document.getElementsByClassName('carousel-images')[0],
    items: document.getElementsByClassName('carousel-item'),
    count: 0,

    runCarousel() {
        let itemWidth = this.items[0].getBoundingClientRect().width;
        this.slider.style.left = -itemWidth * this.count + 'px';

        this.buttonState();
    },

    buttonState() {
        if (this.count === this.items.length - 1) {
            this.arrowRight.classList.remove('arrow-active')
            this.arrowRight.classList.add('arrow-desactive')
        } else {
            this.arrowRight.classList.remove('arrow-desactive')
            this.arrowRight.classList.add('arrow-active')
        }

        if (this.count === 0) {
            this.arrowLeft.classList.remove('arrow-active')
            this.arrowLeft.classList.add('arrow-desactive')
        } else {
            this.arrowLeft.classList.remove('arrow-desactive')
            this.arrowLeft.classList.add('arrow-active')
        }

    },

    actionsCarousel() {
        this.arrowRight.addEventListener('click', () => {
            this.count++

            if (this.count >= this.items.length) {
                this.count = this.items.length - 1;

            } else {
                this.runCarousel()
            }

            console.log(this.count)
        });

        this.arrowLeft.addEventListener('click', () => {
            this.count--
            if (this.count < 0) {
                this.count = 0
            } else {
                this.runCarousel()
            }

            console.log(this.count)
        });

        this.buttonState()
    }

}
carouselComponent.actionsCarousel();