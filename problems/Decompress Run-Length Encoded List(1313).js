/**
 * @param {number[]} nums
 * @return {number[]}
 * 1313. Decompress Run-Length Encoded List
 */
 var decompressRLElist = function(nums) {
    let arr = [];
    for(let i = 0; i < nums.length; i+=2) {
        for(let j = 0; j < nums[i]; j++) {
            arr.push(nums[i+1]);
        }
    }
    return arr;
};