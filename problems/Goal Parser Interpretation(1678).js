/**
 * @param {string} command
 * @return {string}
 * 1678. Goal Parser Interpretation
 */
 var interpret = function(command) {
    return command.replace(/(\(\))|(\(al\))/g, (str) => {
		return str === '()' ? 'o' : 'al';
	});
};