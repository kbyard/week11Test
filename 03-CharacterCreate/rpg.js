function CreateChar(name, prof, gender, age, str, hp) {
  this.name = name;
  this.profession = prof;
  this.gender = gender;
  this.age = age;
  this.strength = str;
  this.hp = hp;
  this.printStats = function () {
  console.log(this);
  }
  this.isAlive = function() {
    if (this.hp > 0) {
      console.log("you have ", this.hp, "left");
    }else {
      console.log('you dead!');
    }
  }
  this.attack = function (opponent) {
    console.log(opponent.hp);
    opponent.hp -= this.strength;
  }
  this.levelUp = function () {
    this.age++;
    this.strength += 5;
    this.hp += 25
  }
}

var ryan = new CreateChar("ryan", "coder", "male", 24, 5001, 10000);
var frodo = new CreateChar("frodo", "hobbit", "male", 10, 200, 7000);
ryan.printStats()
frodo.printStats()

ryan.attack(frodo)
console.log("---------", "attack");
frodo.printStats();
console.log("---------", "see stats");
frodo.isAlive()
console.log("---------", "is allive");
frodo.levelUp()
console.log("---------", "you leveled up");
console.log(frodo);
console.log("---------", "see tats");
ryan.attack(frodo)
console.log("---------", "attack");
frodo.isAlive()
console.log("---------", "is allive");
