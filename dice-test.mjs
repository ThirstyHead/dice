'use strict';
import {Dice} from './dice.mjs';

export {test, tests};

let tests = new Map();
tests.set("it should have a default number of sides", () => {
  const d = new Dice();
  return d.sides === 6;
});

tests.set("it should allow you to set the number of sides", () => {
  const d = new Dice(10);
  return d.sides === 10;
});

tests.set("roll() should be between 1 and dice.sides", () => {
  const d = new Dice();
  let tmp = [];
  for(let i=0; i<100; i++) {
    tmp.push(d.roll());
  }
  return tmp.every( (roll) => {
    return roll >= 1 && roll <= d.sides;
  });
});

// TODO test for float

// TODO test for non-number


function test(){
  let results = [];
  tests.forEach( (test, name) => {
    results.push(`[${test()}] ${name}`);
  });
  return results;
}
