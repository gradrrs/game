import {
  correct, wrongAnsw, tryAgain, congrats, askQuestion, quest, printFind,
} from '../index.js';

const smallestNumber = () => {
  let count = 0;
  printFind();
  for (let x = 0; x < 3; x += 1) {
    const x1 = Math.floor(Math.random() * 100 + 1);
    const x2 = Math.floor(Math.random() * 100 + 1);
    const x3 = Math.floor(Math.random() * 100 + 1);
    quest(x1, x2, x3);
    const min = Math.min(x1, x2, x3);
    const answer = askQuestion();
    if (Number(min) === Number(answer)) {
      count += 1;
      correct();
    } else {
      wrongAnsw(answer, min);
      tryAgain();
      break;
    }
    if (count === 3) {
      congrats();
    }
  }
};

export default smallestNumber;
