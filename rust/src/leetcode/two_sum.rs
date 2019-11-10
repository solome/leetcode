use std::collections::HashMap;

pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
  let mut idx = 0;
  let mut numsMap: HashMap<i32, i32> = HashMap::new();

  while idx < nums.len() {
    println!("{}", nums[idx]);
    let tmp = target - nums[idx];
    if numsMap.contains_key(&target) {
      return vec![*numsMap.get(&target), idx as i32]
    }
    numsMap.insert(nums[idx], idx);
    //return vec![]
    idx += 1;
  }

  return Vec::new();
}

