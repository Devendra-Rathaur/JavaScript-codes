class Animal{
    constructor(name) {
        this.name = Animal.capitalized(name);
    }
    walk() {
        alert("Animal " + this.name + " is walking ");
    }
   static capitalized(name) {
       return name.charAt(0).toUpperCase() + name.substr(1, name.length);
       
    }
}
let j = new Animal("jack");
j.walk();