class Slide{
    constructor(slide){
        this.slide = slide;
        this.btnNext = document.querySelector('#next-slide');
        this.btnPrev = document.querySelector('#prev-slide');
    }

    activeSlide(){
        return document.querySelector('.slides .active');
    }

    moveSlide(tipo){
        const sinal = tipo == 'n' ? '-' : '+';
        const dist = this.activeSlide().offsetLeft;
        this.slide.style.transform = `translateX(-${dist}px)`;
    }

    nextSlide(e){
        e.preventDefault();
        let activeSlide = this.activeSlide();
        activeSlide.classList.remove('active');
        if (activeSlide.nextElementSibling){;
            activeSlide.nextElementSibling.classList.add('active');
        }else {
            activeSlide = this.slide.firstElementChild.classList.add('active');
        }
        this.moveSlide('n');          
    }

    prevSlide(e){
        e.preventDefault();
        let activeSlide = this.activeSlide();
        activeSlide.classList.remove('active');
        if (activeSlide.previousElementSibling){
            activeSlide.previousElementSibling.classList.add('active');
        }else {
            activeSlide = this.slide.lastElementChild.classList.add('active');
        }
        this.moveSlide('p');
    }

    addSlideEvents(){
        this.btnNext.addEventListener('click',this.nextSlide);
        this.btnPrev.addEventListener('click',this.prevSlide);
    }

    bindEvents(){
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.moveSlide = this.moveSlide.bind(this);
    }

    init(){
        this.bindEvents();
        this.addSlideEvents();
        return this;
    }
}

let slide = document.querySelector('.slides');

const novoSlide = new Slide(slide);
novoSlide.init();