let myjokes = ["You'll Know It's a No - Frills Airline If",

    "They don't sell tickets, they sell chances",

"All the insurance machines in the terminal are sold out",

"Before the flight, the passengers get together and elect a pilot",

"If you kiss the wing for luck before boarding, it kisses you back",

"You cannot board the plane unless you have the exact change",

"Before you took off, the stewardess tells you to fasten your Velcro",

"The Captain asks all the passengers to chip in a little for gas",

"When they pull the steps away, the plane starts rocking",

"The Captain yells at the ground crew to get the cows off the runway",

"You ask the Captain how often their planes crash and he sez",

"No movie,Don't need one",

"Your life keeps flashing before your eyes",

"You see a man with a gun, but he's demanding to be let off the plane",

    "All the planes have both a bathroom and a chapel",]
let index = Math.floor(Math.random() * (myjokes.length));
document.getElementById('joke').innerHTML = myjokes[index];