
/**
 * @param {number[]} nums
 * @return {number[]}
 * 1480. Running Sum of 1d Array
 */
 var runningSum = function (nums) {
    let answerNum = nums;
    for (let i = 1; i < nums.length; i++) {
      answerNum[i] = nums[i - 1] + nums[i];
    }
  
    return answerNum;
  };
