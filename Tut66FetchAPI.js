let p = fetch('https://api.adviceslip.com/advice');
p.then((responce) => {
    console.log(responce.status);
    console.log(responce.ok);
    console.log(responce.headers);
    return responce.json();
}).then((value2) => {
    console.log(value2);
})