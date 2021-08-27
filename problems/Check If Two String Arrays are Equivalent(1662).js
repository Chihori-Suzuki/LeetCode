
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 * 1662. Check If Two String Arrays are Equivalent
 */
 var arrayStringsAreEqual = function(word1, word2) {
    word1 =  word1.toString().split(",").join("")
   word2 = word2.toString().split(",").join("")
   return word2 === word1
  };
