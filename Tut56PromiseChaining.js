// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("resolve after 2 sec")
//         resolve(45)
//     },2000)
// })
// p1.then((value) => {
//     console.log(value)
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("promise 2")
//         },5000)
//     })
//     return p2;
// }).then((value) => {
//     console.log(value)
//     console.log("we are done");
//     return 2;
// }).then((value) => {
//     console.log("Now we are pakka done")
// })



const loadScript = (src) => {
    return new Promise((resolve,reject)=> {
        let script = document.createElement('script');
        script.type = "text/javascript"
        script.src = src;
        document.body.appendChild(script)

        script.onload = () => {
            resolve("script has been loaded devendra ji")
        }
        script.onerror = () => {
            reject(0)
        } 
    })
}

let p1 = loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');
p1.then((value) => {
    console.log(value)
    return loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
}).then((value) => {
    console.log("second script loaded")
}).catch((error) => {
    console.log("sorry we are having problem to loading this script")
})