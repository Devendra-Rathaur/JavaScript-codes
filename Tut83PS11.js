//Ques1
class Complex {
    constructor(real,imagenary) {
        this.real = real;
        this.imagenary = imagenary;
    }
    add(num) {
        this.real = this.real + num.real;
        this.imagenary = this.imagenary + num.imagenary;
    }
    get real() {
        return this._real;
    }
    set real(newreal) {
        this._real = newreal;
        
    }
    get imagenary() {
        return this._imagenary;
    }
    set imagenary(newimagenary) {
        this._imagenary = newimagenary;

    }
}


//Ques3
class Human{
    constructor(name, food) {
        this.name = name;
        this.food = food;

    }
    walk() {
        console.log(`${this.name} Human is walking`);
    }
}
class Student{
    walk() {
    console.log(`${this.name}  Student is walking  `)
}
}

 //Ques1
let a = new Complex(5, 3);
console.log(a.real, a.imagenary)
a.real = 10;
a.imagenary = 14;

let b = new Complex(2, 8);
a.add(b);
console.log(`${a.real} + ${a.imagenary}i`)
// alert(`${a.real} + ${a.imagenary}i`)
  
//Ques3
let h = new Human('pawan', 'pizza');
h.walk();