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
        if(event.target.classList.contains('prev')){
            let index = imgIndex - 1;

            if(index < 0){
                index = chars.length - 1;
            }

            show(index);
        } else if(event.target.classList.contains('next')){
            let index = imgIndex + 1;

            if(index >= chars.length){
                index = 0;
            }
            
            show(index);
        }
    })
})

show(imgIndex);




// let currentIndex = 0;

// function showSlide(index){
//     chars.forEach((char, i) => {
//         char.classList.toggle('active', i === index);
//         pages[i].classList.toggle('pageActive', i === index);
//     })
// };

// pages.forEach((page, index)=>{
//     page.addEventListener('click', function(){
//         currentIndex = index;
//         showSlide(currentIndex);
//     });
// })




//Увеличение кнопок в первом блоке

// let buyButtons = document.querySelectorAll('.buyBtn');

// buyButtons.forEach(buyBtn => {
//     buyBtn.addEventListener('mouseover', () => {
//         buyBtn.classList.add = 'buyBtnShadow';
//     });
//     buyBtn.addEventListener('mouseout', () => {
//         buyBtn.classList.remove = 'buyBtnShadow';
//     });
// })

//Изменение рамки картинок при наведении в медиа

// let mediaImages = document.querySelectorAll('.imgMedia');

// mediaImages.forEach(imgMedia => {
//     imgMedia.addEventListener('mouseover', () => {
//         imgMedia.style.backgroundColor = 'gold';
//     })
//     imgMedia.addEventListener('mouseout', () => {
//         imgMedia.style.backgroundColor = '';
//     })
// })
// console.log(mediaImages);


// Админ

let registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener('click', () => {
    window.location.href = "admin.html";
})

