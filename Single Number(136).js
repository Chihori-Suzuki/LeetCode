
/**
 * @param {number[]} nums
 * @return {number}
 * 136. Single Number
 */
// note: a^a = 0
// a^ 0 = a

var singleNumber = function(nums) {
    let ans = 0;
    for(let i=0;i< nums.length;i++){
        ans = ans  ^ nums[i];
    }
    return ans;
};