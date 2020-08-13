// class Astronaut{
//   constructor(name, age, mass){
//     this.name = name;
//     this.age = age;
//     this.mass = mass;
//   }
// }

// let fox = new Astronaut('Fox', 7, 12);
// let hippo = new Astronaut('Hippo', 25, 1500);

// console.log(fox)
// console.log(hippo)



// class BreakDancer{
//   constructor(name, age, style='HeadSpinner'){
//     this.name = name;
//     this.age = age;
//     this.style = style;
//   }
// }

// let joey = new BreakDancer('Joey', 35)

// console.log(joey)


// class BreakDancerO{
//   constructor(name, age, style){
//     this.name = name;
//     this.age = age;
//     this.style = style;
//   }
//   styleCheck(){
//     let info = `${this.name} is ${this.age} and has a ${this.style} breakdancing style.`
//     return info;
//   }
// }

// class BreakDancerI{
//   constructor(name, age, style){
//     this.name = name;
//     this.age = age;
//     this.style = style;
//     this.styleCheck = function(){
//       let info = `${this.name} is ${this.age} and has a ${this.style} breakdancing style.`
//       return info;
//     }
//   }
// }
// let joey = new BreakDancerO('Joey', 35, 'Head Spinner')
// let joe = new BreakDancerI('Joe', 25, 'Breaker')

// console.log(joey)
// console.log(joe.styleCheck())


// class Hero{
//   constructor() {
//     this.hero = true
//     this.hp = 100;
//   }

//   attack(){
//     let string = 'I attack the darkness'
//    return string
//   }
// }

// class Warrior extends Hero {
//   constructor(){
//     super();
//     this.shout = 'Battle Shout'
//   }
// }

// class Mage extends Hero {
//   constructor(){
//     super();
//     this.hp = 50
//     this.spell = 'Fireball'
//   }
// }

// let warrior = new Warrior();
// let joe = new Hero();
// let mage = new Mage();

// console.log(mage)


//excercise
class Book {
  constructor(title, author, copyright, isbn, pages, timesCheckout,discarded){
    this.title = title;
    this.author = author;
    this.copyright = copyright;
    this.isbn = isbn;
    this.pages = pages;
    this.timesCheckout = timesCheckout;
    this.discarded = discarded;
  }

  newFunction(string) {
    return string;
  }
}

class Manual extends Book {
  constructor(title, author, copyright, isbn, pages, timesCheckOut, discarded, isCool){
        super(title, author, copyright, isbn, pages, timesCheckOut, discarded);   
        this.isCool = isCool; 
    }

  dispose(currentYear){
    if(currentYear-this.copyright > 5){
      this.discarded = 'Yes'
    }
  }
}

let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000', 1147, 1, 'No', 'Cool')

makingTheShip.dispose(2019);
console.log(makingTheShip.newFunction('Javascript is weird sometimes'))

// class Novel extends Book {
//     constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
//         super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
//     }
//     //discarded if checked out over 100 times

//     //incrememt checkouts?
// }
