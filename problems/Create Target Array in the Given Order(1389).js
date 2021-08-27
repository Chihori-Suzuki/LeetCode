
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 * 1389. Create Target Array in the Given Order
 */
 var createTargetArray = function(nums, index) {
	return nums.reduce((acc, curr, idx) => {
		acc.splice(index[idx], 0, curr)
		return acc
	}, [])
};
