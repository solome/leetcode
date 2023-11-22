/**
 * 从两个有序数组中寻找第 `K` 大的元素。
 * @returns 
 */
export function findKSortedArrays(nums1: number[], l: number, nums2: number[], r: number, k: number): number {
  const len1 = nums1.length
  const len2 = nums2.length

  if (l >= len1) return nums2[r + k - 1]
  if (r >= len2) return nums1[l + k - 1]

  if (k === 1) return nums1[l] > nums2[r] ? nums2[r] : nums1[l]

  const m = Math.floor(k / 2)
  const mL = (l + m - 1 < len1) ? nums1[l + m - 1] : Infinity
  const mR = (r + m - 1 < len2) ? nums2[r + m - 1] : Infinity

  if (mL < mR) {
    return findKSortedArrays(nums1, l + m, nums2, r, k - m)
  } else {
    return findKSortedArrays(nums1, l, nums2, r + m, k - m)
  }
}

/**
 * @tutorial 整体的思路：
 *  1. 如果俩个数组的长度是奇数，则直接找中间的数；
 *  2. 如果俩个数组的长度是偶数，则找中间的两个数求平均值。
 * 
 * 算法本质：在两个有序数组中找 `K` 大元素，这部分用二分查找的逻辑去实现，详见 {@link findKSortedArrays}。
 * @returns 
 */
export function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const len1 = nums1.length
  const len2 = nums2.length

  const m = (len1 + len2) / 2
  const mInt = Math.ceil(m)
  // 如果是奇数则找中位数即可
  if (m !== mInt) {
    return findKSortedArrays(nums1, 0, nums2, 0, mInt).toFixed(5)
  }

  // 如果是偶数则找中间的两个数后求平均值
  const lk = mInt
  const rk = mInt + 1

  return ((findKSortedArrays(nums1, 0, nums2, 0, lk) + findKSortedArrays(nums1, 0, nums2, 0, rk)) / 2).toFixed(5)
}


console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([1, 3], [2, 7]))
console.log(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]))
console.log(findMedianSortedArrays([0, 0], [0, 0]))
console.log(findMedianSortedArrays([], [1]))
console.log(findMedianSortedArrays([2], []))
