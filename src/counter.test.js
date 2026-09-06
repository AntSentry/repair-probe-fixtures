import { test } from "node:test";
import assert from "node:assert/strict";
import { RunningSum } from "./counter.js";

test("a new RunningSum starts at zero", () => {
  assert.equal(new RunningSum().value, 0);
});

test("add accumulates in order", () => {
  const sum = new RunningSum();
  assert.equal(sum.add(2), 2);
  assert.equal(sum.add(3), 5);
});
