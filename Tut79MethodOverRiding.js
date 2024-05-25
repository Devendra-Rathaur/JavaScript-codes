class Employee{
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
class Programmer extends Employee{
    requstCofee(x) {
        console.log(`Programmer requested ${x} cofees everyday`)
    }
    requstLeaves(leaves) {
        super.requstLeaves(6);
        // console.log(`emplyee has requested for ${leaves+1} (one extra)`) 
        
    }
}

let p = new Programmer();
p.logIn();
p.logOut();
p.requstLeaves(7);
p.requstCofee(4);

