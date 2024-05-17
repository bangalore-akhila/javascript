function onSubmit(){
    var userName = document.getElementById("userName").value;
    document.getElementById("content").textContent = "Hi " + userName + " Welcome";
if(userName === "student") {
    var head = document.querySelector("h1").textContent;
    document.querySelector("h1").textContent = head + " I am loving!"
} else {
    var head = document.querySelector("h1").textContent;
    var value = "<h2>" + head +"I am fine</h2>";
    document.getElementById("content").innerHTML = value
}
}