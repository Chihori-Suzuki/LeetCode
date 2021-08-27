var firstUniqChar = function(s) {
    let char = new Map();
    //creation of hashmap
	//if key is already present, assign -1. else assign its index
    for (let i = 0; i < s.length; i++) {
        char[s[i]] = char[s[i]] !== undefined ? -1 : i
    }
    
    //Check hashmap for unique char
    for (let i in char) {
        if(char[i] !== -1) return char[i];
    }
	//If all duplicates, return -1.
    return -1;
};