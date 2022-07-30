/** match pattern with string, time complexity O(N) and space complexity O(N)
 *  string iterates n times but pattrn iterates constant number of times
 */


function patternCount(str, pattern) {
    let count =0 ;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
          if(pattern[j] !== str[i+j]){
              // j (l) == i (0 + 0) l
              // j (o) == i (0 + 1) o
              // j (l) == i (0 + 2) l
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