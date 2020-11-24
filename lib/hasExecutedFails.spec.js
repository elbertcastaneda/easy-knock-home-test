const hasExecutedFails = require('./hasExecutedFails');

describe('hasExecutedFails', () => {
  it('should return true when we have more than one coincidences', () => {
    const failed = [ 'propertyType', 'homeCondition' ];
    const executed = [ 'yearBuilt', 'propertyType', 'homeCondition' ];

    expect(hasExecutedFails(failed, executed)).toBeTruthy();
  });

  it('should return true when we have only one coincidence', () => {
    const failed = [ 'completeDocumentation', 'homeCondition' ];
    const executed = [ 'yearBuilt', 'propertyType', 'homeCondition' ];

    expect(hasExecutedFails(failed, executed)).toBeTruthy();
  });

  it('should return false when we don\'t have any coincidence', () => {
    const failed = [ 'completeDocumentation' ];
    const executed = [ 'yearBuilt', 'propertyType', 'homeCondition' ];

    expect(hasExecutedFails(failed, executed)).toBeFalsy();
  });

  it('should return false when we don\'t have failed rules', () => {
    const failed = [];
    const executed = [ 'yearBuilt', 'propertyType', 'homeCondition' ];

    expect(hasExecutedFails(failed, executed)).toBeFalsy();
  });

  it('should return false when we don\'t have failed and executed rules', () => {
    const failed = [];
    const executed = [];

    expect(hasExecutedFails(failed, executed)).toBeFalsy();
  });
});