/** Find the reverse of a Number */
/** Time Complexity is O(N) and  Space Complexity is O(1)  */

/** solution-1 JS Fiddle : https://jsfiddle.net/NithishDev58/4768Le3h/22/ */

function reverseNum(num) {
    let rev = 0;
    let lastDigit = 0;
    if (typeof num == 'number') {
        while (num !== 0) {
            lastDigit = num % 10;
            rev = rev * 10 + lastDigit;
            num = Math.floor(num / 10);
        }
        return rev;
    }
    return 'No Number found..!'
}

console.log(reverseNum(12345));
