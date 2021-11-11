import prompt from 'readline-sync';
import wordBank from './hangman/word-bank.js';

console.log(wordBank[0]);

const userInput = prompt.question("What is your name?");
console.log(userInput);
