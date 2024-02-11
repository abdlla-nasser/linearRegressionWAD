//
function linearRegression(xValues = [], yValues = []){
  // xValues array of x values
  // yValues array of y values
  let regressor = {}
  //get averages of x and y
  let xMean = xValues.reduce((a,b) => a + b, 0)/xValues.length
  let yMean = yValues.reduce((a,b) => a+ b, 0)/yValues.length
  // to get m which is the slope we use formula 
  // m = sum of each value of x - xMean * each corresponding value of y - yMean / sum of powers of 2 of each value of x - xMean
  let slope = 0, slopeNumerator = 0, slopeDenominator = 0;
  // iterating over the array to get the slope ( (slope numerator) sum of (xValues[i] - xMean) * (yValues[i] - yMean) / (slope denominator)sum of (xValues[i] - xMean)^2 )
  for(let i = 0; i < xValues.length; i++){
    slopeNumerator = slopeNumerator + (xValues[i] - xMean) * (yValues[i] - yMean)
    slopeDenominator = slopeDenominator + Math.pow((xValues[i] - xMean), 2)
  }
  slope = slopeNumerator/slopeDenominator;
  regressor["slope"] = slope
  // finding b which is the y intercept b = yMean - (m * xMean)
  let intercept = yMean - ( regressor.slope * xMean )
  regressor["intercept"] = intercept
  // get expected values of y using our formula y = mx + b
  let yExpected = []
  for(let i = 0; i < xValues.length; i++){
    let y = ((regressor.slope * xValues[i]) + regressor.intercept)
    yExpected.push(y)
  }
  regressor["yExpected"] = yExpected
  console.log(regressor.yExpected)
  console.log(`regression equation is ${regressor.slope} x + ${regressor.intercept}`)
  return regressor
}