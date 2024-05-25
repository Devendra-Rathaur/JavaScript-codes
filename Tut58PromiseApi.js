let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {

        // resolve("hello1")
        reject(new Error("Error"))
    }, 2000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve("hello2")

    }, 4000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve("hello3")
    }, 6000)
})

// p1.then((value) => {
//     console.log(value)
// })

// p2.then((value) => {
//     console.log(value)
// })

// p3.then((value) => {
//     console.log(value)
// })

//promise.all nhi chalegi agar ek bhi promise reject hui
// let promise_all = Promise.all([p1, p2, p3]);
// promise_all.then((value) => {
//     console.log(value);
// })

   
//promise.allsettle return array of object with status and value
// let promise_all_settled = Promise.allSettled([p1, p2, p3]);
// promise_all_settled.then((value) => {
//     console.log(value);
// })

// let promise_race = Promise.race([p1, p2, p3]);
// promise_race.then((value) => {
//     console.log(value);
// })

// let promise_any = Promise.any([p1, p2, p3]);
// promise_any.then((value) => {
//     console.log(value);
// })

// let promise_resolve = Promise.resolve(7);
// promise_resolve.then((value) => {
//     console.log(value);
// })

// let promise_reject = Promise.reject(new Error("heyy"));
// promise_reject.then((value) => {
//     console.log(value);
// })