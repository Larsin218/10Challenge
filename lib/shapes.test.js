const { Circle, Square, Triangle } = require("./shapes");

test('should create a circle svg', () => {
    const shape = new Circle();
    shape.setColor('green');
    expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="80" fill="green"/>');
})

test('should create a square svg', () => {
    const shape = new Square();
    shape.setColor('red');
    expect(shape.render()).toEqual('<rect x="30%" y="25%" width="120" height="120" fill="red"/>')
})

test('should create a triangle svg', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>')
})