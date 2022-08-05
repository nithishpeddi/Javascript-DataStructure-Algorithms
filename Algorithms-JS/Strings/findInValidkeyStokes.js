let map = new Map();
let count = 0;

function findValidKeyStokeWords(inputText, brokenKeys) {
 let inputArr = inputText.split(' ');
    for (let char = 0; char < brokenKeys.length; char++) {
        if (!map.has(brokenKeys[char])) {
            map.set(brokenKeys[char], brokenKeys[char]);
        }
    }
    for (let i = 0; i < inputArr.length; i++) {
        let word = inputArr[i];
        for (let j = 0; j < word.length; j++) {
            if (map.has(word[j])) {
                count = count + 1;
               break;
            }
        }
    }
    return count;
}
console.log(findValidKeyStokeWords('Hello World hal', 'ad'))