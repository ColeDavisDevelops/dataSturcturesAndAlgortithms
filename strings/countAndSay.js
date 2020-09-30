/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";
    
    let counter = 1;
    let str = "1";
    let dummyChar = str[0];

    while(counter < n) {
        let newStr = "";
        let charCounter = 0;
        str.split("").forEach(char => {
            if (char === dummyChar) {
                charCounter++;
            } else {
                newStr += charCounter.toString() + dummyChar
                dummyChar = char;
                charCounter = 1;
            }       
        });
        newStr += charCounter.toString() + dummyChar
        str = newStr;
        dummyChar = str[0];
        counter++
    }
    return str;
};