
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 * 1282. Group the People Given the Group Size They Belong To
 */
 var groupThePeople = function(groupSizes) {
    let groups = {}
    let result = []
    
    for (let i = 0; i < groupSizes.length; i++) {
        if (groupSizes[i] == 1) {
            result.push([i])
            continue
        }
        
        let current = groupSizes[i]
        if (!groups[current]){ 
            groups[current] = [i]
            continue
        }
        
        groups[current].push(i)
        
        if (groups[current].length == current) {
            result.push(groups[current])
            groups[current] = []
        } 
    }
    return result
};
