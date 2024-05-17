var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var name in names) {
    var JNames = names[name].charAt(0).toLowerCase();
    var Name = names[name];
    if(JNames === 'j') {
        GoodBye.GreetGoodBye(Name);
    } else {
        Hello.GreetHello(Name);
    }
}