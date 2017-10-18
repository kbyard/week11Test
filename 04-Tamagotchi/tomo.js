function DigitalPal(hungry, sleepy, bored, age) { //false false true 0
  this.hungry = hungry;
  this.sleepy = sleepy;
  this.bored = bored;
  this.age = age;
  this.feed = function () {
    console.log("=======feed");
    // If hungry is true, print "That was yummy!", set hungry to false, and then set sleepy to true. If hungry is false, print "No thanks! I'm full.
    if (this.hungry == true) {
      console.log("that was yummy!");
      this.hungry = false;
      this.sleepy = true;
    }else {
      console.log("no thanks i'm full");
    }
  }
  this.sleep = function () {
    console.log("=======sleep");
    //If sleepy is true, print "Zzzzzzzz", set sleepy to false, then set bored to true, and then run increaseAge(). If sleepy is false, print "No way! I'm not tired."
    if (this.sleepy ==  true) {
      console.log("Zzzzzzzz");
      this.sleepy = false;
      bored = true;
      this.increaseAge()
    }else {
      console.log("no way! i'm not tired!!!");
    }
  }
  this.play = function () {
    console.log("=======play");
    //If bored is true, print "Yay! Let's play!", set bored to false, and then set hungry to true. If bored is false, print "Not right now. Later?"
    if (this.bored == true) {
      console.log("yay!!! lets play!!!");
      this.bored = false;
      this.hungry = true;
    }else {
      console.log("not right now!!!! maybe later!");
    }
  }
  this.increaseAge = function () {
    console.log("=======increaseAge");
    //This method runs within the sleepy() method when the DigitalPal goes to sleep and increases the DigitalPal's age by one while also printing "Happy Birthday to me! I am "+age+" old!"
    this.age++
    console.log("Happy Birthday to me! I am " + this.age + " old!");
  }
}

var dog = new DigitalPal(false, false, true, 0);
dog.outside = false;
console.log(dog);
// goOutside() - If outside is false, prints "Yay! I love the outdoors!", sets outside to true, and runs Bark(). If outside is true, prints "We're already outside though..."
//
dog.bark = function () {
  console.log("woof woof");
}
dog.goOutside = function () {
  if (this.outside == false) {
    console.log("Yay! I love the outdoors!");
    this.outside = true
    this.bark()
  }else {
    "we're already outside though....."
  }
}
// goInside() - If outside is true, prints "Do we have to? Fine..." and sets outside to false. If outside is false, prints "I'm already inside..."
dog.goInside = function () {
  if (this.outside == true) {
    console.log("Do we have to? Fine...");
    this.outside = false
  }else {
    console.log("I'm already inside...");
  }
}
dog.bark()
dog.goOutside()
dog.goInside()

// meow() - prints out "Meow! Meow!" when run
//
// destroyFurniture() - Lowers HouseCondition by 10 and prints "MUAHAHAHAHA! TAKE THAT FURNITURE!" to the screen. Also sets bored to false and sleepy to true. If HouseCondition is equal to 0, then this should not run anymore.
//
// buyNewFurniture() - Raises HouseCondition by 50 and prints "Are you sure about that?" to the screen.
var cat = new DigitalPal(false, false, true, 0);
cat.houseCondition = 100;
cat.meow = function () {
  console.log("meow meow");
}
cat.destroyFurniture = () => {
  if (houseCondition !== 0) {
  this.houseCondition -= 10;
  console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
  this.bored = false;
  this.sleepy = true;

  }
}
cat.buyNewFurniture = function () {
  this.houseCondition += 50;
  console.log("Are you sure about that?");
}
