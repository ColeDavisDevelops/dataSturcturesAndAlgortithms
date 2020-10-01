/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i=1; i<=s.length/2; i++) {
        let currSubStr = s.slice(0, i);
        let div = s.length / currSubStr.length; 
        let counter = 0; 
        let str = "";

        while (counter<div) {
            str += currSubStr;
            counter++
        }
        
        if (str === s) {
            return true;
        }
    }
    return false;
};