import readlineSync from 'readline-sync';
import readAnswer from '../src/cli.js';

function isEven(number) {
  return number % 2 === 0;
}

function evenGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readAnswer();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const tryNumbers = 3;
  for (let i = 0; i < tryNumbers; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

evenGame();
