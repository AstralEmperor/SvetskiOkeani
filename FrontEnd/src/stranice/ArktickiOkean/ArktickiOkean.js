import { nabaviZnamenitosti } from "../../../../BackEnd/Ajax.js";
import { nabaviVesti } from "../../../../BackEnd/Ajax.js";


async function ispisiZnamenitosti(znamenitosti){
    const znamenitostiContainer = document.querySelector('.znamenitosti__karticeCont');
   

        let ispisi = '';

        for(let znamenitost of znamenitosti.arktickiOkean){
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

async function ispisiVesti(vesti){
    const novostiContainer = document.querySelector('.novosti__sveKarteContainer');
   

    let karta = '';
    let broj = 0;
    for(let vest of vesti.novosti){
        if(vest.okean === "Arktik"){
        karta +=`<div class="novosti__karta">
            <div class="novosti__slikaContainer">
                <img loading="lazy" src="${vest.slika}" alt="sipa.jpg">
            </div>
          <div class="novosti__desno">
                <h5 class="novosti__h5">
                ${vest.naslov}
                </h5>
            <div class="novosti__tekstContainer">
                <p class="novosti__text">${vest.duziOpis}</p>
            </div>
          </div>
        </div>`
        broj++;
        }
    }
    if(broj === 0){
        karta +=`<h5 class="novosti__h5">
        Nema novih vesti!
        </h5>`
    }
        novostiContainer.innerHTML = karta;
}

nabaviVesti().then(vesti => {
    ispisiVesti(vesti);
});