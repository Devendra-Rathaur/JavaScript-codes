let p1 = new Promise(function (resolve, reject) {
    // alert("hey I am not resolved")
    setTimeout(() => {
        resolve(40)
    },2000)
})

p1.then(() => {
    console.log("Hurray")
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(78)
        },5000)
    })
}).then((value) => {
    console.log(value)
})

p1.then(() => {
    console.log("congratulations you have resolve  the promise")
})


    