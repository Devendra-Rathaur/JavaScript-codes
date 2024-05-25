let promise = new Promise(function (resolve, reject) {
    console.log("Kya baat hai");
    resolve(78);
});

console.log("hello1");

setTimeout(function () {
    console.log("hello2 setTimeout 4 sec")
}, 4000);

console.log("hello3 My name is dev bhashkar");
console.log(promise);

//Fetch google.com homepage => console.log("google.com home page done")
//Fetch data from the data api
//Fetch pic from the server
//Print downloading
//Rest of the script