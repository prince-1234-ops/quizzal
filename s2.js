//================ QUESTIONS =================

const questions = [

{
question:"1. Simplify: 3x + 5x - 2x",
options:["A. 5x","B. 6x","C. 8x","D. 10x"],
answer:"B. 6x"
},

{
question:"2. Solve: 4x + 7 = 23",
options:["A. x = 2","B. x = 3","C. x = 4","D. x = 5"],
answer:"C. x = 4"
},

{
question:"3. Evaluate: 5² + 4",
options:["A. 20","B. 25","C. 29","D. 30"],
answer:"C. 29"
},

{
question:"4. Expand: 3(x + 4)",
options:["A. 3x + 4","B. 3x + 12","C. x + 12","D. 7x"],
answer:"B. 3x + 12"
},

{
question:"5. Factorise: 6x + 12",
options:["A. 3(x + 4)","B. 2(x + 6)","C. 6(x + 2)","D. 6(x + 12)"],
answer:"C. 6(x + 2)"
},

{
question:"6. Find the value of 2³ × 2²",
options:["A. 16","B. 32","C. 64","D. 128"],
answer:"B. 32"
},

{
question:"7. Simplify: 15/25",
options:["A. 5/3","B. 3/5","C. 15/5","D. 25/15"],
answer:"B. 3/5"
},

{
question:"8. Find the LCM of 6 and 8.",
options:["A. 12","B. 24","C. 48","D. 18"],
answer:"B. 24"
},

{
question:"9. Solve: x − 9 = 12",
options:["A. 3","B. 19","C. 21","D. 24"],
answer:"C. 21"
},

{
question:"10. Convert 0.75 to a fraction.",
options:["A. 1/4","B. 2/3","C. 3/4","D. 4/5"],
answer:"C. 3/4"
},

{
question:"11. Find the area of a rectangle 12 cm by 9 cm.",
options:["A. 21 cm²","B. 42 cm²","C. 108 cm²","D. 96 cm²"],
answer:"C. 108 cm²"
},

{
question:"12. Find the perimeter of a square of side 8 cm.",
options:["A. 16 cm","B. 24 cm","C. 32 cm","D. 64 cm"],
answer:"C. 32 cm"
},

{
question:"13. Evaluate: √81",
options:["A. 7","B. 8","C. 9","D. 10"],
answer:"C. 9"
},

{
question:"14. Which of these is a prime number?",
options:["A. 21","B. 27","C. 29","D. 33"],
answer:"C. 29"
},

{
question:"15. Simplify: 4a + 7a",
options:["A. 3a","B. 11a","C. 28a","D. 7a"],
answer:"B. 11a"
},

{
question:"16. Solve: 5x = 45",
options:["A. 8","B. 9","C. 10","D. 11"],
answer:"B. 9"
},

{
question:"17. Expand: (x + 5)(x + 2)",
options:["A. x² + 7x + 10","B. x² + 10","C. x² + 5x + 2","D. x² + 3x +10"],
answer:"A. x² + 7x + 10"
},

{
question:"18. Find 20% of 250.",
options:["A. 25","B. 40","C. 50","D. 60"],
answer:"C. 50"
},

{
question:"19. Express 3:5 as a fraction.",
options:["A. 3/8","B. 3/5","C. 5/3","D. 8/5"],
answer:"B. 3/5"
},

{
question:"20. Find the HCF of 18 and 24.",
options:["A. 2","B. 4","C. 6","D. 12"],
answer:"C. 6"
},

{
question:"21. Solve: 7x − 14 = 0",
options:["A. 1","B. 2","C. 3","D. 4"],
answer:"B. 2"
},

{
question:"22. Convert 45% to decimal.",
options:["A. 4.5","B. 0.45","C. 0.045","D. 45"],
answer:"B. 0.45"
},

{
question:"23. Evaluate: 9 × 7",
options:["A. 56","B. 63","C. 72","D. 81"],
answer:"B. 63"
},

{
question:"24. Solve: 2x + 8 = 18",
options:["A. 3","B. 4","C. 5","D. 6"],
answer:"C. 5"
},

{
question:"25. Find the circumference of a circle of radius 7 cm (π = 22/7).",
options:["A. 22 cm","B. 44 cm","C. 49 cm","D. 154 cm"],
answer:"B. 44 cm"
},

{
question:"26. Find the area of a triangle with base 10 cm and height 6 cm.",
options:["A. 16 cm²","B. 30 cm²","C. 60 cm²","D. 120 cm²"],
answer:"B. 30 cm²"
},

{
question:"27. Solve: x/4 = 6",
options:["A. 10","B. 20","C. 24","D. 30"],
answer:"C. 24"
},

{
question:"28. Which angle is a right angle?",
options:["A. 45°","B. 60°","C. 90°","D. 120°"],
answer:"C. 90°"
},

{
question:"29. Simplify: 2m × 5",
options:["A. 7m","B. 10m","C. 25m","D. 5m"],
answer:"B. 10m"
},

{
question:"30. Evaluate: 64 ÷ 8",
options:["A. 6","B. 7","C. 8","D. 9"],
answer:"C. 8"
},

{
question:"31. Find the value of 3³.",
options:["A. 9","B. 18","C. 27","D. 81"],
answer:"C. 27"
},

{
question:"32. Simplify: x + x + x",
options:["A. x³","B. 2x","C. 3x","D. x"],
answer:"C. 3x"
},

{
question:"33. Solve: 6x = 54",
options:["A. 8","B. 9","C. 10","D. 11"],
answer:"B. 9"
},

{
question:"34. Convert 2/5 to a decimal.",
options:["A. 0.2","B. 0.4","C. 0.5","D. 0.8"],
answer:"B. 0.4"
},

{
question:"35. Find the mean of 4, 6, 8.",
options:["A. 5","B. 6","C. 7","D. 8"],
answer:"B. 6"
},

{
question:"36. Find the median of 3, 7, 5.",
options:["A. 3","B. 5","C. 7","D. 15"],
answer:"B. 5"
},

{
question:"37. Solve: 3(x − 2) = 12",
options:["A. 4","B. 5","C. 6","D. 8"],
answer:"C. 6"
},

{
question:"38. Find the next term: 2, 4, 6, 8, __",
options:["A. 9","B. 10","C. 11","D. 12"],
answer:"B. 10"
},

{
question:"39. Which is an even number?",
options:["A. 15","B. 19","C. 24","D. 31"],
answer:"C. 24"
},

{
question:"40. Evaluate: 100 ÷ 25",
options:["A. 2","B. 3","C. 4","D. 5"],
answer:"C. 4"
},

{
question:"41. Find 15% of 200.",
options:["A. 20","B. 25","C. 30","D. 35"],
answer:"C. 30"
},

{
question:"42. Simplify: 8y − 3y",
options:["A. 3y","B. 5y","C. 8y","D. 11y"],
answer:"B. 5y"
},

{
question:"43. Solve: 9 + x = 25",
options:["A. 14","B. 15","C. 16","D. 17"],
answer:"C. 16"
}

];


//================ VARIABLES =================

let current = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const scoreText = document.getElementById("score");
const counter = document.getElementById("counter");

//================ LOAD QUESTION =================

function loadQuestion(){

counter.innerHTML =
`Question ${current+1} / ${questions.length}`;

let q = questions[current];

question.innerHTML = q.question;

answers.innerHTML="";

q.options.forEach(option=>{

let btn=document.createElement("button");

btn.className="option";

btn.innerHTML=option;

btn.onclick=()=>checkAnswer(btn,option);

answers.appendChild(btn);

});

}

function checkAnswer(button,selected){

let correct = questions[current].answer;

let buttons=document.querySelectorAll(".option");

buttons.forEach(btn=>btn.disabled=true);

if(selected===correct){

score++;

button.classList.add("correct");

fireworks();

}else{

button.classList.add("wrong");

buttons.forEach(btn=>{

if(btn.innerHTML===correct){

btn.classList.add("correct");

}

});

}

scoreText.innerHTML="Score: "+score;

}

//================ NEXT QUESTION =================

function nextQuestion(){

current++;

if(current>=questions.length){

alert("Quiz Finished!\n\nScore: "+score+"/"+questions.length);

current=0;

score=0;

scoreText.innerHTML="Score: 0";

}

loadQuestion();

}

//================ FIREWORKS =================

const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

let particles=[];

class Particle{

constructor(x,y,color){

this.x=x;
this.y=y;
this.radius=Math.random()*3+2;
this.color=color;
this.vx=(Math.random()-0.5)*8;
this.vy=(Math.random()-0.5)*8;
this.alpha=1;

}

update(){

this.x+=this.vx;
this.y+=this.vy;
this.vy+=0.1;
this.alpha-=0.02;

}

draw(){

ctx.globalAlpha=this.alpha;

ctx.beginPath();

ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

ctx.fillStyle=this.color;

ctx.fill();

ctx.globalAlpha=1;

}

}

function fireworks(){

const colors=["red","yellow","blue","lime","cyan","orange","pink","white"];

for(let i=0;i<80;i++){

particles.push(

new Particle(

Math.random()*canvas.width,

Math.random()*canvas.height/2,

colors[Math.floor(Math.random()*colors.length)]

)

);

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.update();

p.draw();

if(p.alpha<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();

//================ START =================

loadQuestion();