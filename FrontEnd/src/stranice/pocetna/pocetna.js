//  Importi
import { nabaviVesti } from "../../../../BackEnd/Ajax.js";

// const listing = document.querySelector('.title__carousel-list');
const carousel = document.querySelector('.naslov__carousel');
const slides = Array.from(carousel.children);
const btnPrev = document.querySelector('.naslov__dugme--nazad');
const btnNext = document.querySelector('.naslov__dugme--napred');
const dotsNav = document.querySelector('.naslov__ul');
const dots = Array.from(dotsNav.children);

const spanNext = document.querySelector('.strelica-napred');
const spanPrev = document.querySelector('.strelica-nazad');

const promeniPozicijuProzora = (slide, index) => {
    slide.style.left = 100 * index + '%';
}
// slides.forEach((slide, index) =>{
//     slide.style.left = 100 * index + '%';
// });
slides.forEach(promeniPozicijuProzora);
//When i click left,move slides to the left
//when 
const pomeriProzor = (carousel, currentSlide, targetSlide) => {
    carousel.style.transform ='translateX(-' + targetSlide.style.left; + ')';
    currentSlide.classList.remove('trenutni-slajd');
    targetSlide.classList.add('trenutni-slajd');
}
const azurirajTacke = (currentDot, targetDot) => {
    currentDot.classList.remove('trenutni-slajd');
    targetDot.classList.add('trenutni-slajd');
}
const sakrijPrikaziStrelice = (slides, btnPrev, btnNext, spanPrev,spanNext,targetIndex)=>{
    if(targetIndex === 0){
        btnPrev.classList.add('je-sakriveno');
        btnNext.classList.remove('je-sakriveno');
        spanPrev.classList.add('je-sakriveno');
        spanNext.classList.remove('je-sakriveno');
        
    }else if(targetIndex === slides.length - 1){
        btnPrev.classList.remove('je-sakriveno');
        btnNext.classList.add('je-sakriveno');
        spanPrev.classList.remove('je-sakriveno');
        spanNext.classList.add('je-sakriveno');
    }else{
        btnPrev.classList.remove('je-sakriveno');
        btnNext.classList.remove('je-sakriveno');
        spanPrev.classList.remove('je-sakriveno');
        spanNext.classList.remove('je-sakriveno');
    }
}

// dogadjaj promeranja slika u desno, nakon pritiska na dugme
btnNext.addEventListener('click', e =>{
    const currentSlide = carousel.querySelector('.trenutni-slajd');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.trenutni-slajd');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    azurirajTacke(currentDot, nextDot);
    pomeriProzor(carousel, currentSlide, nextSlide);
    sakrijPrikaziStrelice(slides, btnPrev, btnNext, spanPrev,spanNext,nextIndex);
})

// dogadjaj promeranja slika u levo, nakon pritiska na dugme
btnPrev.addEventListener('click', e =>{
    const currentSlide = carousel.querySelector('.trenutni-slajd');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.trenutni-slajd');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    azurirajTacke(currentDot, prevDot);
    pomeriProzor(carousel, currentSlide, prevSlide);
    sakrijPrikaziStrelice(slides, btnPrev, btnNext, spanPrev,spanNext,prevIndex);
})

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('dugme');

    if (!targetDot) return;
    
    const currentSlide = carousel.querySelector('.trenutni-slajd');
    const currentDot = dotsNav.querySelector('.trenutni-slajd');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    azurirajTacke(currentDot, targetDot);
    pomeriProzor(carousel, currentSlide, targetSlide);
    sakrijPrikaziStrelice(slides, btnPrev, btnNext, spanPrev,spanNext,targetIndex);
})


// ispiši vesti preko json podataka nabavljenih importom
async function ispisiVesti(vesti){
    const novostiContainer = document.querySelector('.novosti__sveKarteContainer');
   

    let karta = '';
    console.log(vesti.novosti)
    for(let vest of vesti.novosti){
        karta +=`<div class="novosti__karta">
            <h3 class="novosti__h3">
            ${vest.naslov}
            </h3>
            <div class="novosti__slikaContainer">
                <img loading="lazy" src="./FrontEnd/slike/${vest.slika}" alt="sipa.jpg">
            </div>
          <div class="novosti__donjiDeo">
            <div class="novosti__tekstContainer">
                <p class="novosti__text">${vest.opis}</p>
            </div>
            <div class="novosti__linkContainer">
                <a href="">Saznajte više -></a>
            </div>
          </div>
        </div>`
        }
        novostiContainer.innerHTML = karta;
}

nabaviVesti().then(vesti => {
    ispisiVesti(vesti);
});