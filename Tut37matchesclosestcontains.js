let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".poo")) //to checkif the element matches the given css selector
console.log(id1.matches(".cl1"))
console.log(sp1.closest("#id1"))// to look for the nearest ancestor matches the given css selector the element itself also checked 
console.log(id1.contains(sp1))// return true if the elementB is inside the elementA(a descendant of elementA) or when elementA == elementB
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))
