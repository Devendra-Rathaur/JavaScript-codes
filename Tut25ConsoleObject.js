console.log(console)

console.log("hii")
console.assert("error" != false)
console.assert("error" == false)
console.info("info")
console.warn("warn")
console.error("error")
let obj = { Ram: 120, seeta: 450, shyam: 560, hari: 690 }
console.table(obj)
// console.clear()

console.time("forLoop")
for (let i = 0; i < 100; i++) {
    console.log("hii for loop")
}
console.timeEnd("forLoop")

console.time("whileLoop")
let i = 0
while (i < 100) {
    console.log("hii while loop")
    i++
}
console.timeEnd("whileLoop")

