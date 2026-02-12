// Portfolio Carousel JavaScript - Simple Sliding Only
class PortfolioCarousel {
    constructor() {
        this.currentIndex = 2;
        this.items = document.querySelectorAll('.portfolio-item');
        this.dots = document.querySelectorAll('.dot');
        this.windowWidth = window.innerWidth;
        
        this.init();
    }

    init() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        this.items.forEach((item, index) => {
            item.addEventListener('click', () => this.goToSlide(index));
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
            this.updateCarousel();
        });

        this.updateCarousel();
    }

    getVisibleItems() {
        if (this.windowWidth <= 768) return 1;
        if (this.windowWidth <= 992) return 3;
        return 5;
    }

    updateCarousel() {
        const visibleItems = this.getVisibleItems();

        this.items.forEach((item, index) => {
            item.classList.remove('featured');
            const offset = index - this.currentIndex;

            if (visibleItems === 1) {
                if (offset === 0) {
                    item.style.display = 'block';
                    item.style.transform = 'translateX(0)';
                    item.style.zIndex = '3';
                    item.style.opacity = '1';
                    item.classList.add('featured');
                } else {
                    item.style.display = 'none';
                }
            }
            else if (visibleItems === 3) {
                if (offset === 0) {
                    item.style.display = 'block';
                    item.style.transform = 'translateX(0)';
                    item.style.zIndex = '3';
                    item.style.opacity = '1';
                    item.classList.add('featured');
                } else if (offset === 1) {
                    item.style.display = 'block';
                    item.style.transform = 'translateX(200px)';
                    item.style.zIndex = '2';
                    item.style.opacity = '0.85';
                } else if (offset === -1) {
                    item.style.display = 'block';
                    item.style.transform = 'translateX(-200px)';
                    item.style.zIndex = '2';
                    item.style.opacity = '0.85';
                } else {
                    item.style.display = 'none';
                }
            }
            else {
                item.style.display = 'block';
                
                if (offset === 0) {
                    item.style.transform = 'translateX(0)';
                    item.style.zIndex = '3';
                    item.style.opacity = '1';
                    item.classList.add('featured');
                } else if (offset === 1) {
                    item.style.transform = 'translateX(200px)';
                    item.style.zIndex = '2';
                    item.style.opacity = '0.85';
                } else if (offset === -1) {
                    item.style.transform = 'translateX(-200px)';
                    item.style.zIndex = '2';
                    item.style.opacity = '0.85';
                } else if (offset === 2) {
                    item.style.transform = 'translateX(360px)';
                    item.style.zIndex = '1';
                    item.style.opacity = '0.7';
                } else if (offset === -2) {
                    item.style.transform = 'translateX(-360px)';
                    item.style.zIndex = '1';
                    item.style.opacity = '0.7';
                } else {
                    item.style.opacity = '0';
                    item.style.zIndex = '0';
                }
            }
        });

        this.updateDots();
    }

    updateDots() {
        this.dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === this.currentIndex) {
                dot.classList.add('active');
            }
        });
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateCarousel();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updateCarousel();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new PortfolioCarousel();

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;
    const container = document.querySelector('.carousel-container');

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) carousel.next();
        if (touchEndX > touchStartX + 50) carousel.prev();
    });
});