import test from "node:test";
import assert from "node:assert/strict";

import { add, subtract, multiply, divide, modulo } from "../src/calculator.js";

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
    message: "Cannot divide by zero",
  });
});

test("calculates the remainder of a division", () => {
  assert.equal(modulo(10, 3), 1);
});

test("throws an error when calculating modulo with zero", () => {
  assert.throws(() => modulo(10, 0), {
    message: "Cannot calculate modulo with zero",
  });
});
