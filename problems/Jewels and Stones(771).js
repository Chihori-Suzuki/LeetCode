
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * 771. Jewels and Stones
 */
 var numJewelsInStones = function(jewels, stones) {
    var count=0;
   for(var i=0;i<jewels.length;i++){
       if(stones.includes(jewels[i])){
      for(var j=0;j<stones.length;j++){
          if(jewels[i]===stones[j]){
              count++;
          }
      }
       }
       else{
           continue;
       }
   } 
    return count;
};