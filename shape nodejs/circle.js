// circle.js
module.exports = {
    calcArea: function(radius) {
      return Math.PI * radius * radius;
    },
    calcCircumference: function(radius) {
      return 2 * Math.PI * radius;
    },
    calcDiameter: function(radius) {
      return 2 * radius;
    }
  };
  