const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (a1) => {
  rl.question("What activity do you like doing?", (a2) => {
    rl.question("What do you listen to while doing that?", (a3) => {
      rl.question("What is your favorite meal of the day?", (a4) => {
        rl.question("What is your favorite thing to eat for that meal?", (a5) => {
          rl.question("What about sports, what do you like?", (a6) => {
            rl.question("Okay last question, what's your superpower?", (a7) => {

              console.log(`--------------------------------------------------`)
              console.log(`Ahh so your name is:${a1}.`);
              console.log(`Oooh${a2}! That sounds fun!`);
              console.log(`Wow I bet${a3} is an awesome genre/song.`);
              console.log(`Yeah I agree${a4} is the best meal for sure! 100%`);
              console.log(`No way!! you like${a5}?! Us too!!`);
              console.log(`Yeah,${a6} is a super fun sport to watch`);
              console.log(`Wow so you must be really good at${a7}!!!`);
              console.log(`Okay you're profile is now done! Good luck out there!`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});

