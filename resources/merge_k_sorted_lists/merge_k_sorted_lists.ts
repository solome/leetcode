import ListNode, { arr2list } from '@leetcode/shared-utils/ListNode'

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const dummyHead = new ListNode()
  let temp = dummyHead
  const p: Array<ListNode | null> = []
  lists.forEach((item) => p.push(item))

  const isAllNull = () => p.findIndex((item) => item !== null) === -1

  while (!isAllNull()) {
    let minVal: null | number = null
    const pos = p.reduce((accu: number, curr, idx) => {
      if (curr === null) return accu
      if (p[accu] === null || p[accu].val > curr.val) {
        accu = idx
      }
      return accu
    }, 0)


    temp.next = p[pos]
    p[pos] = p[pos].next
    temp = temp.next

  }

  return dummyHead.next
}

console.log(mergeKLists([arr2list([0]), arr2list([0])]).json)
console.log(mergeKLists([arr2list([1, 2, 4]), arr2list([1, 3, 4])]).json)

