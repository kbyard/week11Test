// The programmer's name
// Their position/job title
// How old they are
// Favorite programming language
// Now create a method for the constructor that would print all of the information contained within an object to the console.
//
// Finally, create a "Programmer" object and call the method to print its contents
//


function Programmer(name, job, age, lang) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.lang = lang;
  this.progInfo = function () {
    console.log(this);
  }
}
var ryan = new Programmer("ryan", "TA", 24, "JavaScript");
ryan.progInfo()
