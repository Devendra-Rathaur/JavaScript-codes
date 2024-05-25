console.log(document.cookie);
document.cookie = "name = devendra4578";
document.cookie = "name2 = rajesh";
document.cookie = "name = prakash";
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
console.log(document.cookie);

// console.log(decodeURIComponent('% 4034!5'))
