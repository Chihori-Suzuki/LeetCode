
/**
 * @param {string} s
 * @return {string}
 * 1119. Remove Vowels from a String
 */
 var removeVowels = function(s) {
    
    let vowels = ['a', 'e', 'o', 'i', 'u'];
    let ans = s.split('');
    
    for(v in vowels) {
        ans = ans.filter(chr => chr !== vowels[v]);
    }
    
    return ans.join('');
};