const fibonacci = function(num) {
    let index = num
    if (!Number.isInteger(num))
        index = parseInt(num)
    if (index < 0) {return "OOPS"}

    let fibonacciArray = [0, 1, 1]
    for (let i = fibonacciArray.length; i <= index; i++) {
        fibonacciArray.push(fibonacciArray[i-1]+fibonacciArray[i-2])
    }
    return fibonacciArray[index]
};

// Do not edit below this line
module.exports = fibonacci;
