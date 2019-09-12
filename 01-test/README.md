# 練習 -- 用 mocha 進行單元測試

1. 用 mocha 的方式撰寫單元測試函數 （例如 chunkTest.js) 放在 test 資料夾下
2. 打入 mocha 指令開始測試。

範例

```
PS D:\Project\Col\ccc\se108a\01-test> mocha

  rolflodash
    chunk
      √ _.chunk(['a', 'b', 'c', 'd'], 2) equalTo [ [ 'a', 'b' ], [ 'c', 'd' ] ]
      √ _.chunk(['a', 'b', 'c', 'd'], 3) equalTo [ [ 'a', 'b', 'c' ], [ 'd' ] ]
      √ _.chunk(['a', 'b', 'c', 'd'], 3) notEqualTo [ [ 'a', 'b'], ['c' , 'd' ] ]
    drop
      √ _.drop([1, 2, 3]) equalTo [2, 3]
      √ _.drop([1, 2, 3], 2) equalTo [3]
      √ _.drop([1, 2, 3], 5) equalTo []
      √ _.drop([1, 2, 3], 0) equalTo [1, 2, 3]
    isNaN
      √ _.isNaN(NaN) equalTo true
      √ _.isNaN(new Number(NaN)) equalTo true
      √ isNaN(undefined) equalTo true
      √ _.isNaN(undefined) equalTo false
    reverse
      √ _.reverse(array) equalTo [3, 2, 1]
      √ array after _.reverse(array) equalTo [3, 2, 1]
    initial
      √ _.initial([1, 2, 3]) equalTo [1, 2]

  14 passing (17ms)
```
