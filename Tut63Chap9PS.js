const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script'); // Declare the 'script' variable
        script.src = src;
        script.onload = () => {
            resolve(src+ " Done success");
        };
        document.body.appendChild(script);
    });
};

//ques1
// let a =  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
// a.then((value) => {
//     console.log(value)
// })

// Ques2
// const main2 = async () => {
//     console.log(new Date().getMilliseconds())
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
//     console.log(new Date().getMilliseconds())
// };
// main2();

// ques3
// let p = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("this is not applicable!!"))
//         }, 3000);
//     });
// }
// let output = async () => {
//     try {
//         let c = await p()
// console.log(c)

//     } catch (err) {
//         console.log(err + " this error hasbeen handled")
//     }
   
// }
// output();

//ques4
let p1 = async () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
        resolve(20)
    },2000)
})
}

let p2 = async () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
        resolve(30)
    },1000)
})
}

let p3 = async () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
        resolve(40)
    },3000)
})
}

let ans = async () => {
    console.time('run')
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();
    // console.log(a1, a2, a3);

    let a1 =  p1();
    let a2 =  p2();
    let a3 = p3();
    let a1a2a3 = await Promise.all([a1, a2, a3]);
    console.log(a1a2a3);
    console.timeEnd('run');
}
ans();
