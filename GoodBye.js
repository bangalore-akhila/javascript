(function(window){
    var GoodBye = {};
GoodBye.Greeting = "GoodBye";
GoodBye.GreetGoodBye = function (name) {
    console.log(GoodBye.Greeting + name);
};
window.GoodBye = GoodBye;
})(window);



