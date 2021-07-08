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