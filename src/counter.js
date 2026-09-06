/** A running sum that starts empty. */
export class RunningSum {
  #total;

  constructor() {
    this.#total = 0;
  }

  add(value) {
    this.#total += value;
    return this.#total;
  }

  get value() {
    return this.#total;
  }
}
