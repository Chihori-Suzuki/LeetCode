
/**
 * @param {number[]} nums
 * @return {number}
 * 1979. Find Greatest Common Divisor of Array
 */
 var findGCD = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
  
    for(let i = max; i > 0; i--) {
        if(max % i === 0 && min % i === 0) {
            return i
        }
    }
  
};
