const colors = ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF"]; 
let colorIndex = 0;

const button = document.getElementById("colorToggle");
const resumeContainer = document.querySelector(".resume-container"); 

button.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[colorIndex];  
    resumeContainer.style.backgroundColor = colors[colorIndex];  
    colorIndex = (colorIndex + 1) % colors.length;
});
