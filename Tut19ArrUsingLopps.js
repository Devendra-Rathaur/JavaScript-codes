let num = [34, 78, 65, 27, 84, 90]
//forloop
for (let i = 0; i < num.length; i++){
    console.log(num[i])
}
//Array.from
let myname = "devendra"
let arr = Array.from(myname)
console.log(arr);


//forEach
console.log("for each")
num.forEach(element => {
   console.log(element)
});

//for...of
console.log("for of")
for (let item of num) {
    console.log(item)
}


//for...in 
console.log("for in")
for (let i in num) {
    console.log(num[i])
}