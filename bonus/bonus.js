/**
 * Sum all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} - this could be any number of parameters, all number type
 * @returns {number} - the sum of all the arguments passed in
 */

 // must be written in ES5
function sumAll(){
  let sum = 0;
  for (let el of arguments) {
    sum += el
  }
  return sum
}


/**
 * Average all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} - this could be any number of parameters, all number type
 * @returns {number} - A whole number the average of all the arguments passed in
 */

// how can I call sumAll in this function
function averageAll() {
  let average = 0;
  let divisor = arguments.length 
  for (let el of arguments) {
    average += el / divisor
  }
  return Math.round(average);
}

/**
 * Flip the sign of the number passed in.
 * E.g. if 5 is passed in, return -5
 * If -12 is passed in, return 12
 * Hint: you can do this with simple math
 *
 * @param {number} n - the number to be flipped.
 * @returns {number} - The opposite value of n
 */

const flipSign = n => -n

module.exports = {
  sumAll,
  averageAll,
  flipSign,
}
