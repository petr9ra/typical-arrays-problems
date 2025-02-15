
exports.min = function min (array) {
    if (!array || array.length === 0) 
        return 0 
    return Math.min.apply(null, array);
}

exports.max = function max (array) {
    if (!array || array.length === 0) 
        return 0 
    return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) 
        return 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] 
    };
    return sum / array.length
}
