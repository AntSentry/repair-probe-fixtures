import { test } from "node:test";
import assert from "node:assert/strict";
import { maxOf } from "./max.js";

test("maxOf picks the largest value", () => {
  assert.equal(maxOf([1, 5, 3]), 5);
});

test("maxOf handles all-negative lists", () => {
  assert.equal(maxOf([-2, -7, -1]), -1);
});
