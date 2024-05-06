//  Importi
import { nabaviVesti } from "/BackEnd/Ajax.js";

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
                <img loading="lazy" src="/FrontEnd/slike/${vest.slika}" alt="sipa.jpg">
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