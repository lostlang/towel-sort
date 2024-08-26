// You should implement your task here.

module.exports = function towelSort(matrix) {
	if (!matrix) {
		return [];
	}

	let reverse = false;
	let out = [];
	matrix.forEach((row) => {
		if (reverse) {
			row.reverse();
		}

		row.forEach((el) => {
			out.push(el);
		});
		reverse = !reverse;
	});

	return out;
};
