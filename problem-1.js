function getCommonChars(arr) {
	// Write your code here
	const charactersCounts = {};
	const arrLength = arr.length;
	for (let index = 0; index < arrLength; index++) {
		const string = arr[index];
		const visitedChar = {};
		for (let j = 0; j < string.length; j++) {
			const char = string[j];
			if (!visitedChar[char]) {
				visitedChar[char] = true;
				if (!charactersCounts[char]) {
					charactersCounts[char] = 0;
				}

				++charactersCounts[char];
			}
		}
	}

	let commonChars = [];
	for (const key in charactersCounts) {
		if (charactersCounts[key] === arrLength) commonChars.push(key);
	}

	return commonChars;
}

const example1 = ["hello world", "this is a test", "this is an example"];

const result = getCommonChars(example1);

console.log(result);
