const assert = require('assert')
const _ = require('../rolflodash')

describe('rolflodash', function() {
  describe('chunk', function() {
    it("_.chunk(['a', 'b', 'c', 'd'], 2) equalTo [ [ 'a', 'b' ], [ 'c', 'd' ] ]", function() {
      assert.deepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 2), [ [ 'a', 'b'], ['c' , 'd' ] ])
    });
    it("_.chunk(['a', 'b', 'c', 'd'], 3) equalTo [ [ 'a', 'b', 'c' ], [ 'd' ] ]", function() {
      assert.deepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 3), [ [ 'a', 'b', 'c' ], [ 'd' ] ])
    });
    it("_.chunk(['a', 'b', 'c', 'd'], 3) notEqualTo [ [ 'a', 'b'], ['c' , 'd' ] ]", function() {
      assert.notDeepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 3), [ [ 'a', 'b'], ['c' , 'd' ] ])
    });
  });
  describe('drop', function() {
    it("_.drop([1, 2, 3]) equalTo [2, 3]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3]), [2, 3])
    });
    it("_.drop([1, 2, 3], 2) equalTo [3]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 2), [3])
    });
    it("_.drop([1, 2, 3], 5) equalTo []", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 5), [])
    });
    it("_.drop([1, 2, 3], 0) equalTo [1, 2, 3]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 0), [1, 2, 3])
    });
  });
  describe('isNaN', function() {
    it("_.isNaN(NaN) equalTo true", function() {
      assert.deepStrictEqual(_.isNaN(NaN), true)
    });
    it("_.isNaN(new Number(NaN)) equalTo true", function() {
      assert.deepStrictEqual(_.isNaN(new Number(NaN)), true)
    });
    it("isNaN(undefined) equalTo true", function() {
      assert.deepStrictEqual(isNaN(undefined), true)
    });
    it("_.isNaN(undefined) equalTo false", function() {
      assert.deepStrictEqual(_.isNaN(undefined), false)
    });
  });
});