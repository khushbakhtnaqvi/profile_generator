const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const question1 = "What's your name? Nicknames are also acceptable  ";
const question2 = "What's an activity you like doing?  ";
const question3 = "What do you listen to while doing that?  ";
const question4 = "Which meal is your favourite (eg: dinner, brunch, etc.)  ";
const question5 = "What's your favourite thing to eat for that meal?  ";
const question6 = "Which sport is your absolute favourite?  ";
const question7 = "What is your superpower? In a few words, tell us what you are amazing at!  "


  rl.question(question1, (name) => {
    rl.question(question2, (activity) => {
      rl.question(question3, (listenTo) => {
        rl.question(question4, (favMeal) => {
          rl.question(question5, (loveToEat) => {
            rl.question(question6, (favSport) => {
              rl.question(question7, (superPower) => {
                console.log(`My name is "${name}". I love doing ${activity}. While I am ${activity}, I like to listen to ${listenTo}. My favourite meal is ${favMeal}. I love to eat ${loveToEat} in my ${favMeal}. My most favourite sports is ${favSport}. I am amazing at ${superPower}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });

