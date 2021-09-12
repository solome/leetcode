/**
 * 链表数据结构。
 */
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  get json() {
    const arr = []
    let p: ListNode = this
    while (p !== null) {
      arr.push(p.val)
      p = p.next
    }

    return `[${arr.join(',')}]`
  }
}


export function arr2list(arr: number[]) {
  const dummyHead: ListNode = new ListNode()
  let p = dummyHead

  arr.forEach((val) => {
    const node = new ListNode(val)
    p.next = node
    p = p.next
  })

  return dummyHead.next
}