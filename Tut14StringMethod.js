let myname = "Devendra Singh";
let friendname = "harry";
console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.slice(2, 11));
console.log(myname.slice(4));
console.log(myname.replace("Dev", "Shail"));
console.log(myname.concat(" is friend of ", friendname, " thank you "));

let msg = "           hola hola ula ula         ";
console.log(msg);
console.log(msg.trim());

let fr = "ramesh" + " suresh" + " gagan";
console.log(fr[4]);
// fr[8] = j; it is not possible string is immutable
console.log(fr);

//quick quiz
for (let i = 0; i < fr.length; i++){
    console.log(fr[i]);
}


