document.write("Devendra Singh")
// let a = setTimeout(function () {
//     alert("I am Set TimeOut")
// }, 5000);

// b = prompt("Do you want set time out")
// if (b == "n") {
//     clearTimeout(a)
//clearTimeOut is use to cancal the excution
// }
// console.log(a);

let sum = (a,b,c) => {
    console.log("The sum of a+b+c is : ",(a+b+c))
}
setTimeout(sum, 7000, 7, 9, 4)

// setInterval(function () {
//     alert("maine interval set kar liya hai mere bhai")
// },6000)
//setInterval ek perticular interval par bar bar execute hota rahega

let multiply = (a, b, c) => {
    // console.log("The multiply of axbxc is : ", (a * b * c))
    // document.write("The multiply of axbxc is : ", (a * b * c))
}
setInterval(multiply, 7000, 7, 9, 4)