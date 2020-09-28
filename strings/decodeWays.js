/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    
    if (s[0] === "0") {
        return 0
    }
    
    if (s.length < 2) {
        return 1
    }
    
    if (parseInt(s.slice(0, 2)) > 26) {
        return numDecodings(s.slice(1, s.length))    
    }
    
    return numDecodings(s.slice(1, s.length)) + numDecodings(s.slice(2, s.length))
    
}

// decode(12) === decode(2) + decode("") 