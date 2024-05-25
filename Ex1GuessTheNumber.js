let flag = false;
let rand = Math.floor(Math.random() * 5);
while (!flag) {
   
    let UserIn = prompt("Enter the Number : ");
    if (rand == UserIn) {
        alert("Number is correct")
        flag = true;
    }
    else if (rand > UserIn) {
        alert("number is small")
    }
    else if (rand < UserIn) {
        alert("Number is Big")
    }
    
}
