//we use map when we want to make new arr
//for each tab use karte hai jab hame koi operation karna hota hai
//ye functions hamare origional array ko modify nhi karte hain

//array map method
let arr = [67, 54, 39, 89, 60]
let arr1 = arr.map((value, index, array) => {
    console.log(value)
    return value + index
    
})
    console.log(arr1)

// array filter method
console.log("filter ")
let arr2 = [45, 43, 56, 21, 55, 89, 67, 54]
let arr3 = arr2.filter(a => {
    return a>50
})
console.log(arr3)

//Array reduce method
console.log('reduce')
let arr4 = [8, 5, 3, 7, 1, 6]
// let newArr4 = arr4.reduce((h1, h2) => {
//     return h1 + h2  
// })
// console.log(newArr4)

//function alag se bhi bna kar udar laga sakte hai fir reduce use kar sakte hai
const reduce_fun = (h1, h2) => {
    return h1+h2
}
let newArr4 = arr4.reduce(reduce_fun)
console.log(newArr4)



