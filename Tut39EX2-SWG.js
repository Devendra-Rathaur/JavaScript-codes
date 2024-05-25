//Math.foor() makes it a whole number. When you want a random number (integer) the standard syntax is:
//Math.floor(Math.random() * n) //n would be the number of possible options starting
//from 0. If n was 5 the pool of random numbers would be: 0, 1, 2, 3, 4.

let user = prompt("Enter S W G ")
let machineI = Math.floor(Math.random() * 3);
let machine = ["S", "W", "G"][machineI]
const match = (user, machine) => {
    if (user == machine) {
        return "nobody";
    }
    else if (user == "S" && machine == "W") {
        return "user"
    }
    else if (user == "S" && machine == "G") {
        return "machine"
    }
    else if (user == "W" && machine == "S") {
        return "machine"
    }
    else if (user == "W" && machine == "G") {
        return "user"
    }
    else if (user == "G" && machine == "W") {
        return "machine";
    }
    else if (user == "G" && machine == "S") {
        return "user";
    }
}
let result = match(user, machine);
document.write(`Machine: ${machine} <br> User: ${user}<br> The winner is : ${result.toUpperCase() }`)
console.log( result.toUpperCase()) 