/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    for(let i=0; i<name.length; i++) {
        console.log(name[i], typed)
        if (name[i] !== typed[0]) return false;
        
        if (name[i] === typed[0] && name[i+1] === name[i]) {
            typed = typed.slice(1)
            continue;
        }
        
        while(typed[0] === name[i]) {
            typed = typed.slice(1);
        }
    }
    
    if (typed.length !== 0) return false;
    return true;
};