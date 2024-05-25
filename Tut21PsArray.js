//chapter5 practice set
// ques1
let arr = [45, 63, 56, 24, 95]
arr.push(45)
console.log(arr)

//ques2
// console.log("ques2")
// let arr1 = [67, 34, 23, 15, 89]
// let a;
// do {
//     a = prompt("enter the values ")
//     a = Number.parseInt(a)
//     arr1.push(a)

   
// } while (a!=0);
// console.log(arr1)

//ques3
let arr2 = [90, 78, 56, 34, 78, 60, 43, 30]
let newArr2 = arr2.filter(a => {
    return a % 10 == 0;
})
console.log(newArr2)

//ques4
let arr3 = [67, 89, 43, 32, 4, 5, 9,10]
let newArr3 = arr3.map(a => {
   return a*a
})
console.log(newArr3)
