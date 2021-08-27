
/**
 * @param {number[]} nums
 * @return {number[]}
 * 1929. Concatenation of Array
 */
 var getConcatenation = function(nums) {
    let ans = [];
    let m = 0;
    
    for(let i = 0; i < 2 * nums.length; i++) {
        if ( m < nums.length) {
            ans[i] = nums[m];
             m += 1;
        } else {
            m = 0;
            ans[i] = nums[m]
            m += 1;
        }
    }
    
    return ans;
};