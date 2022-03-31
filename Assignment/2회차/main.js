const slides = document.querySelector('.slide_list');
const slide = document.querySelectorAll('.slide_list li');
const slideCount = slide.length,
      slideWidth = 200,
      slideMargin = 30;

const prevBtn = document.querySelector('.btn_prev');
const nextBtn = document.querySelector('.btn_next');

let currentIndex = 0;

cloneList();

function cloneList() {
  for(let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  }

  for(let i = slideCount -1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  }
    totalWidth();
    setInitialPosition();
    
    setTimeout(function() {
      slides.classList.add('animated');
    }, 100);
}

function totalWidth() {
const currentSlides = document.querySelectorAll('.slide_list li');
const newSlideCount = currentSlides.length;
const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin +'px';
slides.style.width = newWidth;

function setInitialPosition() {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}
    
prevBtn.addEventListener('click', function() {
    moveSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', function() {
    moveSlide(currentIndex + 1);
});

function moveSlide(num){
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIndex = num;
  
  if(currentIndex == slideCount || currentIndex == -slideCount) {
      setTimeout(function() {
          slides.classList.remove('animated');
          slides.style.left = '0px';
          currentIndex = 0;
      }, 500);

      setTimeout(function() {
          slides.classList.add('animated');
      }, 600);
    }
  }
}