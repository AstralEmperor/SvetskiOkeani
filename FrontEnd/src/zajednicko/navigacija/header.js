//  Otvaranje i zatvaranje responzivne navigacije pritiskom na dugme
function otvoriZatvoriNavigaciju(){
    const navigacija = document.querySelector('.navigacija__list');
    const hamburgerDugme = document.querySelector('.navigacija__toggleBtn');

    hamburgerDugme.addEventListener('click', e =>{
        e.preventDefault();
        navigacija.classList.toggle('navigacija__showNav');
    });
}
otvoriZatvoriNavigaciju();

//  Otvaranje i zatvaranje sekundardne navigacije pritiskom na dugme, gde se menjaju izgled i aria atribut ikonice -strelica-
function sekundarnaNavigacija(){
    const navDugmad = document.querySelectorAll('.navigacija__link-dugme');
    for(let i=0; i < navDugmad.length; i++){
        navDugmad[i].addEventListener('click', () => {
            const navigacijaSekundarna = navDugmad[i].parentNode.nextElementSibling;

            if(navigacijaSekundarna.classList.contains('sekundarnaNavigacija') && navigacijaSekundarna.style.display === "none" && navigacijaSekundarna !== 0){
                navigacijaSekundarna.style.display = "flex"
                navDugmad[i].src ="/FrontEnd/slike/strelica-gore.png"
                navDugmad[i].setAttribute('aria-expanded','true');

            }else if(navigacijaSekundarna.classList.contains('sekundarnaNavigacija')){
                navigacijaSekundarna.style.display = "none"
                navDugmad[i].src ="/FrontEnd/slike/strelica-dole.png"
                navDugmad[i].setAttribute('aria-expanded','true');
            }
        })
    }
}
sekundarnaNavigacija();