/**
 * @category Dynamic Programming
 * 
 * @description 有四种实现方式：
 * 
 * - 暴力穷举O(N^3)：内存溢出。
 * - 动态规划O(N^2)：假如 `P[i,j]` 是回文字符串，那么 `P[i+1,j-1]` 也是回文字符串。
 * - 中心扩展O(N^2)：注意区分回文字符串长度偶数、奇数的情况（自己想的思路，也是最好理解的实现方式）。
 * - Manacher法O(N)：效率高。
 */
export function longestPalindrome(s: string): string {
  const arr = s

  let res: string[] = []
  let idx = 0

  const getPalindrome = (i: number, j: number, aim: string[]) => {
    while (i >= 0 && j < arr.length) {
      if (arr[i] !== arr[j]) {
        break
      }
      aim.push(arr[i])
      aim.splice(0, 0, arr[i])
      i--
      j++
    }

    return aim
  }

  while (idx < arr.length || (arr.length - idx) * 2 >= res.length / 2) {

    // 奇数情况
    const aimOdd = getPalindrome(idx - 1, idx + 1, [arr[idx]])
    if (res.length < aimOdd.length) {
      res = aimOdd
    }

    // 偶数情况
    const aimEven = getPalindrome(idx - 1, idx, [])
    if (res.length < aimEven.length) {
      res = aimEven
    }

    idx++
  }

  return res.join('')
}

console.log(longestPalindrome('a'))
console.log(longestPalindrome('aa'))
console.log(longestPalindrome('aba'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('ccc'))
console.log(longestPalindrome('aaaa'))
