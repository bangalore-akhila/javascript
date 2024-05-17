(function(window){
    var Hello = {};
Hello.Greeting = "Hello";
Hello.GreetHello = function (name) {
    console.log(Hello.Greeting + name);
};
window.Hello = Hello;
})(window);
