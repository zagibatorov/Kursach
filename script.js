//Переходы к блокам по кнопкам в хедере

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



//Переходы к блокам по кнопкам в хедере на мобиле

let toAboutMob = document.getElementById('toAboutMob');
let toCharMob = document.getElementById('toCharMob');
let toMediaMob = document.getElementById('toMediaMob');
let toFooterMob = document.getElementById('toFooterMob');

toAboutMob.addEventListener('click', () => {
    aboutBlock.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

toCharMob.addEventListener('click', () => {
    charBlock.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

toMediaMob.addEventListener('click', () => {
    mediaBlock.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

toFooterMob.addEventListener('click', () => {
    footer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});



//Чубрики

let imgs = document.querySelectorAll('.imgPart img');

console.log(imgs);
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
let controls = document.querySelectorAll('.controls');
let imgIndex = 0;

function show(index){
    chars[imgIndex].classList.remove('active');
    pages[imgIndex].classList.remove('pageActive');

    chars[index].classList.add('active');
    pages[index].classList.add('pageActive');

    imgIndex = index;
}

controls.forEach((e) => {
    e.addEventListener('click', () => {
        const isPrev = event.currentTarget.classList.contains('prev');
        const isNext = event.currentTarget.classList.contains('next');
        if(isPrev){
            let index = imgIndex - 1;

            if(index < 0){
                index = chars.length - 1;
            }

            show(index);
        } else if(isNext){
            let index = imgIndex + 1;

            if(index >= chars.length){
                index = 0;
            }
            
            show(index);
        }
    })
})

show(imgIndex);

//Объёмные карточки
chars.forEach(char => {
    char.addEventListener('mousemove', function(e){

        const rect = this.getBoundingClientRect(); //объект координат карточки

        const x = e.clientX - rect.left; //позиция курсора по X
        const y = e.clientY - rect.top; //позиция курсора по Y

        // Проценты от ширины/высоты
        const xPercent = Math.floor((x / rect.width ) * 100);
        const yPercent = Math.floor((y / rect.height ) * 100);

        // Угол наклона на основе позиции курсора
        const tiltX = ((yPercent - 50) / 5); // Наклон по X
        const tiltY = ((50 - xPercent) / 5); // Наклон по X

        this.style.transform = `
            scale(1.1)
            perspective(1000px)
            rotateX(${tiltX}deg)
            rotateY(${tiltY}deg)
        `;

    });
            
    char.addEventListener('mouseleave', function() {
        // Возвращаем карточку в исходное состояние
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });

});

let imgsMedia = document.querySelectorAll('.imgMedia');

let imgMediaTopLeft = document.querySelector('.imgMediaFullTL');
let imgMediaTopRight = document.querySelector('.imgMediaFullTR');
let imgMediaBottomLeft = document.querySelector('.imgMediaFullBL');
let imgMediaBottomRight = document.querySelector('.imgMediaFullBR');


imgsMedia[0].addEventListener('click', function(){
    console.log('lol');
    console.log(imgMediaBottomLeft);
    if(imgMediaTopLeft.style.opacity == 0){
        imgMediaTopLeft.style.opacity = 1;
    }
    else{
        imgMediaTopLeft.style.opacity = 0
    }
    
});

imgsMedia[1].addEventListener('click', function(){
    console.log('lel');
    if(imgMediaTopRight.style.opacity == 0){
        imgMediaTopRight.style.opacity = 1;
    }
    else{
        imgMediaTopRight.style.opacity = 0
    }
});

imgsMedia[2].addEventListener('click', function(){
    console.log('lil');
        if(imgMediaBottomLeft.style.opacity == 0){
        imgMediaBottomLeft.style.opacity = 1;
    }
    else{
        imgMediaBottomLeft.style.opacity = 0
    }
});

imgsMedia[3].addEventListener('click', function(){
    console.log('lul');
        if(imgMediaBottomRight.style.opacity == 0){
        imgMediaBottomRight.style.opacity = 1;
    }
    else{
        imgMediaBottomRight.style.opacity = 0
    }
});

//Открытие меню-бургера

let burgerMenu = document.querySelector('.menuBurger');
let headerButtonsMobile = document.querySelector('.headerButtonsMobile');

burgerMenu.addEventListener('click', () => {
    if(headerButtonsMobile.style.display === 'none'){
        headerButtonsMobile.style.display = 'flex';
    }
    else{
        headerButtonsMobile.style.display = 'none';
    }
})


// Функция для проверки видимости элемента
function isElementInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
        rect.bottom >= 0
    );
}

// Функция для обработки прокрутки
// function handleScroll() {
//     const header = document.querySelector('.header');
//     const mainScreen = document.querySelector('.mainScreen');
//     const about = document.querySelector('.about'); 
//     const characters = document.querySelector('.characters');
//     const media = document.querySelector('.media');
//     const footer = document.querySelector('.footer');

//     if(isElementInViewport(header)){
//         header.classList.add('visible');
//     }

//     if (isElementInViewport(mainScreen)) {
//         mainScreen.classList.add('visible');
//     }

//     if (isElementInViewport(about)) {
//         about.classList.add('visible');
//     }    
    
//     if (isElementInViewport(characters)) {
//         characters.classList.add('visible');
//     }

//     if (isElementInViewport(media)) {
//         media.classList.add('visible');
//     }

//     if (isElementInViewport(footer)) {
//         footer.classList.add('visible');
//     }
    
// }

// Добавляем обработчик события прокрутки
// window.addEventListener('scroll', handleScroll);

// Также проверяем при загрузке страницы (на случай если элемент уже в viewport)
// window.addEventListener('load', handleScroll);