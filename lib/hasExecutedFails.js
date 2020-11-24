// Time complexity:
// - Worst case: O(mn)
// - Best case:  O(1n)
const hasExecutedFails = (failed, executed) => {
  // failed.some
  //   - Worst case: O(n)
  //   - Best case:  O(1):
  //        If we found some coincidence we return true immediately avoiding traverse the rest
  //        of failed rules.
  // executed.indexOf: O(n)
  return failed.some(f => executed.indexOf(f) !== -1);
};

module.exports = hasExecutedFails;
