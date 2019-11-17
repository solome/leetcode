function two_sum(nums: number[], target: number): number[] {
  const numsMap: Map<number, number> = new Map()
  for (let idx: number = 0; idx < nums.length; idx++) {
    const right: number = nums[idx]
    const left: number = target - right
    if (numsMap.has(left)) return [numsMap.get(left), idx]
    numsMap.set(right, idx)
  }
  return []
}

const nums: number[] = [2, 11, 7, 15]
const target: number = 9

console.log(nums, target, two_sum(nums, target))
