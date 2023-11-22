import { arr2list, ListNode } from '@leetcode/shared-utils/ListNode'

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) return null

  let p1 = l1
  let p2 = l2
  const dummyHead: ListNode = new ListNode()
  let p = dummyHead

  while (p1 && p2) {
    if (p1.val > p2.val) {
      p.next = p2
      p2 = p2.next
    } else {
      p.next = p1
      p1 = p1.next
    }
    p = p.next
  }

  if (p1) {
    p.next = p1
  }

  if (p2) {
    p.next = p2
  }

  return dummyHead.next
}

console.log(mergeTwoLists(arr2list([0]), arr2list([0])))
console.log(mergeTwoLists(arr2list([1, 2, 4]), arr2list([1, 3, 4])))

