class Animal{
    constructor(name) {
        this._name = name; 
    }
    fly() {
        alert("mai sky mai ud sakta hu");
    }
    get name() {
        return this._name;
    }

    set name(myname) {
        this._name = myname;
    }

}

class Dog extends Animal{
    bark() {
    console.log("bhau bahu kuktta")
}
}


let a = new Dog("pappu");
a.fly();
console.log(a.name)
a.name = "Devendra";
console.log(a.name);
let c = 544;
console.log(a instanceof Animal);
console.log(c instanceof Animal);