let arr = [1, 2, -1, -3, -2, 3];

function subArray() {
    var sum;
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j]
            if (sum == 0) {
                count++;
            }
        }
    }
    return count;
}
console.log(subArray())