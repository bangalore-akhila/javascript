document.getElementById("loginform").addEventListener("submit",(e)=>{
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, "username")
        let displayEle = document.createElement("div");
        displayEle.textContent = username;
        let bod = document.querySelector(".container");
        bod.appendChild(displayEle);
    })