class Shape {
    constructor(color) {
        this.color = color;
    }

}

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="50" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="25%" y="25%" width="100" height="100" fill=${this.color}/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="60,10 110,110 10,110" fill="${this.color}"/>`
    }
}

module.exports = { Circle, Square, Triangle };
