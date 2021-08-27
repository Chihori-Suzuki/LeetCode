
/**
 * @param {number[]} nums
 * @return {number}
 * 1512. Number of Good Pairs
 */
 var numIdenticalPairs = function(nums) {
    var count = 0;
    
    for(var i = 0; i < nums.length; i++) {
        for(var j = i; j < nums.length; j++) {
            if(nums[i] === nums[j] && i < j) {
                count += 1;
            }
        }
    }
    return count;
};