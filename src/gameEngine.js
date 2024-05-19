import roundsCount from './roundsCount.js';
import generalLogic from './index.js';

export default (description, generateRound, roundsC = roundsCount) => {
  const rounds = [];

  for (let i = 0; i < roundsC; i += 1) {
    rounds.push(generateRound());
  }

  generalLogic(description, rounds);
};
