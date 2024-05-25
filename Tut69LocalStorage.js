let key = prompt("enter the key")
let value = prompt("enter the value")
localStorage.setItem(key, value)
console.log(`The value of ${key} is ${localStorage.getItem(key)}`)
//localStorage.getItem(key) ye us perticular key pr value btata hai .getItem(key) ye chij
if (key == "village" || key == "black") {
    localStorage.removeItem(key);
}
console.log(`The value of ${key} is ${localStorage.getItem(key)}`)
if (key == "0") {
    localStorage.clear();
}
console.log(localStorage.length);
console.log(`the value of key is on index ${localStorage.key(1)}`)