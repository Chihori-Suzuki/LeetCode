
/**
 * @param {string} s
 * @return {string}
 * 1859. Sorting the Sentence
 */
 var sortSentence = function(s) {
    s= s.split(" ")
    let news= []
    for(let val of s){
        let idx = val.slice(-1)
        news[idx-1] = val.slice(0,val.length-1)
    }
    return news.join(" ")
};