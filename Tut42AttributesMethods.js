let first = document.getElementById("first")
let a = first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
console.log(first.setAttribute("class", "dev"))

// console.log(first.removeAttribute("class"))

console.log(first.attributes)
console.log(first.dataset)
console.log(first.dataset.player)
console.log(first.dataset.game)