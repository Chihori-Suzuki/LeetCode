/**
 * @param {number} num
 * @return {number}
 * 1342. Number of Steps to Reduce a Number to Zero
 */
 var numberOfSteps = function(num) {
    let obtain = num;
    let count = 0;
    
    while(obtain != 0) {
        if(obtain % 2 === 1) {
            obtain -= 1;
        } else {
            obtain /= 2;
        }
        count += 1;
    }
    return count
};
