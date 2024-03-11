import {
  printProg, greeting, correct, wrongAnsw, tryAgain, congrats,
  askQuestion, answerQuest,
} from '../index.js';

const progressionNumber = () => {
  greeting();
  printProg();
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const step = Math.floor(Math.random() * 10 + 1);
    let StartValue = Math.floor(Math.random() * 100 + 1);
    const target = Math.floor(Math.random() * 10 + 1);
    const massive = [];
    let QuestNumber;
    for (let x = 0; x < 11; x += 1) {
      if (target === x) {
        QuestNumber = StartValue;
        massive.push('..');
      } else {
        massive.push(StartValue);
      }
      StartValue += step;
    }
    answerQuest(massive.join(' '));
    const answer = askQuestion();
    if (Math.abs(QuestNumber) === Math.abs(answer)) {
      count += 1;
      correct();
    } else {
      wrongAnsw(answer, QuestNumber);
      tryAgain();
      break;
    }
    if (count === 3) {
      congrats();
    }
  }
};

export default progressionNumber;
