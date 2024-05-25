document.getElementById('google').addEventListener('click', function () {
    window.location = "https://google.com";
})

// setInterval(function () {
//     document.write("hey dev coder");
    
// },500)

setInterval(function () {
    document.querySelector('#bulb').classList.toggle('bulb');
},600)