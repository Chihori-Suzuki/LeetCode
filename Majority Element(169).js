/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    
    let frequencyCounter = {}, averagePoint = Math.floor(nums.length / 2)
    
    for(let num of nums){
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1
    }
    
    for(let i in frequencyCounter){
        if(frequencyCounter[i] > averagePoint){
            return +i
        }
    }    
    
    return 0
};