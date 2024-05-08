#!/usr/bin/env node
import readAnswer from '../src/cli.js';

function brainGames() {
  console.log('Welcome to the Brain Games!');
  return readAnswer();
}

export default brainGames;
