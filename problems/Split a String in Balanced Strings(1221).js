
/**
 * @param {string} s
 * @return {number}
 * 1221. Split a String in Balanced Strings
 */
 var balancedStringSplit = function(s) {
    
    let countL = 0;
    let countR = 0;
    let countAll = 0;
    
    for(i in s) {
        if(s[i] === "L") {
            countL += 1;
        } else {
            countR += 1;
        }
        
        if(countL === countR) {
            countAll += 1;
        }
    }
    
    return countAll;
};