'use strict';
import {Dice} from './dice.mjs';

let tests = new Map();
tests.set("it should have a default number of sides", () => {
  const d = new Dice();
  return d.sides === 6;
});

tests.set("it should allow you to set the number of sides", () => {
  const d = new Dice(10);
  return d.sides === 10;
});

let results = [];
tests.forEach( (test, name) => {
  results.push(`[${test()}] ${name}`);
})

console.log(results);
export {results};
