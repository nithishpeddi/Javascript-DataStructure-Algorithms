/** match pattern with string, time complexity O(N * M) and space complexity O(N)
 *  string iterates n times and pattrn iterates m times. 
 */


function patternCount(str, pattern) {
    let count =0 ;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
          if(pattern[j] !== str[i+j]){
            break;
          }
          if( j == pattern.length-1){
             count = count + 1;
          }
        }
    }
    return count;
}

console.log(patternCount('lolaelolol', 'lol'))