const watermelon = (w) => {
    let partOne = 0;
    let partTwo = 0;

    while(partOne + partTwo !== w) {
        partOne += 2;
        partTwo = w - partOne; 

        if (partTwo % 2 === 0) {
            return "YES"
        }
    }
    return "NO"
}

console.log(watermelon(10))