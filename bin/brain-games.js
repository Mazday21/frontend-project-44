#!/usr/bin/env node
import readAnswer from '../src/cli.js';

export default function brainGames() {
  console.log('Welcome to the Brain Games!');
  return readAnswer();
}

brainGames();
