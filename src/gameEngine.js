import generalLogic from './index.js';

export default (description, generateRound, roundsCount) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }

  generalLogic(description, rounds);
};
