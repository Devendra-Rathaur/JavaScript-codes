let message = [
    "Hackig your systems data.....",
    "Facebook is going to hack.....",
    "Your facebook pass is : dev******490.......",
    "Your Linkendln pass is : 5557hhbkkjj.......",
    "Your bank account pass is : SBI789h4gs.......",
    "Hacking your gamil pass : It's gth*****uo.....",
    "Hacking Insta your username is deveg890.ui.....",
    "Virus is atacking on your system please protect it....",
    "It is a different virus on your system please protect it....",
    "Harry virus is attacting on your system please protect it....",
    "Now your system is fully hacked........"
    
]
const sleep = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(true) 
        },1000*seconds)
    })
}

const showHack = async (message) => {
    await sleep(2);
    console.log(message);
    let text = document.getElementById('text');
    text.innerHTML = text.innerHTML + message + "<br>";
        

};
(async () => {
    for (let i = 0; i < message.length; i++) {
        await showHack(message[i]);
    }
})();

    

