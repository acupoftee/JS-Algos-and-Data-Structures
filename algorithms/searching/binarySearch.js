/**
 * Searches for an integer in a sorted array in O(log(n)) time
 * @param {Number[]} arr the array to search 
 * @param {Number} target the target element
 * @returns the index of the target element if found
 */
const binarySearch = (arr, target) => {
    // Define our starting and stopping indicies
    let start = 0, stop = arr.length - 1
    // while the starting and stopping indicies aren't equal
    while (start <= stop) {
        // get the midpoint of the array
        const middle = Math.floor((stop + start) / 2)
        // return the index if we found the target
        if (arr[middle] === target) {
            return middle
        } else if (arr[middle] < target) {
            // move to the upper half of the array if our target is bigger
            // than the element at the midpoint
            start = middle + 1
        } else {
            // move to the lower half of the array if our target is
            // lower than the element at the midpoint
            stop = middle - 1
        }
    }
    // Return -1 if we can't find anything
    return -1
}

/**
 * Search for an element recursively in O(log(n)) time
 * @param {Number[]} arr The array to search
 * @param {Number} target the target element
 * @param {Number} start the starting index of the array
 * @param {Number} stop the end index of the array
 * @returns the index of the target element if found
 */
const binarySearchRecursive = (arr, target, start, stop) => {
    // if the starting and stopping indicies aren't equal
    if (stop >= start) {
        // get the midpoint of the array
        const middle = Math.floor((stop + start) / 2)
        // BASE CASE: If our element is equal to the target at our midpoint
        // return the index
        if (arr[middle] === target) return middle
        // move to the upper half of the array if our target is bigger
        // than the element at the midpoint
        if (arr[middle] < target) return binarySearchRecursive(arr, target, middle + 1, stop)
        // move to the lower half of the array if our target is
        // lower than the element at the midpoint
        if (arr[middle] > target) return binarySearchRecursive(arr, target, start, middle - 1)
    }
    // Return -1 if we can't find anything
    return -1
}