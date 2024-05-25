class Animal{
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    run() {
       console.log(this.name +" Can run fast") 
    }
    shout() {
       console.log(this.name +" It can shout")
    }
}
class Monkey extends Animal{
    eatBanana() {
        console.log(this.name + "Eating banana")
    }
}
let a1 = new Animal("Dog","black")
let monkeyMunna = new Monkey("Chimpu", "brown");
a1.run();
a1.shout();
// a1.eatBanana(); // it will throw an error because Animal ke andar eatBanana method nhi hai
monkeyMunna.run();
monkeyMunna.shout();
monkeyMunna.eatBanana();