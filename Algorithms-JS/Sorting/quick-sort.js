
/**
 *  Quick sort will take 3 steps to peroform sorting. Time && Space (ONLOGN) && O(N) Complexity 
 *  First step is to perform the partition by finding the pivot such that  [partition-1] < [pivot] < [partition-2].
 *  partition-1 has elements < pivot  < partition-2 which are not sorted.  
 *  divide left and right array recursively untill no more partitions are left in array.
 * */

let items = [5, 3, 7, 6, 2, 9];
//  [5, 3, 2, 6, 7, 9]
function quickSort(items, left, right) {
    let pivot;
    if (items.length > 1) {
        pivot = partition(items, left, right); //pivot returned from partition
        console.log('pivot index', pivot)
        if (left < pivot - 1) { //more elements on the left side of the pivot
            quickSort(items, left, pivot - 1);
        }
        if (pivot < right) { //more elements on the right side of the pivot
            quickSort(items, pivot, right);
        }
    }
    return items;
}

function partition(items, left, right) {
    console.log('new array with divide', items, left , right)
    let pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
        console.log('pivot element will be', pivot)
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
            console.log('i after increment', i)
        }
        while (items[j] > pivot) {
            j--;
            console.log('j decrement', j)
        }
        if (i <= j) {
            console.log('i..>', i, j)
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}
function swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

// first call to quick sort
let sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]