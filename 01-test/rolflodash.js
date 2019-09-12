const _ = module.exports = {}

// _.chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]
// _.chunk(['a', 'b', 'c', 'd'], 3) => [['a', 'b', 'c'], ['d']]
_.chunk = function (list, n) {
  const clist = []
  for (let i=0; i<list.length; i+=n) {
    clist.push(list.slice(i, i+n))
  }
  return clist
}

//_.drop([1, 2, 3]); => [2, 3]
//_.drop([1, 2, 3], 2); => [3]
//_.drop([1, 2, 3], 5); => []
//_.drop([1, 2, 3], 0); => [1, 2, 3]
_.drop = function (list, n = 1) {
  let rlist = [];
  for (let i = n; i < list.length; i ++) {
    rlist.push(list[i]);
  }
  return rlist;
}

//_.isNaN(NaN); => true
//_.isNaN(new Number(NaN)); => true
//isNaN(undefined); => true
//_.isNaN(undefined); => false
_.isNaN = function (value) {
  if (value <= 0 || value >= 0 || value == undefined) {
    return false;
  } else {
    return true;
  }
}

//var array = [1, 2, 3];
//_.reverse(array); => [3, 2, 1]
//console.log(array); => [3, 2, 1]
_.reverse = function (array) {
  array = array.reverse();
  return array;
}

//_.initial([1, 2, 3]); => [1, 2]
_.initial = function (array) {
  let rarray = [];
  for (let i = 0; i < array.length - 1; i ++) {
    rarray.push(array[i]);
  }
  return rarray;
}