function slettData(){
    document.querySelector('.film').value = '';
    document.querySelector('.antall').value = '';
    document.querySelector('.fornavn').value = '';
    document.querySelector('.etternavn').value = '';
    document.querySelector('.telefonnr').value = '';
    document.querySelector('.epost').value = '';
}
function slettFeilmelding(){
    document.querySelector('.film-feil').innerHTML = '';
    document.querySelector('.antall-feil').innerHTML = '';
    document.querySelector('.fornavn-feil').innerHTML = '';
    document.querySelector('.etternavn-feil').innerHTML = '';
    document.querySelector('.telefon-feil').innerHTML = '';
    document.querySelector('.epost-feil').innerHTML = '';
}

class kinobillett{
    constructor(film, antall, fornavn, etternavn, telefonnr, epost){
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }
    toString() {
        return `Film: ${this.film}, Antall: ${this.antall}, Fornavn: ${this.fornavn}, Etternavn: ${this.etternavn},
        Telefonnr: ${this.telefonnr}, Epost: ${this.epost} <br>`;
    }
}
let billetter = [];
document.querySelector('.billett-kjop').addEventListener('click', ()=>{
    const film = document.querySelector('.film').value;
    const antall = parseInt(document.querySelector('.antall').value);
    const fornavn = document.querySelector('.fornavn').value;
    const etternavn = document.querySelector('.etternavn').value;
    const telefonnr = parseInt(document.querySelector('.telefonnr').value);
    const epost = document.querySelector('.epost').value;

    let godkjent = true;
    if (film.length===0){
        godkjent=false;
        document.querySelector('.film-feil').innerHTML = 'Film må være lengre enn null karakterer';
    } else {document.querySelector('.film-feil').innerHTML = ''}

    if (!antall){
        godkjent=false;
        document.querySelector('.antall-feil').innerHTML = 'må skrive antall med siffere';
    } else {document.querySelector('.antall-feil').innerHTML = ''}

    if (fornavn.length===0){
        godkjent=false;
        document.querySelector('.fornavn-feil').innerHTML = 'Fornavn må være lengre enn null karakterer';
    } else {document.querySelector('.fornavn-feil').innerHTML = ''}

    if (etternavn.length===0){
        godkjent=false;
        document.querySelector('.etternavn-feil').innerHTML = 'Film må være lengre enn null karakterer';
        } else {document.querySelector('.etternavn-feil').innerHTML = ''}

    if (telefonnr.toString().length!==8){
        godkjent=false;
        document.querySelector('.telefon-feil').innerHTML = 'må skrive telefonnr med 8 siffere';
    } else {document.querySelector('.telefon-feil').innerHTML = ''}

    if (!epost.includes('@')){
        godkjent=false;
        document.querySelector('.epost-feil').innerHTML = 'må skrive alfakrøll i epost';
    } else {document.querySelector('.epost-feil').innerHTML = ''}

    if (godkjent){
        const nyBillett = new kinobillett(film, antall, fornavn, etternavn, telefonnr, epost);
        billetter.push(nyBillett);
        document.querySelector('.alle-billetter').innerHTML = billetter.toString();
        slettData();
    }
    console.log(film.length);
});
document.querySelector('.billett-slett').addEventListener('click', ()=>{
    billetter = [];
    document.querySelector('.alle-billetter').innerHTML = billetter.toString();
    slettData();
    slettFeilmelding();
});