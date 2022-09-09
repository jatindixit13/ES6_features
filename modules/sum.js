export function sum(a, b) {
  return `Sum of the digits is ${a + b}`;
}

class car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    console.log(`This car ${this.name} looks amazing in this ${this.color}`);
  }
}
export { car };
