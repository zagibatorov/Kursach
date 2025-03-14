//Переходы по блокам по кнопкам в хедере

let toAbout = document.getElementById('toAbout');
let toChar = document.getElementById('toChar');
let toMedia = document.getElementById('toMedia');
let toFooter = document.getElementById('toFooter');

let aboutBlock = document.getElementById('aboutBlock');
let charBlock = document.getElementById('charBlock');
let mediaBlock = document.getElementById('mediaBlock');
let footer = document.getElementById('footer');


toAbout.addEventListener('click', () => {
    aboutBlock.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

toChar.addEventListener('click', () => {
    charBlock.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

toMedia.addEventListener('click', () => {
    mediaBlock.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

toFooter.addEventListener('click', () => {
    footer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});



//Чубрики

let imgs = document.querySelectorAll('.imgPart');

imgs.forEach(img => {
    img.addEventListener('mouseenter', () => {
            img.classList.add('jumping');
    });
    img.addEventListener('mouseleave', () => {
            img.classList.remove('jumping');
    })
})



//Слайд карточек

let chars = document.querySelectorAll('.char');
let pages = document.querySelectorAll('.cardNum');

let currentIndex = 0;

function showSlide(index){
    chars.forEach((char, i) => {
        char.classList.toggle('active', i === index);
        pages[i].classList.toggle('pageActive', i === index);
    })
};

pages.forEach((page, index)=>{
    page.addEventListener('click', function(){
        currentIndex = index;
        showSlide(currentIndex);
    });
})




//Увеличение кнопок в первом блоке

let buyButtons = document.querySelectorAll('.buyBtn');

buyButtons.forEach(buyBtn => {
    buyBtn.addEventListener('mouseover', () => {
        buyBtn.classList.add = 'buyBtnShadow';
    });
    buyBtn.addEventListener('mouseout', () => {
        buyBtn.classList.remove = 'buyBtnShadow';
    });
})

//Увеличение картинок в медиа

let mediaImages = document.querySelectorAll('.imgMedia');

mediaImages.forEach(imgMedia => {
    imgMedia.addEventListener('mouseover', () => {
        imgMedia.style.backgroundColor = 'gold';
    })
    imgMedia.addEventListener('mouseout', () => {
        imgMedia.style.backgroundColor = '';
    })
})
console.log(mediaImages);