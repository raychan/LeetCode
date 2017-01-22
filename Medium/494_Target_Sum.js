// You are given a list of non-negative integers, a1, a2, ..., an, and a target, S.
// Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
//
// Find out how many ways to assign symbols to make sum of integers equal to target S.
//
// Example 1:
//    Input: nums is [1, 1, 1, 1, 1], S is 3.
//    Output: 5
//    Explanation:
//        -1+1+1+1+1 = 3
//        +1-1+1+1+1 = 3
//        +1+1-1+1+1 = 3
//        +1+1+1-1+1 = 3
//        +1+1+1+1-1 = 3
//
// There are 5 ways to assign symbols to make the sum of nums be target 3.
// Note:
//   1. The length of the given array is positive and will not exceed 20.
//   2. The sum of elements in the given array will not exceed 1000.
//   3. Your output answer is guaranteed to be fitted in a 32-bit integer.

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  var sum = nums.reduce(function(prev, curr) {
    return prev + curr;
  })

  var sumArray = [];
  sumArray[sum] = 1;

  nums.forEach(function(num) {
    var tempSum = [];
    console.log(sumArray);
    sumArray.forEach(function(value, index) {
      if (tempSum[index + num]) {
        tempSum[index + num] = tempSum[index + num] + value;
      } else {
        tempSum[index + num] = value;
      }

      if (tempSum[index - num]) {
        tempSum[index - num] = tempSum[index - num] + value;
      } else {
        tempSum[index - num] = value;
      }
    })
    sumArray = tempSum;
  })

  return sumArray[S + sum] | 0;
};


var findTargetSumWays2 = function(nums, S) {
  var sumMap = new Map();
  sumMap.set(0, 1);

  nums.forEach(function(num) {
    var tempSum = new Map();
    sumMap.forEach(function(value, key) {
      if(tempSum.has(key + num)) {
        tempSum.set(key + num, tempSum.get(key + num) + value);
      } else {
        tempSum.set(key + num, value);
      }

      if(tempSum.has(key - num)) {
        tempSum.set(key - num, tempSum.get(key - num) + value);
      } else {
        tempSum.set(key - num, value);
      }
    })
    sumMap = tempSum;
  })

  return sumMap.get(S);
};

const result = findTargetSumWays([1, 1, 1, 1, 1], 3);
console.log(result);