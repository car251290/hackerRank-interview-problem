'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
   constructor(firstName,lastName,idNumber,score){
       super(firstName,lastName,idNumber)
       this.score = score;
   }
   calculate(){
       const average = this.score.reduce((acc,val)=> acc + val)/this.score.length;
       const Lettergrade = ['O','E','A','P','D','T'];
       if(average >= 90){return Lettergrade[0];}
        if(average >= 80){return Lettergrade[1];}
        if(average >= 70){ return Lettergrade[2];}
       if(average >= 55){return Lettergrade[3]}
       if(average >= 40){return Lettergrade[4];}
       else {
            return Lettergrade[5];
       }
        
       
   }
}