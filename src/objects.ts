 export class Person {

     firstname: string;
     lastname: string;
     address: string;
     dob: Date;
     passport: number;

    constructor(_firstname: string, _lastname: string, _address: string, _dob: string, _passport: number){
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.address = _address;
        this.dob = new Date(_dob);
        this.passport = _passport;
    }

  

    personAge(){
        const currentDate = new Date();   
        let miliseconds = currentDate.getTime()- this.dob.getTime();  
        let years = miliseconds / 31556952000;
        let age = Math.floor(years);  
        return age;
    }

    addressFormat(){
        let fullAddress = this.address;
        let countryIndex = fullAddress.indexOf("Country");
	    let townIndex = fullAddress.indexOf("Town");
	    let streetIndex = fullAddress.indexOf("Street");
        let arrayInitialLine = Array.from(fullAddress);
        let arrLength = arrayInitialLine.length; 
        let line1 = arrayInitialLine.slice(0,townIndex-1).join("");
	    let line2 = arrayInitialLine.slice(townIndex, streetIndex-1).join("");
	    let line3 = arrayInitialLine.slice(streetIndex, arrLength).join("");
        
        return 'Full address is:' + '\n'+  line1 + '\n' + line2 + '\n' + line3;
    }   

    
}

const person1 = new Person('John', 'Smith', 'Country: Romania, Town: Bucharest, Street: Aviatorilor street, number 11', '1900-1-1', 46156);

console.log(person1);

console.log("age of " + person1.firstname + ' ' + person1.lastname +  ' is: ' + person1.personAge() + ' years old');
console.log(person1.addressFormat())



    
    





    








