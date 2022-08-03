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

/** Reverse String without using the extra memory or array */

 function reverseStr3(str){
   let len = Math.floor(str.length/2);
    for(let j=0;j<len;j++){
        let temp = str[j];
        str[j] = str[str.length-1-j];
        str[str.length-1-j] = temp;
    // [str[str.length-1-j], str[j]] = [str[j], str[str.length-1-j]]
    }
    return str;
 }

 console.log(reverseStr3(['H', 'E', 'L', 'L','O']))