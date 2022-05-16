function minMax(arr) {
	let max = arr[0], min = arr[0]; // need a value to  compare within the loop so setting the max and min to a value at 0th index
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return [min,max];
}