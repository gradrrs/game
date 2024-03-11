import { question } from 'readline-sync';

let name;

const choise = () => {
  console.log('Choose the game!');
};

const congrats = () => {
  console.log(`Congratulation, ${name}!`);
};

const printFind = () => {
  console.log('Find the smallest common multiple of given numbers');
};

const answerQuest = (massive) => {
  console.log(`Question: ${massive}`);
};

const quest = (x1, x2, x3) => {
  console.log(`Question: ${x1}, ${x2}, ${x3}`);
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = question('May i have your name? ');
  console.log(`Hello, ${name}!`);
};

const askQuestion = () => question('Your answer: ');

const correct = () => {
  console.log('Correct!');
};

const tryAgain = () => {
  console.log(`Let's try again, ${name}!`);
};

const wrongAnsw = (userAns, truAns) => {
  console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${truAns}'`);
};

const printProg = () => {
  console.log('What number is missing in the progression?');
};

export {
  printProg, greeting, choise, congrats, wrongAnsw, tryAgain, correct, askQuestion,
  quest, printFind, answerQuest,
};
