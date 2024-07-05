const removeFromArray = function(array, ...args) {
    let outputArray = []
    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            outputArray.push(array[i])
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
