/**
 * @description 双指针 `left` 、`right`，保证左右指针组成的集合没有重复的元素。  
 * @category Sliding Window
 * @summary 相关题集 [leetcode.com/tag/sliding-window/](https://leetcode.com/tag/sliding-window/)。
 * @see {@link substring_with_concatenation_of_all_words}。
 */
export function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>()
  const max = (v1: number, v2: number) => v1 > v2 ? v1 : v2
  let maxLen = 0
  let left = 0, right = 0
  while (right < s.length) {
    if (map.has(s[right])) {
      left = max(left, map.get(s[right]) + 1)
    }
    maxLen = max(maxLen, right - left + 1)
    map.set(s[right], right)
    right++
  }

  return maxLen
}


// console.log(lengthOfLongestSubstring(''))
// console.log(lengthOfLongestSubstring(' '))
// console.log(lengthOfLongestSubstring('hello'))
// console.log(lengthOfLongestSubstring('abca bcbb'))
// console.log(lengthOfLongestSubstring('abcazfc bcbb'))
// console.log(lengthOfLongestSubstring('aab'))
// console.log(lengthOfLongestSubstring('bbbbb'))
// console.log(lengthOfLongestSubstring("pwwkew"))


