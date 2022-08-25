function removeSmallest(numbers) {
    let array = [];
    const index = numbers.indexOf(Math.min(...numbers));

    for (let i = 0; i < numbers.length; i++) {
        if ( i !== index) {
            array.push(numbers[i]);
        }
    }
    return array;
    
}