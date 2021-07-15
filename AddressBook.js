console.log("-----------WELCOME to ADDRESS BOOK using JAVASCRIPT-----------");
class AddressBook{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName(){ return this.firstName;}
    set firstName(firstname){ 
        let fnameRegex =RegExp("^[A-Z}{1}[a-zA-Z]{2,}");
        if(fnameRegex.test(firstname)){
            this._firstname = firstname; }
        else{ throw "INVALID FIRSTNAME";}
        }
        
    get lastName(){ return this.lastName;}
    set lastName(lastname){ 
        let lnameRegex =RegExp("^[A-Z}{1}[a-zA-Z]{2,}");
        if(lnameRegex.test(lastname)){
            this._lastname = lastname; }
        else{ throw "INVALID LASTNAME";}
       }

    get address(){ return this.address;}
    set address(address){ 
        let addressRegex = RegExp('[A-Za-z]{4,}$');
        if(addressRegex.test(address)){
            this._address = address;}
        else{ throw "INVALID ADDRESS";}
        }

    get city(){ return this.city;}
    set city(city){ 
        let cityRegex = RegExp('[A-Za-z]{4,}$');
        if(cityRegex.test(city)){
            this.city = city;}
        else{ throw "INVALID CITY";}
        }

    get state(){ return this.state;}
    set state(state){   
        let stateRegex = RegExp('[A-Za-z]{4,}$');
    if(stateRegex.test(state)){
        this.state = state;}
    else{ throw "INVALID STATE";}
     }

    get zip(){ return this.zip;}
    set zip(zip){ 
        let zipRegex = RegExp('^\d{5}(?:[-\s]\d{4})?$');
        if(zipRegex.test(zip)){
            this._zip = zip;}
        else{ throw "INVALID ZIP";}
        }

    get phoneNumber(){ return this.phoneNumber;}
    set phoneNumber(phonenumber){ 
        let phoneNumberRegex = RegExp('((91){1})[ ]([98765]{1})([0-9]{9})$');
        if(phoneNumberRegex.test(phonenumber)){
            this._phonenumber = phonenumber }
        else{ throw "INAVLID NUMBER"};
        }
            
    get email(){ return this.email;}
    set email(email){ 
        let emailRegex = RegExp('^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$');
        if(emailRegex.test(email)){
            this._email = email;}
        else{ throw "INVALID EMAIL"}
        }

    toString() {
        return " \nFirstName : " +this.firstName+ "\nLastName : " +this.lastName +"\nAddress : "+this.address+ 
        "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip : " +this.zip+ "\nPhoneNumber : " +this.phoneNumber+ 
        "\nemail : " +this.email;
    }
}
let addressBookArray = new Array();

let addressBook = new AddressBook("Harshit","Jadon","GreaterNoida","Noida","UttarPradesh",201310,9411411513,"harshit19jadon31@gmail.com");
addressBookArray.push(addressBook);

const prompt = require('prompt-sync')();

function addPerson(){
    const firstname = prompt('Enter FirstName= ');
    const lastname = prompt('Enter LastName= ');
    const address = prompt('Enter Address= ');
    const city = prompt('Enter City= ');
    const state = prompt('Enter State= ');
    const zip = prompt('Enter Zip= ');
    const phonenumber = prompt('Enter Mobile No= ');
    const email = prompt('Enter Email= ');
    let person = new AddressBook(firstname,lastname,address,city,state,zip,phonenumber,email);
    addressBookArray.push(person);
}

function printAddressBook(){
    console.log(addressBookArray);
}
function updatePerson(){
        const firstName = prompt('Enter FirstName:-');
        let i=0;
        addressBookArray.forEach(person => {
        if(person.firstName == firstname){
            i=1;
            console.log('Enter 1 to update FirstName ');
            console.log('Enter 2 to update LastName ');
            console.log('Enter 3 to update City ');
            console.log('Enter 4 to update City ');
            console.log('Enter 5 to update State ');
            console.log('Enter 6 to update Zip ');
            console.log('Enter 7 to update Phone No ');
            console.log('Enter 8 to update Email ');
            const select = Number(prompt('enter selection= '));
            switch(select){
                case 1:
                    const newFirstName = prompt('Enter New First Name ');
                    contact.firstName = newFirstName;
                    break;
                case 2:
                    const newLastName = prompt('Enter New Last Name ');
                    contact.lastName = newLastName;
                    break;
                case 3:
                    const newAddress = prompt('Enter New Address ');
                    contact.address = newAddress;
                    break;
                case 4:
                    const newCity = String(prompt('Enter New City '));
                    contact.city = newCity;
                    break;
                case 5:
                    const newState = prompt('Enter New State ');
                    contact.state = newState;
                    break;
                case 6:
                    const newZip = prompt('Enter New PinCode ');
                    contact.zip = newZip;
                    break;
                case 7:
                    const newPhoneNo = prompt('Enter New mobile No ');
                    contact.phoneNumber = newPhoneNo;
                    break;
                case 8:
                    const newEmail = prompt('Enter new Email ');
                    contact.email = newEmail;
                    break;
                default:
                    console.log("Wrong Choice");
                    break;
            }
        }
    });
    if(i==0){ console.log("contact not found")}
}

let select;
do{
    console.log("Enter 1 to Add Contact:- ");
    console.log("Enter 2 to Print Contact:- ");
    console.log("Enter 3 to Update Contact:- ");
    console.log("Enter 9 to Exit :- ");
    switch(select){
        case 1:
            addPerson();
            break;
        case 2:
            printAddressBook();
            break;
        case 3: 
            updatePerson();
            break;
    }
}while(select !=9)