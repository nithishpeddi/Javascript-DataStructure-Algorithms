/** Find the reverse of a string */
/** Time Complexity is O(N) and  Space Complexity is O(N)  */

/** solution-1 JS Fiddle : https://jsfiddle.net/NithishDev58/4768Le3h/1/ */

function reverseStr(inputStr) {
    if (inputStr.length > 0 && inputStr.trim()) {
        return inputStr.split('').reverse().join('');
    }
    return 'No string found..!'
}

console.log(reverseStr('Hello'));

/** solution -2  */
function reverseStr2(inputStr) {
    let str = ''
    if (inputStr.length > 0 && inputStr.trim()) {
        for (let i = 0; i < inputStr.length; i++) {
            str += inputStr[inputStr.length - 1 - i]
        }
        return str;
    }
    return 'No string found..!'
}

console.log(reverseStr2('Devil'));