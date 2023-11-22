
/**
 * @category Sliding Window
 * @see [substring-with-concatenation-of-all-words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)。
 * @description 性能不是特别突出。
 * 
 * - Runtime 3344 ms	
 * - Memory 164.5 MB	
 * 
 */
export function substring_with_concatenation_of_all_words(s: string, words: string[]): number[] {
  const wordsSize = words.join('').length
  const res = []
  let i = 0
  let j = wordsSize

  /** 匹配条件分析 */
  const match = (str: string, arr: string[]): boolean => {
    // 最后一个数组
    if (arr.length === 1) {
      return str === arr[0]
    }

    // 查找是否匹配
    const idx = arr.findIndex((item) => str.startsWith(item))

    // 未匹配
    if (idx === -1) return false

    // 匹配成功：进行下一轮递归
    // 剔除掉已经匹配的字符串部分
    const nextStr = str.substring(arr[idx].length, str.length)
    // 剔除掉已经匹配的数组元素
    const nextArr = [].concat(arr)
    nextArr.splice(idx, 1)

    // 新一轮递归
    return match(nextStr, nextArr)
  }

  /** 遍历需找匹配的子字符串 */
  while (j <= s.length) {
    const str = s.substring(i, j)
    if (match(str, words)) {
      res.push(i)
    }
    i++
    j++
  }

  return res
}

// console.log(findSubstring('wordgoodgoodgoodbestword', ["word", "good", "best", "word"]))
// console.log(findSubstring('barfoofoobarthefoobarman', ["bar", "foo", "the"]))
// console.log(findSubstring('pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel',
// ["dhvf", "sind", "ffsl", "yekr", "zwzq", "kpeo", "cila", "tfty", "modg", "ztjg", "ybty", "heqg", "cpwo", "gdcj", "lnle", "sefg", "vimw", "bxcb"]))

export function findSubstringNotPass(s: string, words: string[]): number[] {
  const wordsSize = words.join('').length
  const res = []
  let i = 0
  let j = wordsSize

  /** 先枚举所有的排列情况 */
  const set = new Set()
  const combine = (accu = '', arr: string[]) => {
    if (arr.length === 1) {
      console.log(accu + arr[0])
      return
    }

    for (let i = 0; i < arr.length; i++) {
      const nextArr = [].concat(arr)
      nextArr.splice(i, 1)
      combine(accu + arr[i], nextArr)
    }
  }
  combine('', words)
  const match = (str: string) => set.has(str)

  /** 遍历需找匹配的子字符串 */
  while (j <= s.length) {
    const str = s.substring(i, j)
    console.log('str', str)
    if (match(str)) {
      res.push(i)
    }
    i++
    j++
  }

  return res
}


