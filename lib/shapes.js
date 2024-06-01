class Circle {
  constructor(color = "") {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="50%" cy="50%" r="80" fill="${this.color}"/>`;
  }
}

class Square {
  constructor(color = "") {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="30%" y="25%" width="120" height="120" fill="${this.color}"/>`;
  }
}

class Triangle {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}

module.exports = { Circle, Square, Triangle };