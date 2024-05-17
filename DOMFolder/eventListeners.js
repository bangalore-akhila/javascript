document.addEventListener("DOMContentLoaded", function(event){
    function eventListPrac(event) {
        console.log(this);
        
        var userName = document.getElementById("userName").value;
        var head = document.querySelector("h1").textContent;
    
        if (userName === "student") {
            document.querySelector("h1").textContent = head + " I am loving!";
        } else {
            var value = "<h2>" + head + "I am fine</h2>";
            document.getElementById("content").innerHTML = value;
        }
    }
    
    //unobstructive event binding
    // document.querySelector("button").addEventListener("click", eventListPrac);
    
    document.querySelector("button").onclick = eventListPrac;
    document.querySelector("body").addEventListener("mousemove",function(event){
       if(event.shiftKey === true)  console.log("x"+event.clientX)
    })
})
