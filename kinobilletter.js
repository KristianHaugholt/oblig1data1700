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
    const antall = document.querySelector('.antall').value;
    const fornavn = document.querySelector('.fornavn').value;
    const etternavn = document.querySelector('.etternavn').value;
    const telefonnr = document.querySelector('.telefonnr').value;
    const epost = document.querySelector('.epost').value;
    const nyBillett = new kinobillett(film, antall, fornavn, etternavn, telefonnr, epost);
    billetter.push(nyBillett);
    document.querySelector('.alle-billetter').innerHTML = billetter.toString();
});
document.querySelector('.billett-slett').addEventListener('click', ()=>{
    billetter = [];
    document.querySelector('.alle-billetter').innerHTML = billetter.toString();
});