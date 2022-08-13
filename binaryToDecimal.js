const binaryArrayToNumber = arr => {
    arr = arr.join("");
    let convertedBinary = parseInt(arr, 2)
    return convertedBinary;
};