let a = {
    name1: "devendra",
    city: "Kanpur",
    district: "Etwah",
     run: () => {
        alert("run fast");
    }
}
console.log(a);
let b = {
    run: () => {
        alert("run");
    }
}
b.__proto__ = {
        name: "pappu"
    }
    a.__proto__ = b
a.run();
console.log(a.name)

