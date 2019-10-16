console.log('fibonacci(43)=', fibonacci(43))

function fibonacci(n) {
    if (n === 0)
        return 0
    if (n === 1)
        return 1
    
    var previous = 0
    var current = 1
    
    for (var i = 2; i <= n; i ++) {
        new_current = 3*current + 2*previous
        previous = current
        current = new_current
    }
    
    return current
}