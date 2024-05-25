//program to add first n natural numbers
let sum = 0;
let n = 25000;
for (let i = 0; i <= n; i++){
    sum += i;
}
console.log("Sum of n natural number is :" + sum);

//for in loop
let obj = {
    Devendra: 89,
    Nikhil: 90,
    Mamta: 94,
    Aryan: 79
}
for (let a in obj) {
    console.log("marks of " + a + " is " + obj[a]);
}

// for of loop
for ( a of "Karan") {
    console.log( a);
}


