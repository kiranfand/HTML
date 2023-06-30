// app.js
const circle = require('./circle');
const rectangle = require('./rectangle');
const triangle = require('./triangle');

// Circle calculations
console.log('Circle area:', circle.calcArea(5));
console.log('Circle circumference:', circle.calcCircumference(5));
console.log('Circle diameter:', circle.calcDiameter(5));

// Rectangle calculations
console.log('Rectangle area:', rectangle.calcArea(4, 8));
console.log('Rectangle perimeter:', rectangle.calcPerimeter(4, 8));

// Triangle calculations
console.log('Is triangle equilateral:', triangle.isEquilateral(5, 5, 5));
console.log('Triangle perimeter:', triangle.calcPerimeter(5, 5, 5));
