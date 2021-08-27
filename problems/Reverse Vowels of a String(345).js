var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    let arr = s.split('');
    let i =0;
    let j = arr.length -1;
    
    while(i<j){
        if(vowels.includes(arr[i])){
            if(vowels.includes(arr[j])){
                [arr[i], arr[j]] = [arr[j],arr[i]];
                
                i++;
                j--;
            } else {
                j--;
            }
            
        } else{
            i++;
        }
        
    }
    
    return arr.join('');
};