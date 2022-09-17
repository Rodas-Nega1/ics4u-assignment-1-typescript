/**
 * This program is based on the Rock-Paper-Scissors game
 *     with a computer opponent.
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-09-17
 */

import promptSync from "prompt-sync";
import random from "random";

// The program will halt with a response at improper user inputs
const prompt = promptSync();

const randomNumber = random.int(1, 3);
// input
const player = prompt("Decide on a move (rock, paper, or scissors): ");
let computer = String(randomNumber);
// process & output
if (randomNumber === 1) {
  computer = "rock";
} else if (randomNumber === 2) {
  computer = "paper";
} else if (randomNumber === 3) {
  computer = "scissors";
}

if (player === computer) {
  console.log(`\nThe computer chose ${computer}.`);
  console.log("\nTie.");
} else if (
  (player === "rock" && computer === "paper") ||
  (player === "paper" && computer === "scissors") ||
  (player === "scissors" && computer === "rock")
) {
  console.log(`\nThe computer chose ${computer}.`);
  console.log("\nYou lost.");
} else if (
  (player === "paper" && computer === "rock") ||
  (player === "scissors" && computer === "paper") ||
  (player === "rock" && computer === "scissors")
) {
  console.log(`\nThe computer chose ${computer}.`);
  console.log("\nYou win!");
} else {
  console.log("\nSomething is not right.");
}

console.log("\nDone.");
