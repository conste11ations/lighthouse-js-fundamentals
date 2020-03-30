var items = [9,8,7,6,2,5,3];
console.log("original: " + items);

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition

        if (left < index - 1) { //more elements on the left side of the pivot
            console.log("left < index - 1");
            console.log("left: "+left);
            console.log("index: "+index);
            console.log("items: " + items);
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            console.log("index < right");
            console.log("right: "+right);
            console.log("index: "+index);
            console.log("items: " + items);
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
