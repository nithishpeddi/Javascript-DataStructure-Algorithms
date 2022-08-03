/** Polindrome for a string 
 * Time Complexity O(N) && space complexity O(N)
 */
  
function isPalindrome(str) {
    let len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++) {
         if(str[i] == str[str.length-1-i]){
             return true;
         }
    }
    return false;
}

console.log(isPalindrome('MADAM'));