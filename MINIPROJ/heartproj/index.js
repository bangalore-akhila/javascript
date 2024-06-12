const body = document.querySelector("body");

//adding event listner

body.addEventListener("mousemove",(event)=>{
    const x = event.offsetX;
    const y = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = x + "px";
    spanEl.style.top = y + "px";
    const size = Math.random()*100;
    spanEl.style.height = size + "px";
    spanEl.style.width = size + "px";
    body.appendChild(spanEl); 
    setTimeout(()=>{
        spanEl.remove()
    }, 1000)
})