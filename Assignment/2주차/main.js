const slideList = document.querySelector('.slide_list'); 
const slideContents = document.querySelectorAll('.slide_content'); 
const slideBtnNext = document.querySelector('.slide_btn_next'); // 다음 button
const slideBtnPrev = document.querySelector('.slide_btn_prev'); // 이전 button
const pagination = document.querySelector('.slide_pagination');
const slideLen = slideContents.length; // 슬라이드 length
const slideWidth = 400; // 슬라이드 width
const slideSpeed = 300; // 슬라이드 speed
slideList.style.width = slideWidth * (slideLen) + "px";
let curIndex = 0; // 현재 슬라이드 index


slideBtnNext.addEventListener('click', function() {  // 다음 버튼
if (curIndex < slideLen - 1) {
slideList.style.transition = slideSpeed + "ms";
slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";
} else {
slideList.style.transform = "translate3d(0px, 0px, 0px)";
curIndex = -1;
}
curSlide = slideContents[++curIndex];
});


slideBtnPrev.addEventListener('click', function() { // 이전 버튼
    if (curIndex >= 0) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
    }
    if (curIndex === 0) {
    setTimeout(function() {
    slideList.style.transition = "0ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = slideLen;
    }
    curSlide.classList.remove('slide_active');
    curSlide = slideContents[--curIndex];
    curSlide.classList.add('slide_active');
    });
