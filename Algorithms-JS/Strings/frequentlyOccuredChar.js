/** Find the most frequenetly occured character in the string
 * print number of occurences along with character
 */
/** Time Complexity is O(N) and  Space Complexity is O(N)  */

/** Link to JS Fiddle : https://jsfiddle.net/NithishDev58/4768Le3h/1/ */

function frequentChar(inputStr){
    let Obj = {};
    let Max = 0;
    let Char = '';
    if(inputStr.length> 0 && inputStr.trim()){
        for(let i=0;i<inputStr.length;i++){
            let character = inputStr[i];
            Obj[character] = Obj[character] + 1 || 1;
            if(Obj[character] > Max){
                Char = character;
                Max = Obj[character];
            }
        }
    }   
    return `Character ${Char} has occured ${Max} times in a string`;
}

console.log(frequentChar('abcccdllegggggg'));