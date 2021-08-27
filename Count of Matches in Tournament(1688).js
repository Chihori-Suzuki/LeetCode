
/**
 * @param {number} n
 * @return {number}
 * 1688. Count of Matches in Tournament
 */
 var numberOfMatches = function(n) {
	let matches = 0;

	while (n > 1) {
		const match = ~~(n / 2);

		matches += match;
		n = n % 2 + match;
	}

	return matches;
};
