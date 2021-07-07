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
    set firstName(firstname){ this._firstname = firstname }

    get lastName(){ return this.lastName;}
    set lastName(lastname){ this._lastname = lastname }

    get address(){ return this.address;}
    set address(address){ this._address = address }

    get city(){ return this.city;}
    set city(city){ this._city = city }

    get state(){ return this.state;}
    set state(state){ this._state = state }

    get zip(){ return this.zip;}
    set zip(zip){ this._zip = zip }

    get phoneNumber(){ return this.phoneNumber;}
    set phoneNumber(phonenumber){ this._phonenumber = phonenumber }

    get email(){ return this.email;}
    set email(email){ this._email = email }

    toString() {
        return " \nFirstName : " +this.firstName+ "\nLastName : " +this.lastName + 
        "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip : " +this.zip+ "\nPhoneNumber : " +this.phoneNumber+ 
        "\nemail : " +this.email;
    }
}