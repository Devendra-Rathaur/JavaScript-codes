class Employee {
    constructor(name) {
        console.log(`${name}- employee constructor is here `)
        this.name = name;

    }
    logIn() {
        console.log("employee has loged in ")
    }
    logOut() {
        console.log(`employee has logged out `)
    }
    requstLeaves(leaves) {
        console.log(`emplyee has requested for ${leaves}`)
    }
}
class Programmer extends Employee {
    constructor(name) {
        super("pappu");
        console.log(`${name}- programmer  constructor is here- this is a newly written constructor `)
        this.name = name;

    }
    // constructor(....args) { -> if there is no constructor in child class, this is created autometically
    //     super(...args)
    // }
    
    requstCofee(x) {
        console.log(`Programmer requested ${x} cofees everyday`)
    }
    requstLeaves(leaves) {
        super.requstLeaves(6);
        // console.log(`emplyee has requested for ${leaves+1} (one extra)`) 

    }
}

let p = new Programmer("munni");
p.logIn();
p.logOut();
p.requstLeaves(7);
p.requstCofee(4);

