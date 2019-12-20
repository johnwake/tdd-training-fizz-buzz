module.exports = function (n) {
    let str = '';
    const obj = {3: 'Fizz', 5: 'Buzz'};
    Object.keys(obj).forEach(key => {
        if(n % key === 0) {
            str = str + obj[key]
        }
    });
    return str || n;
}