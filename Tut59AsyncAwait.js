async function dev() {

    let delhiweather = new Promise(function (resolve, reject ) {
    setTimeout(() => {
        resolve("27 degree");
    },3000)
})

    let bangloreweather = new Promise(function (resolve, reject ) {
    setTimeout(() => {
        resolve("56 degree");
    }, 7000)
    
})
    // delhiweather.then(alert)
    // bangloreweather.then(alert)
    console.log("feaching delhi weather please wait ")
    let delhiW = await delhiweather;
    console.log("after feaching delhi "+delhiW)
    console.log("feaching banglore  weather please wait ")
    let bangloreW = await bangloreweather;
    console.log("after feaching banglore  "+bangloreW)

}
const cherry = async () => {
    console.log("hey I am charry and I am wating ")
}
const main1 = async () => {
    console.log("welcome to weather control room ")
    let a = await dev(); 
    let b = await cherry();
}
main1();

