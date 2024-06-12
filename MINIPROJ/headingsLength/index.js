const headings =document.querySelectorAll('h1,h2,h3,h4,h5,h6');

console.log("headings", headings);

headings.forEach(element => {
    console.log(element.textContent.length)
});