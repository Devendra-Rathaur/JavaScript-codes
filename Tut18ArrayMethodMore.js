let arr = [12, 55, 163, 6, 17]
let arr1 = [45, 67, 34, 55, 63, 71]
let arr2 = [98, 76, 89, 45, 26, 94]
console.log(arr.length)
//delete is an operator
//using delete operator array element delete but size never change 

// delete arr[1]
// console.log(arr.length)
// console.log(arr)

let newarr = arr.concat(arr1, arr2) //return a new array does not change the existing array
console.log(newarr)


//sort() method used to sort an array alphabetically
// arr.sort()
// console.log(arr)

//compare function ka use krke ham sort kr sakte hai accending or decending order mai
let compare = (a, b) => {
    return a - b
}
arr.sort(compare)
console.log(arr)

//splice() return the deleted item modifies the array

console.log(arr1)
let removed_element = arr1.splice(2, 1, 345, 567, 234, 678)
console.log(removed_element)
console.log(arr1)


//slice() it create a new piece of array
let pieceArr2 = arr2.slice(2, 5)
console.log(pieceArr2)
console.log(typeof pieceArr2)
//reverse()
arr1.reverse()
console.log(arr1)
