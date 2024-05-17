function multiplier(multiplier) {
    var multiply = function(x) {
        return multiplier * x;
    }
    return multiply;
};

//one way of passing values
var multi = multiplier(3);

// second way of passing values
var multi2 = multiplier(3)(2);
console.log(multi2);