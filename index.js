import readlineSync from 'readline-sync';
import brainGames from './bin/brain-games.js';

const tryNumbers = 3;

export default function generalLogic(gameData, description) {
  const userName = brainGames();
  console.log(description);

  for (let i = 0; i < tryNumbers; i += 1) {
    const [question, correctAnswer] = gameData[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
