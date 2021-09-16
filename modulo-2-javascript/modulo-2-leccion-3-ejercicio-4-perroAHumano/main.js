"use strict";

let age = 12;
let ageDog = 0;

if (age === 1) {
  ageDog = 15;
} else if (age === 2) {
  ageDog = 24;
} else {
  ageDog = 24 + 5 * (age - 2);
}

console.log(`Su perro tiene ${ageDog} años`);
