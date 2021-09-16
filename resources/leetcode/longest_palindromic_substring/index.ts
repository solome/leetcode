/**
 * @category Dynamic Programming
 * 
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

  // console.log(res, res.join(''))
  return res.join('')
}

console.log(longestPalindrome('a'))
console.log(longestPalindrome('aa'))
console.log(longestPalindrome('aba'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('ccc'))
console.log(longestPalindrome('aaaa'))