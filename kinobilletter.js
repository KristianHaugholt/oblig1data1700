function slettData(){                                   //function to clear the input fields
    document.querySelector('.film').value = '';
    document.querySelector('.antall').value = '';
    document.querySelector('.fornavn').value = '';
    document.querySelector('.etternavn').value = '';
    document.querySelector('.telefonnr').value = '';
    document.querySelector('.epost').value = '';
}

const validateEmail = (email) => {              //function to validate email with regex
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const validatePhone = (phonenr) => {          //function to validate phonenumber with regex
    return phonenr.match(
        /^[+]\d{10}$/
    );
};


class kinobillett{          //ticket class with constructor and toString method
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
let billetter = [];     //empty array for tickets
document.querySelector('.billett-kjop').addEventListener('click', ()=>{ //if buy ticket button is clicked
    //getting the values from the input field
    const film = document.querySelector('.film').value;
    const antall = Number(document.querySelector('.antall').value); //converting to number so there's only digits
    const fornavn = document.querySelector('.fornavn').value;
    const etternavn = document.querySelector('.etternavn').value;
    const telefonnr = document.querySelector('.telefonnr').value;
    const epost = document.querySelector('.epost').value;

    let godkjent = true;        //initializing variable that becomes false if the inputs isn't

    if (film.length===0){ //if the input field is empty an error masseage appears next to the input field
        godkjent=false;
        document.querySelector('.film-feil').innerHTML = 'Film må være lengre enn null karakterer'; //
    } else {document.querySelector('.film-feil').innerHTML = ''}      //otherwise the error message is deleted

    if (!Number.isInteger(antall)){     //if the number isn't an integer an error masseage appears next to the input field
        godkjent=false;
        document.querySelector('.antall-feil').innerHTML = 'Må skrive heltall med siffere';
    } else {document.querySelector('.antall-feil').innerHTML = ''}      //otherwise the error message is deleted

    if (fornavn.length===0){    //if the input field is empty an error masseage appears next to the input field
        godkjent=false;
        document.querySelector('.fornavn-feil').innerHTML = 'Fornavn må være lengre enn null karakterer';
    } else {document.querySelector('.fornavn-feil').innerHTML = ''}     //otherwise the error message is deleted

    if (etternavn.length===0){  //if the input field is empty an error masseage appears next to the input field
        godkjent=false;
        document.querySelector('.etternavn-feil').innerHTML = 'Film må være lengre enn null karakterer';
    } else {document.querySelector('.etternavn-feil').innerHTML = ''}   //otherwise the error message is deleted

    if (!validatePhone(telefonnr)){     //uses the validatePhone function to see if the input is invalid, if it is an error masseage appears next to the input field
        godkjent=false;
        document.querySelector('.telefon-feil').innerHTML = 'Må skrive telefonnr med + og 10 siffere';
    } else {document.querySelector('.telefon-feil').innerHTML = ''}     //otherwise the error message is deleted

    if (!validateEmail(epost)){     //uses the validateEmail function to see if the input is invalid, if it is an error masseage appears next to the input field
        godkjent=false;
        document.querySelector('.epost-feil').innerHTML = 'Ikke godkjent epost';
    } else {document.querySelector('.epost-feil').innerHTML = ''}       //otherwise the error message is deleted

    if (godkjent){      //if every input is valid the ticket is saved and added to the array, the array is written, and the input fields cleared
        const nyBillett = new kinobillett(film, antall, fornavn, etternavn, telefonnr, epost);
        billetter.push(nyBillett);
        document.querySelector('.alle-billetter').innerHTML = billetter.toString();
        slettData();
    }
});
document.querySelector('.billett-slett').addEventListener('click', ()=>{
    //when the delete button is clicked the array of tickets gets cleared and it's updated on screen
    billetter = [];
    document.querySelector('.alle-billetter').innerHTML = billetter.toString();
});