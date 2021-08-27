/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function (nums) {
    let answer = [];
  
    for (i in nums) {
      answer.push(nums[i] * nums[i]);
    }
    answer.sort(function (a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    return answer;
  };