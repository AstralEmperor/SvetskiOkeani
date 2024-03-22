const inputIme = document.getElementById('ime');
const inputPrezime = document.getElementById('prezime');
const inputPoruka = document.getElementById('poruka');
const inputEmail = document.getElementById('email');

const dugmePosalji = document.getElementById('formaDugme');

// menja css border kasnije dodeljenog elementa
function crveniBorder(imeElementa){
    imeElementa.style.cssText = "border:2px solid red"
}
// menja css border kasnije dodeljenog elementa
function zeleniBorder(imeElementa){
    imeElementa.style.cssText = "border:2px solid green"
}

// Testira validnost inputa unutar forme
function testirajValidnostUnosa(){
    let inputImeText = inputIme.value;
    let inputPrezimeText = inputPrezime.value;
    let porukaText = inputPoruka.value;
    let emailText = inputEmail.value;

    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    //  Provera Imena ( da li je prazno polje, da li je broj, da li je specijalni znak)
    if(inputImeText === ''){
        crveniBorder(inputIme);

    }else if(!isNaN(inputImeText)){
        crveniBorder(inputIme);

    }else if(format.test(inputImeText)){
        crveniBorder(inputIme);

    }else{
        zeleniBorder(inputIme);
    }

     //  Provera Prezimena( da li je prazno polje, da li je broj, da li je specijalni znak)
     if(inputPrezimeText === ''){
        crveniBorder(inputPrezime);

    }else if(!isNaN(inputPrezimeText)){
        crveniBorder(inputPrezime);
        
    }else if(format.test(inputPrezimeText)){
        crveniBorder(inputPrezime);

    }else{
         zeleniBorder(inputPrezime);
    }
     //  Provera email-a( da li je prazno polje)
    if(emailText === ''){
        crveniBorder(inputEmail);
    }else{
        zeleniBorder(inputEmail);
    }
    //  Provera poruke( da li je prazno polje)
    if(porukaText === ''){
        crveniBorder(inputPoruka);
    }else{
        zeleniBorder(inputPoruka);
    }
}
// Izvrsava proveru podataka nakon klikom na dugme Posalji
function posaljiFormu(){
    dugmePosalji.addEventListener('click', () =>{
        testirajValidnostUnosa();
    });
}
posaljiFormu();
