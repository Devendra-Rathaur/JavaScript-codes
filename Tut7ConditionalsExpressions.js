let a = prompt("Hey enter the value");
// console.log(a);
 let me = document.getElementById('me');
me.innerHTML = `Your age is ${a}`;

if (a < 0) {
    console.log("age is less than 0");

}
else if(a < 9){
    console.log("age is less than 9");
}
else if (a > 18&& a<60) {
    console.log("you can drive ");
}
else {
    console.log("you can not drive");
}

console.log("You can", a < 18 ? "you can not do marrige in this age" : "Can do marrige");