import readlineSync from 'readline-sync';
import brainGames from './bin/brain-games.js';

export default function generalLogic(questions, correctAnswers, description) {
  const tryNumbers = 3;
  const userName = brainGames();
  console.log(description);
  let isCalc;
  if (typeof correctAnswers[0] === 'number') {
    isCalc = true;
  } else {
    isCalc = false;
  }
  for (let i = 0; i < tryNumbers; i += 1) {
    console.log(`Question: ${questions[i]}`);
    let answer = readlineSync.question('Your answer: ');
    if (isCalc) answer = Number(answer);
    if (answer === correctAnswers[i]) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswers[i]}`);
      if (isCalc) console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
