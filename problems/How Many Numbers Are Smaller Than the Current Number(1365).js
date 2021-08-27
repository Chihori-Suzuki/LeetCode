
/**
 * @param {number[]} nums
 * @return {number[]}
 * 1365. How Many Numbers Are Smaller Than the Current Number
 */
 var smallerNumbersThanCurrent = function(nums) {
    
    let ans = [];
    
    for(let i = 0; i < nums.length; i++) {
        ans.push(0);
    }
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if( nums[i] > nums[j] ) {
                ans[i] += 1;
            }
        }
    }
    return ans;
    
};