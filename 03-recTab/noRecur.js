console.log('fibonacci(43)=', fibonacci(43))

function fibonacci(n) {
    if (n === 0)
        return 0
    if (n === 1)
        return 1
    
    var p = 0
    var c = 1
    
    for (var i = 2; i <= n; i ++) {
        nC = 3*c + 2*p
        p = c
        c = nC
    }
    
    return c
}