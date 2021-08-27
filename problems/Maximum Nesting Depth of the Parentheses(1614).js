
/**
 * @param {string} s
 * @return {number}
 * 1614. Maximum Nesting Depth of the Parentheses
 */
 var maxDepth = function(s) {
	s = s.replace(/[^()]/g, '');

	const map = [...s].reduce((acc, curr) => {
		curr === '(' ? acc['dep'] += 1 : acc['dep'] -= 1;
		acc['max'] = Math.max(acc['dep'], acc['max']);
		return acc;
	}, { 'dep': 0, 'max': 0 });

	return map['max'];
};
