//Syscronous programming
// let a = prompt("Enter your name: ");
// let b = prompt("whats your age: ");
// // b = Number.parseInt(b);
// let c = prompt("whats your Designation")
// console.log(`your name is :${a} and age is : ${b}, designation is: ${c}`);

//Asyscronous programming
// let clg = "LPU";
// console.log(clg);
// setTimeout(function () {
//     console.log("hey you are learning callbaccksthats great") // isko wait krna pdega 5sec tak usse phle niche bali chij print ho jaegi
// },5000)
// let teacher = "Vikash";
// console.log(teacher);

// let fs = require('fs');
// fs.readdir('dev', (err, data) => {
//     console.log(err,data);
// });

const loadScript = (src,callback) => {
    let script = document.createElement('script');
    script.src = src;
    
    document.body.appendChild(script);
    console.time('lola')
    script.onload = () => {
        console.log("loaded script with src: "+src)
        callback(null,src);
    }
    console.timeEnd('lola');
    script.onerror = () => {
        callback(new Error("Failed to load the script"));
    }

}

const hello = (err, src) => {
    if (err) {
        console.log(err);
    }
    console.log(`Script loaded ${src}`)
}

const goodmorning = (err, src) => {
    if (err) {
        console.log(err);
        sendEmergencyMessageToCEO();
    }
    console.log(`good morning ${src}`)
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', hello);

