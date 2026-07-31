document.addEventListener("DOMContentLoaded",()=>{


let xp = localStorage.getItem("quizzalXP") || 0;

xp = Number(xp);



const levelNumber = document.getElementById("level");

const levelBadge = document.querySelector(".level strong");

const xpText = document.getElementById("xpText");

const progressBar = document.getElementById("progress");

const percent = document.getElementById("percent");

const circle = document.querySelector(".circle");

const xpDisplay = document.getElementById("xp");





function updateDashboard(){



let level = Math.floor(xp / 1000) + 1;


let currentXP = xp % 1000;


let percentage = (currentXP / 1000) * 100;



// XP card

if(xpDisplay){

xpDisplay.innerHTML = xp;

}





// Level

if(levelNumber){

levelNumber.innerHTML = level;

}



if(levelBadge){

levelBadge.innerHTML = level;

}




// XP text

xpText.innerHTML = 
`${currentXP} / 1000 XP`;



// Progress bar

progressBar.style.width =
percentage + "%";



// Percentage text

percent.innerHTML =
Math.floor(percentage)+"%";



// Circle animation

circle.style.background =
`
conic-gradient(
#00eaff ${percentage * 3.6}deg,
#333 ${percentage * 3.6}deg
)
`;



}



updateDashboard();





// Example XP gain function

window.addXP = function(amount){


xp += amount;


localStorage.setItem(
"quizzalXP",
xp
);



updateDashboard();



};





// Mobile sidebar


const hamburger =
document.querySelector(".hamburger");


const sidebar =
document.querySelector(".sidebar");



if(hamburger){


hamburger.onclick=()=>{


sidebar.classList.toggle("show");


};


}





});