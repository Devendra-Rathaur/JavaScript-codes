let p1 = new Promise(function (resolve, reject) {
    console.log("I am pending promise")
    setTimeout(() => {
        // console.log("I am promise and I am resolved")
        resolve(true)
    },4000)
});
let p2 = new Promise(function (resolve, reject) {
    console.log("I am pending promise")
    setTimeout(() => {
        // console.log("I am promise and I am rejected")
        reject(new Error("I am new error"))
    },4000)
});
// console.log(p1,p2) //ye promise pending show karega
//To get the value 

p1.then((value) => {
    console.log(value);
})

//To catch the error
// p2.catch((error) => {
//     console.log("error ocored in p2")
// })

p2.then((value) => {
    console.log(value)
}, (error) => {
    console.log(error);
})