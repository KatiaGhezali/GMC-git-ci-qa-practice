import test from "node:test";
import assert from "node:assert/strict";

import {
  add,
  subtract,
  multiply,
  divide
} from "../src/calculator.js";

test("adds two numbers", () => {
  assert.equal(add(5, 3), 8);
});

test("subtracts two numbers", () => {
  assert.equal(subtract(5, 3), 2);
});

test("multiplies two numbers", () => {
  assert.equal(multiply(5, 3), 15);
});

test("divides two numbers", () => {
  assert.equal(divide(6, 3), 2);
});

test("throws an error when dividing by zero", () => {
  assert.throws(() => divide(6, 0), {
    message: "Cannot divide by zero"
  });
});
