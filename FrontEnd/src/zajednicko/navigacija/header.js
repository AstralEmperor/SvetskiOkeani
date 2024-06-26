//  Otvaranje i zatvaranje responzivne navigacije pritiskom na dugme
function otvoriZatvoriNavigaciju(){
    const navigacija = document.querySelector('.navigacija__lista');
    const hamburgerDugme = document.querySelector('.navigacija__dugme');

    hamburgerDugme.addEventListener('click', e =>{
        e.preventDefault();
        navigacija.classList.toggle('navigacija__prikaziNav');
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
                navDugmad[i].src ="../../../slike/strelica-gore.png"
                navDugmad[i].setAttribute('aria-expanded','true');

            }else if(navigacijaSekundarna.classList.contains('sekundarnaNavigacija')){
                navigacijaSekundarna.style.display = "none"
                navDugmad[i].src ="../../../slike/strelica-dole.png"
                navDugmad[i].setAttribute('aria-expanded','true');
            }
        })
    }
}
sekundarnaNavigacija();

// promeni velicinu fonta klikom na dugme
function promeniFont(){
    let font = document.getElementById('font');
    const dugmeZaFont = document.getElementById('promeniFont');
    let promenjenFont = false;

    dugmeZaFont.addEventListener('click', () => {
        if(!promenjenFont){
            font.setAttribute("href", '../../zajednicko/promenljive/fontPovecani.css');
            promenjenFont = true;
            console.log(font.getAttribute("href"));
            return
        }
        else if(promenjenFont){
            font.setAttribute("href", '../../zajednicko/promenljive/fontNormalni.css');
            promenjenFont = false;
            console.log(font.getAttribute("href"));
            return;
        }

    })
}
promeniFont();

// promeni paletu boja klikom na dugme
function promeniBoju(){
    let boje = document.getElementById('boje');
    const dugmeZaBoju = document.getElementById('promeniPaletu');
    let promenjeneBoje = false;

    dugmeZaBoju.addEventListener('click', () => {
        if(!promenjeneBoje){
            boje.setAttribute("href", '../../zajednicko/promenljive/paletaBoja2.css');
            promenjeneBoje = true;
            return
        }
        else if(promenjeneBoje){
            boje.setAttribute("href", '../../zajednicko/promenljive/paletaBoja1.css');
            promenjeneBoje = false;
            return;
        }

    })
}
promeniBoju();