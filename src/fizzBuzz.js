module.exports = function (n) {
    switch(true){
        case n%5 == 0 && n%3 == 0:{
            return 'FizzBuzz';
            break;
        }
        case n%3 == 0:{
            return 'Fizz'
            break;
        }
        case n%5 == 0:{
            return 'Buzz'
            break;
        }
        default:{
            return n
        }
    }
    return str;
}