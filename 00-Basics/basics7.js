
module.exports = class Person
{
    age = 25
    //location = "India"
    //location is property but we can also create it as method and we can call it as property
    get location()
    {
        return "India"
    }
//constructor is method which executes by default when we create object for class
//this are like instance method but they execute by default when we create object for class
    constructor(firstName, lastName)
    {
        //instance variable or property
        this.firstName = firstName
        this.lastName = lastName
        console.log("Constructor executed")
    }
    //methods
    fullName()
    {
        console.log(this.firstName + " " + this.lastName)
    }
}                                                                                                                                                                                                     

//object for class
//let person = new Person("Tom", "Hanks");
//let person1 = new Person("Brad", "Pitt");
//console.log(person.age)
//when we do automation we create all page objects as properties of class and 
// then we can use those properties in our test cases
//console.log(person.location)
//console.log(person.fullName())
//console.log(person1.fullName())