// Given an array of integers that is already sorted in ascending order,
// find two numbers such that they add up to a specific target number.
//
// The function twoSum should return indices of the two numbers such that they add up to the target,
// where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
//
// You may assume that each input would have exactly one solution.
//
// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  if(numbers.length < 2) {
    throw Error('numbers is too short');
  }

  var index1 = 0;
  var index2 = numbers.length - 1;

  while (numbers[index1] + numbers[index2] !== target) {
    if (numbers[index1] + numbers[index2] < target) {
      index1++;
    } else {
      index2--;
    }
  }

  return [index1+1, index2+1]
};

console.log(twoSum([2, 7, 11, 15], 9));