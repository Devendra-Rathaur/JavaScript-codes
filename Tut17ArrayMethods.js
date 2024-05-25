let arr = [45, 78, 34, 67, 45, 90]
let b = arr.toString() //convert array into string
console.log(b)

let x = arr.join(" and ") // join array element using seprator
console.log(x)

let y = arr.pop(); // removes the last element from an array
console.log(y) //it will give removed element
console.log(arr)

let z = arr.push(55) // it will give the lenth of arr after adding 55 at last
console.log(arr, z);

let p = arr.shift() // it removes the first elenent and return that
console.log(p, arr)

let q = arr.unshift(67) // it add 67 at the starting position and return the length 
console.log(arr,q)
