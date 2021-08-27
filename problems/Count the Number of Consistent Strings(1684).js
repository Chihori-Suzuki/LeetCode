var countConsistentStrings = function(allowed, words) {
    let res = 0;
    let counter = 0;
    for(let i=0; i<words.length; i++) {
        let word = words[i];
        [...allowed].map((letter)=>{
            word = word.replaceAll(letter,"");
        });
        if(word.length === 0) {
            res++;
        }
    }
    return res;
};