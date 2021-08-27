/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * 1470. Shuffle the Array
 */
 var shuffle = function(nums, n) {
    
    let arr = [];
    let count = 1;
    
    for(i in nums) {
        
        if ( i < n ) {
            arr.push(nums[i]);
        } else {
            console.log(i-(n-1));
            console.log(nums[i]);
            
            arr.splice(count, 0, nums[i]);
            count += 2;
        }
    }
    return arr;
};