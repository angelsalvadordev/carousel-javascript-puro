// prototype
class Carousel {
    constructor(carouselContainer, showCarousel, itemsContainer, arrowLeft, arrowRight) {
        this.carouselContainer = document.getElementById(carouselContainer)
        this.showCarousel = document.getElementById(showCarousel)
        this.itemsContainer = document.getElementById(itemsContainer)
        this.arrowLeft = document.getElementById(arrowLeft)
        this.arrowRight = document.getElementById(arrowRight)
    }

    getSizesElements() {
        let widthShowCarousel = this.showCarousel.getBoundingClientRect().width,
            widthItem = this.itemsContainer.children[0].getBoundingClientRect().width,
            widthItems = this.itemsContainer.getBoundingClientRect().width,
            maxMovement = widthItems - widthShowCarousel,
            childrenItems = this.itemsContainer.children.length

        return {
            widthShowCarousel,
            widthItem,
            widthItems,
            maxMovement,
            childrenItems
        }
    }

    actionsCarousel() {
        let w = this.getSizesElements()
        let count = 0

        this.arrowLeft.addEventListener('click', () => {
            count--
            if (count < 0) {
                this.itemsContainer.style.left = `${-(w.maxMovement)}px`
                count = w.maxMovement / w.widthItem
            } else {
                this.itemsContainer.style.left = `${-count * w.widthItem}px`
            }

            console.log(count)
        })
        this.arrowRight.addEventListener('click', () => {
            count++
            if (count > (w.maxMovement / w.widthItem)) {
                this.itemsContainer.style.left = '0';
                count = 0
            } else {
                this.itemsContainer.style.left = `${-count * w.widthItem}px`
            }

            console.log(count)
        })
    }

    runCarousel() {
        this.actionsCarousel()

        addEventListener('resize', () => {
            this.actionsCarousel()
        })
    }
}

const myCarousel = new Carousel('carousel-container', 'show-carousel', 'items-container', 'arrow-left', 'arrow-right')

myCarousel.runCarousel();