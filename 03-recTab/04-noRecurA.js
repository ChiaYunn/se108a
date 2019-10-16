
console.log('fibonacci(43)=', fibonacci(5))

function fibonacci(n) {
    if (n === 0)
        return 0
    if (n === 1)
        return 1
        
    var ft = [0, 1]

    for(var i = 0; i < n - 1; i ++){
        len = ft.length
        ft.push(3*ft[len - 1] + 2*ft[len - 2])
    }
    
    return ft[len]
}