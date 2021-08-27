/**
 * @param {string} address
 * @return {string}
 * 1108. Defanging an IP Address
 */
 var defangIPaddr = function(address) {
    let arr = address.split('')
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === '.')
            arr[i] = "[.]"
    }
    let res = ""
    for(let i = 0 ; i < arr.length ; i++){
        res += arr[i]
    }
    return res
    
};