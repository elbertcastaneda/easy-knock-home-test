const hasExecutedFails = (failed, executed) => {
  return failed.some(f => executed.indexOf(f) !== -1);
};

module.exports = hasExecutedFails;
