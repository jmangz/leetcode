// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
//
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// The median is (2 + 3)/2 = 2.5

// O(nlog(m + n)) approach
function findMedianSortedArrays(arr1, arr2) {
  const combined = arr1.concat(arr2).sort((a, b) => a - b);
  const middle = combined.length / 2;

  if (combined.length % 2 === 0) {
    return (combined[middle] + combined[middle - 1]) / 2;
  }

  return combined[middle - 0.5];
}

// O(log(min(m,n))) approach
function findMedianSortedArrays(arr1, arr2) {
  const m = arr1.length;
  const n = arr2.length;

}
