const { Circle, Square, Triangle } = require("./shapes");

test('should create a circle svg', () => {
    const shape = new Circle('green');
    expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="50" fill="green"/>');
})

test('should create a square svg', () => {
    const shape = new Square('red');
    expect(shape.render()).toEqual('<rect x="25%" y="25%" width="100" height="100" fill="red"/>')
})

test('should create a triangle svg', () => {
    const shape = new Triangle('blue');
    expect(shape.render()).toEqual('<polygon points="60,10 110,110 10,110" fill="blue"/>')
})