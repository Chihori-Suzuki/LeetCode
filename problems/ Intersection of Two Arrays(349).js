var intersection = function(nums1, nums2) {
    const result = []
    for(value of nums1){
        if(nums2.includes(value) && !result.includes(value)){
            result.push(value)
        }
    }
   return result

};