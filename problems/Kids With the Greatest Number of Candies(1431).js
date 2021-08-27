
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 * 1431. Kids With the Greatest Number of Candies
 */
 var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = candies.reduce((acc, val) => {
        if (val > acc) acc = val;
        
        return acc;
    },0);
    
    return candies.map(val => {
        return val + extraCandies >= maxCandies;
    });
};