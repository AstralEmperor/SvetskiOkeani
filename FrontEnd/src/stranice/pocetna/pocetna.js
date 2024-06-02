//  Importi
import { nabaviVesti } from "../../../../BackEnd/Ajax.js";

// const listing = document.querySelector('.title__slajder-list');
const slajder = document.querySelector('.naslov__slajder');
const slajdovi = Array.from(slajder.children);
const dugmeProslo = document.querySelector('.naslov__dugme--nazad');
const dugmeSledece = document.querySelector('.naslov__dugme--napred');
const tackeNavigacija = document.querySelector('.naslov__ul');
const tacke = Array.from(tackeNavigacija.children);

const spanSledeci = document.querySelector('.strelica-napred');
const spanProsli = document.querySelector('.strelica-nazad');

const promeniPozicijuProzora = (slajd, index) => {
    slajd.style.left = 100 * index + '%';
}
// slajdovi.forEach((slide, index) =>{
//     slide.style.left = 100 * index + '%';
// });
slajdovi.forEach(promeniPozicijuProzora);
//When i click left,move slajdovi to the left
//when 
const pomeriProzor = (slajder, trenutniSlajd, ciljniSlajder) => {
    slajder.style.transform ='translateX(-' + ciljniSlajder.style.left; + ')';
    trenutniSlajd.classList.remove('trenutni-slajd');
    ciljniSlajder.classList.add('trenutni-slajd');
}
const azurirajTacke = (trenutnaTacka, ciljnaTacka) => {
    trenutnaTacka.classList.remove('trenutni-slajd');
    ciljnaTacka.classList.add('trenutni-slajd');
}
const sakrijPrikaziStrelice = (slajdovi, dugmeProslo, dugmeSledece, spanProsli,spanSledeci,ciljaniIndex)=>{
    if(ciljaniIndex === 0){
        dugmeProslo.classList.add('je-sakriveno');
        dugmeSledece.classList.remove('je-sakriveno');
        spanProsli.classList.add('je-sakriveno');
        spanSledeci.classList.remove('je-sakriveno');
        
    }else if(ciljaniIndex === slajdovi.length - 1){
        dugmeProslo.classList.remove('je-sakriveno');
        dugmeSledece.classList.add('je-sakriveno');
        spanProsli.classList.remove('je-sakriveno');
        spanSledeci.classList.add('je-sakriveno');
    }else{
        dugmeProslo.classList.remove('je-sakriveno');
        dugmeSledece.classList.remove('je-sakriveno');
        spanProsli.classList.remove('je-sakriveno');
        spanSledeci.classList.remove('je-sakriveno');
    }
}

// dogadjaj promeranja slika u desno, nakon pritiska na dugme
dugmeSledece.addEventListener('click', e =>{
    const trenutniSlajd = slajder.querySelector('.trenutni-slajd');
    const sledeciSlajd = trenutniSlajd.nextElementSibling;
    const trenutnaTacka = tackeNavigacija.querySelector('.trenutni-slajd');
    const sledecaTacka = trenutnaTacka.nextElementSibling;
    const sledeciIndex = slajdovi.findIndex(slide => slide === sledeciSlajd);

    azurirajTacke(trenutnaTacka, sledecaTacka);
    pomeriProzor(slajder, trenutniSlajd, sledeciSlajd);
    sakrijPrikaziStrelice(slajdovi, dugmeProslo, dugmeSledece, spanProsli,spanSledeci,sledeciIndex);
})

// dogadjaj promeranja slika u levo, nakon pritiska na dugme
dugmeProslo.addEventListener('click', e =>{
    const trenutniSlajd = slajder.querySelector('.trenutni-slajd');
    const predhodniSlajd = trenutniSlajd.previousElementSibling;
    const trenutnaTacka = tackeNavigacija.querySelector('.trenutni-slajd');
    const prethodnaTacka = trenutnaTacka.previousElementSibling;
    const prethodniIndex = slajdovi.findIndex(slide => slide === predhodniSlajd);

    azurirajTacke(trenutnaTacka, prethodnaTacka);
    pomeriProzor(slajder, trenutniSlajd, predhodniSlajd);
    sakrijPrikaziStrelice(slajdovi, dugmeProslo, dugmeSledece, spanProsli,spanSledeci,prethodniIndex);
})

tackeNavigacija.addEventListener('click', e => {
    const ciljnaTacka = e.target.closest('dugme');

    if (!ciljnaTacka) return;
    
    const trenutniSlajd = slajder.querySelector('.trenutni-slajd');
    const trenutnaTacka = tackeNavigacija.querySelector('.trenutni-slajd');
    const ciljaniIndex = tacke.findIndex(dot => dot === ciljnaTacka);
    const ciljniSlajder = slajdovi[ciljaniIndex];

    azurirajTacke(trenutnaTacka, ciljnaTacka);
    pomeriProzor(slajder, trenutniSlajd, ciljniSlajder);
    sakrijPrikaziStrelice(slajdovi, dugmeProslo, dugmeSledece, spanProsli,spanSledeci,ciljaniIndex);
})


// ispiši vesti preko json podataka nabavljenih importom
async function ispisiVesti(vesti){
    const novostiContainer = document.querySelector('.novosti__sveKarteContainer');
   

    let karta = '';
    for(let vest of vesti.novosti){
        karta +=`<div class="novosti__karta">
            <h3 class="novosti__h3">
            ${vest.naslov}
            </h3>
            <div class="novosti__slikaContainer">
                <img loading="lazy" src="../../../slike/${vest.slika}" alt="sipa.jpg">
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