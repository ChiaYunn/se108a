const assert = require('assert')
const _ = require('../rolflodash')
var expect = require('chai').expect
var describe
describe('rolflodash', function () {
  describe('chunk', function () {
    var it
    it("_.chunk(['a', 'b', 'c', 'd'], 2) equalTo [ [ 'a', 'b' ], [ 'c', 'd' ] ]", function () {
      assert.deepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 2), [
        ['a', 'b'],
        ['c', 'd']
      ])
    })
    it("_.chunk(['a', 'b', 'c', 'd'], 3) equalTo [ [ 'a', 'b', 'c' ], [ 'd' ] ]", function () {
      assert.deepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 3), [
        ['a', 'b', 'c'],
        ['d']
      ])
    })
    it("_.chunk(['a', 'b', 'c', 'd'], 3) notEqualTo [ [ 'a', 'b'], ['c' , 'd' ] ]", function () {
      assert.notDeepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 3), [
        ['a', 'b'],
        ['c', 'd']
      ])
    })
  })
  describe('drop', function () {
    var it
    it('_.drop([1, 2, 3]) equalTo [2, 3]', function () {
      assert.deepStrictEqual(_.drop([1, 2, 3]), [2, 3])
    })
    it('_.drop([1, 2, 3], 2) equalTo [3]', function () {
      assert.deepStrictEqual(_.drop([1, 2, 3], 2), [3])
    })
    it('_.drop([1, 2, 3], 5) equalTo []', function () {
      assert.deepStrictEqual(_.drop([1, 2, 3], 5), [])
    })
    it('_.drop([1, 2, 3], 0) equalTo [1, 2, 3]', function () {
      assert.deepStrictEqual(_.drop([1, 2, 3], 0), [1, 2, 3])
    })
  })
  describe('isNaN', function () {
    var it
    it('_.isNaN(NaN) equalTo true', function () {
      assert.deepStrictEqual(_.isNaN(NaN), true)
    })
    it('_.isNaN(new Number(NaN)) equalTo true', function () {
      assert.deepStrictEqual(_.isNaN(new Number(NaN)), true)
    })
    it('isNaN(undefined) equalTo true', function () {
      assert.deepStrictEqual(isNaN(undefined), true)
    })
    it('_.isNaN(undefined) equalTo false', function () {
      assert.deepStrictEqual(_.isNaN(undefined), false)
    })
  })
  describe('reverse', function () {
    var it
    var array = [1, 2, 3]
    it('_.reverse(array) equalTo [3, 2, 1]', function () {
      assert.deepStrictEqual(_.reverse(array), [3, 2, 1])
    })
    it('array after _.reverse(array) equalTo [3, 2, 1]', function () {
      assert.deepStrictEqual(array, [3, 2, 1])
    })
  })
  describe('initial', function () {
    var it
    it('_.initial([1, 2, 3]) equalTo [1, 2]', function () {
      expect(_.initial([1, 2, 3])).to.be.a('array')
      expect(_.initial([1, 2, 3])).to.eql([1, 2])
    })
  })
})
