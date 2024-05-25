
let x = function (event) {
    console.log(event.target)
    console.log(event)
    console.log(event.type)
    console.log(event.currentTarget)
    console.log(event.type,event.clientX,event.clientY)
    
    alert("Hello World1")
}



// let y = function (e) {
//     console.log(e)
//     alert("Hello World2")
// }

btn.addEventListener('click',x)

// btn.addEventListener('click', y)

// let a = prompt("Enter the value of a : ");
// if (a == '2') {
//     btn.removeEventListener('click', x)  
// }
