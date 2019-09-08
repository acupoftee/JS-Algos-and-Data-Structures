
/**
 *  Searches for an integer in a sorted array in O(log(n)) time
 * @param {number[]} nums The array to search
 * @param {number} target The target element
 * @return {number} the index of the target element if found
 */
const binarySearch = (nums, target) => {
  // Declare our low index, high index, and mid
  let low = 0, high = nums.length - 1, mid

  while (low <= high) {
    // Calculate the midpoint of the array length
    mid = ((low + high) / 2) | 0

    // Return the index if we found our target
    if (target === nums[mid]) {
      return mid
    }

    // Move to the upper half of the array if target is bigger,
    // Else move to the lower half
    if (target > nums[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  // Return -1 if we couldn't find our target
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