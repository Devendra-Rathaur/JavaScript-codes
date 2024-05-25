let marks = {
    Devendra: 89,
    Nikk: 90,
    Myank: 78,
    palak: 98,
    dinesh: 79,
    Mamta:99
}

// ques1

// for (let i = 0; i <= Object.keys(marks).length; i++){
//     console.log("The marks of ", Object.keys(marks)[i], " is ", marks[Object.keys(marks)[i]]);
// }

// ques2 using for in
for (keys in marks) {
    console.log("marks of ", keys, " is ", marks[keys]);
}


//ques4
const mean = () => {
    let a = 23;
    let b = 83;
    let c = 283;
    let d = 93;
    value = (a + b + c + d) / 4;
    return value;
}
console.log(mean());

