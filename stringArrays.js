// String & Arrays

const data = 'Kumar Nitesh';

// [].filter = Arrays.prototype.filter

const outData = [].filter.call(data, function (elem, index) {
    return index > 6;
});

console.log(outData);