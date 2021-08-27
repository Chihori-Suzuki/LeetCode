
/**
 * @param {number[][]} edges
 * @return {number}
 * 1791. Find Center of Star Graph
 */
 var findCenter = function(edges) {
	const [u, v] = edges.shift();
	const checkU = edges.every(item => item.includes(u));

	return checkU ? u : v;
};
