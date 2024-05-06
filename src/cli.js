import readlineSync from 'readline-sync';

function readAnswer() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}
export default readAnswer;
