import { nabaviZnamenitosti } from "../../../../BackEnd/Ajax.js";


async function ispisiZnamenitosti(znamenitosti){
    const znamenitostiContainer = document.querySelector('.znamenitosti__karticeCont');
   

        let ispisi = '';

        for(let znamenitost of znamenitosti.antartickiOkean){
        ispisi +=`<div class="znamenitosti__karta">
        <div class="znamenitosti__imgCont">
            <img loading="lazy" src="${znamenitost.slika}" alt="${znamenitost.alt}">
        </div>
        <div class="znamenitosti__sadrzaj">
            <h5 class="znamenitosti__h5">${znamenitost.naziv}</h5>
            <p>${znamenitost.opis}</p>
        </div>
        </div>`
        }
        znamenitostiContainer.innerHTML = ispisi;
}

nabaviZnamenitosti().then(znamenitosti => {
    ispisiZnamenitosti(znamenitosti);
});