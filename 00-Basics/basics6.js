//javascript objets
//object is collection of properties
//object is defined with curly braces {}
//object properties are written as name:value pairs, separated by commas

let person = {
    firstname: "John",
    lastName: "Doe",
    fullName: function() {
        console.log(this.firstname + " " + this.lastName); //this keyword refers to the current object
    }
};

//accessing object properties
console.log(person.firstname); //John

//you can also use bracket notation to access object properties
console.log(person["lastName"]); //Doe

console.log(person.fullName()); //John Doe

person.firstname = "Jane"; //change the value of a property
console.log(person.firstname); //Jane

//you can also add new properties to an object
person.age = 30;
console.log(person.age); //30
person["city"] = "New York";
person.gender = "Male";
console.log(person);
delete person.age; //delete a property from an object
console.log(person); //age property is deleted
console.log('gender' in person); //check if a property exists in an object, true or false

for (let key in person) {
    console.log(key + ": " + person[key]); //loop through the properties of an object
}
