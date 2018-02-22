module.exports = function solveEquation(equation) {
  var coefficientArray = equation.split(" ");
  
  var a = parseInt(coefficientArray[0]);
  var b = parseInt(coefficientArray[4]) * (coefficientArray[3] == '+' ? 1 : -1) / a;
  var c = parseInt(coefficientArray[8]) * (coefficientArray[7] == '+' ? 1 : -1) / a;

  var discriminantSqrt = Math.sqrt(b*b - 4*c);

  x1 = ((b*(-1) + discriminantSqrt) / 2);
  x2 = ((b*(-1) - discriminantSqrt) / 2);

  if(x1 < x2) {
    return [x1, x2];
  } else {
    return [x2, x1];
  }
}
