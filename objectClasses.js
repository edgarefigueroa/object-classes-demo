// creating new object for a person with firstname, lastName & age

let person = {
    firstName: "Chanandler",
    lastName: "Bong",
    age: 35,
    likes: ["making jokes ", "Can i be any more weird ", "basketbal "],
  };
  
  // using dot notantion access the firstname
  console.log(person.firstName);
  
  // using bracket notation access the lastName
  console.log(person["lastName"]);
  
  // using bracket notation acess 2nd like
  console.log(person["likes"][1]);
  
  //Object Destructuring
  let meal = {
    appetizer: "chips & salsa",
    entree: "chille relleno",
    dessert: "churros",
    drink: "horchata",
  };
  
  //using object destructuring, destructure the dessert property off of the meal object
  let { dessert } = meal;
  console.log(dessert);
  console.log(`${dessert} goes well with everthing`);
  // let destructure the remaining item in the same declaration
  let { appetizer, entree } = meal;
  console.log(`${appetizer} goes well with ${entree}`);
  //lets destructure drink and rename it
  let { drink: bestDrink } = meal;
  console.log(bestDrink);
  
  // looping using a for-in-loop
  // loop over person object
  
  for (key in person) {
    console.log(` ${key} is : ${person[key]}`);
  }
  // add new property
  // lets add a job key to person object using dot notation
  person.job = `Data Analyst`;
  // lets add pet array ising bracket notation
  person["pets"] = ["dog", "cat"];
  console.log(person);
  // deleteproperties
  let teams = {
    teamOne: [`ryan`, `patric`, `harry`, `haywood`, `dj`],
    teamTwo: [`jilian`, `emily`, `kellie`, `devin`, `devin e`],
    teamThree: [`hamzah`, `isha`, `teryn`, `rose`, `lana`],
  };
  delete teams.teamTwo;
  console.log(teams);
  
  //classes
  class Dog {
    constructor(name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
    }
    greeting() {
      console.log(
        `Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}`
      );
    }
    getAge() {
      console.log(this.age);
    }
  }
  
  let lassie = new Dog(`lassie`, `colloe`, 7);
  console.log(lassie);
  let beethoven = new Dog(`Beethoven`, `st. bernard`, 2);
  console.log(beethoven);
  
  lassie.greeting();
  beethoven.greeting();
  
  // now we can loop over ourinstance of dog
  for (key in lassie) {
    console.log(lassie[key]);
  }
  
  // extending classes
  class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel) {
      super(name, breed, age);
      this.trainingLevel = trainingLevel;
    }
  
    levelUp(num) {
      this.trainingLevel = num;
    }
  }
  
  let scrappyDoo = new Puppy(`scrappy`, `great-Dane`, 1, 3);
  scrappyDoo.greeting();
  scrappyDoo.levelUp(5);
  console.log(scrappyDoo);