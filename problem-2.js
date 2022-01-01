const offsetX = [-1, -1, -1, 0, 0, 1, 1, 1],
	offsetY = [-1, 0, 1, -1, 1, -1, 0, 1];

const haveAnotherTree = (
	arr,
	treeXPosition,
	treeYPosition,
	haveAnother = false,
) => {
	// let haveAnother = false;

	const rowLength = arr.length,
		coLength = arr[0].length;

	for (let i = 0; i < offsetX.length; i++) {
		if (
			treeYPosition + offsetY[i] < 0 ||
			treeXPosition + offsetX[i] < 0 ||
			treeXPosition + offsetX[i] > rowLength - 1 ||
			treeYPosition + offsetY[i] > coLength - 1
		)
			continue;

		if (arr[treeXPosition + offsetX[i]][treeYPosition + offsetY[i]] === 1) {
			return true;
		}
	}

	return haveAnother;
};

// THIS FUNCTION TO MAKE SURE NOT CALCULATE THE TREE AGAIN
const emptyForest = (arr = [], x, y, rowLength, coLength) => {
	arr[x][y] = 0;

	for (let i = 0; i < 8; i++) {
		if (
			y + offsetY[i] < 0 ||
			x + offsetX[i] < 0 ||
			x + offsetX[i] > rowLength - 1 ||
			y + offsetY[i] > coLength - 1 ||
			arr[x + offsetX[i]][y + offsetY[i]] !== 1
		) {
			continue;
		}

		emptyForest(arr, x + offsetX[i], y + offsetY[i], rowLength, coLength);
	}
};

function countForests(arr = [[]]) {
	// Write your code here
	const rowLength = arr.length,
		coLength = arr[0].length;

	let forestCounts = 0;

	for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
		for (let colIndex = 0; colIndex < coLength; colIndex++) {
			const element = arr[rowIndex][colIndex];

			if (element === 1 && haveAnotherTree(arr, rowIndex, colIndex)) {
				++forestCounts;
				emptyForest(arr, rowIndex, colIndex, rowLength, coLength);
			}
		}
	}

	return forestCounts;
}

const example1 = [
	[0, 0, 1, 1, 0, 0],
	[0, 1, 1, 1, 0, 0],
	[0, 1, 0, 0, 0, 1],
	[0, 1, 0, 0, 1, 1],
	[1, 0, 0, 1, 1, 1],
];

const result = countForests(example1);

console.log(result);
