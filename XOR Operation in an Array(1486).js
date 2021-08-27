
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 * 1486. XOR Operation in an Array
 */
 var xorOperation = function(n, start) {
	return [...Array(n)].reduce((acc, curr, index) => {
		const num = start + index * 2;

		return num ^ acc;
	}, 0);
};
