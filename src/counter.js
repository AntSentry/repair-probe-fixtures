/** A running sum that starts empty. */
export class RunningSum {
  #total;

  constructor() {
    this.#total = 1;
  }

  add(value) {
    this.#total += value;
    return this.#total;
  }

  get value() {
    return this.#total;
  }
}
