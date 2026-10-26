//Inheritance is the main pillar in object oriented programming
//one class can inherit/acquire the properties, methods of another class
//the clas which inherits the properties of other is know as subclass(derived class, child class name 
//the clas whose properties are inherited is known as superclass(base class, parent class name)
const Person = require('./basics7.js');

class Pet extends Person{

   get Location(){
    return "BlueCross Shelter";
    }

    constructor(firstName, lastName){
        //call parent class constructor
        super(firstName, lastName);
    }
}

let pet = new Pet("Tom", "Cat");
console.log(pet.fullName());
console.log(pet.Location);