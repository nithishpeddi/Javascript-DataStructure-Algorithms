
let map = new Map();
map.set('I', 1);
map.set('V', 5);
map.set('X', 10);
map.set('L', 50);
map.set('C', 100);
map.set('D', 500);
map.set('M', 1000);

function RomanToInt(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        let prev = map.get(str[i]);
        let curr = map.get(str[i + 1]);
        if (prev < curr) {
            result -= prev;
        } else {
            result += prev;
        }
    }
    return result;
}
console.log(RomanToInt('VII'))