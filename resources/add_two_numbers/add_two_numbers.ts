class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode()

  const state = {
    p1: l1,
    p2: l2,
    p: dummyHead,
    carry: 0
  }

  while (state.p1 || state.p2) {
    const val1 = state.p1 && state.p1.val || 0
    const val2 = state.p2 && state.p2.val || 0

    const val = val1 + val2 + state.carry
    const node = new ListNode(val % 10)
    state.carry = val >= 10 ? 1 : 0

    state.p.next = node
    state.p = state.p.next

    if (state.p1) state.p1 = state.p1.next
    if (state.p2) state.p2 = state.p2.next
  }
  if (state.carry) {
    state.p.next = new ListNode(state.carry)
  }

  return dummyHead.next
}

function arr2list(arr: number[]) {
  const dummyHead: ListNode = new ListNode()
  let p = dummyHead

  arr.forEach((val) => {
    const node = new ListNode(val)
    p.next = node
    p = p.next
  })

  // console.log('arr2list', head)
  return dummyHead.next
}


console.log(addTwoNumbers(arr2list([0]), arr2list([0])))
console.log(addTwoNumbers(arr2list([5]), arr2list([7])))
console.log(addTwoNumbers(arr2list([2, 4, 3]), arr2list([5, 6, 4])))
console.log(JSON.stringify(addTwoNumbers(arr2list([9, 9, 9, 9, 9, 9, 9]), arr2list([9, 9, 9, 9]))))
console.log(JSON.stringify(addTwoNumbers(
  arr2list([1, 6, 0, 3, 3, 6, 7, 2, 0, 1]),
  arr2list([6, 3, 0, 8, 9, 6, 6, 9, 6, 1])))
)



