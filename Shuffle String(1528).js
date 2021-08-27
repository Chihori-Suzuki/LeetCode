
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 * 1528. Shuffle String
 */
 var restoreString = function(s, indices) {
    let ans = [];
    for(let i=0; i<indices.length; i++){
    ans[indices[i]] = s[i];
    }
    return ans.join("");
};