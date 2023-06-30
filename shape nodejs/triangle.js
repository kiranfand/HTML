// triangle.js
module.exports = {
    isEquilateral: function(side1, side2, side3) {
      return side1 === side2 && side2 === side3;
    },
    calcPerimeter: function(side1, side2, side3) {
      return side1 + side2 + side3;
    }
  };
  