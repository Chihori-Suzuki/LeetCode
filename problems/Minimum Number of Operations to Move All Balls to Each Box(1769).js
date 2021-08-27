
/**
 * @param {string} boxes
 * @return {number[]}
 * 1769. Minimum Number of Operations to Move All Balls to Each Box
 */
 var minOperations = function(boxes) {
    let ans = [];
    let count = 0;
    let d = {};
    
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i] === '1') {
            d[i] = 1;
        }        
    }

    for(let i = 0; i < boxes.length; i++) {
        count = 0;
        for(k in d) {
            count += Math.abs(i - k);
        }
        
        ans[i] = count;
    }
    
    return ans
};

