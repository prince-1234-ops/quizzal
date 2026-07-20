//================ QUESTIONS =================

const questions = [

{
question:"1. Solve: 2x + 5 = 17",
options:["A. x=5","B. x=6","C. x=7","D. x=8"],
answer:"B. x=6"
},

{
question:"2. Factorise: x² + 5x + 6",
options:["A. (x+1)(x+6)","B. (x+2)(x+3)","C. (x-2)(x-3)","D. (x+5)(x+1)"],
answer:"B. (x+2)(x+3)"
},

{
question:"3. Solve: x² = 49",
options:["A. x=5","B. x=6","C. x=7 or -7","D. x=14"],
answer:"C. x=7 or -7"
},

{
question:"4. Simplify: 3a² × 4a³",
options:["A. 7a⁵","B. 12a⁵","C. 12a⁶","D. 7a⁶"],
answer:"B. 12a⁵"
},

{
question:"5. Find the gradient of a line passing through (2,3) and (6,11).",
options:["A. 1","B. 2","C. 3","D. 4"],
answer:"B. 2"
},

{
question:"6. Find the value of sin 30°.",
options:["A. 0","B. 1/2","C. √3/2","D. 1"],
answer:"B. 1/2"
},

{
question:"7. Find the value of cos 60°.",
options:["A. 1/2","B. 1","C. √3/2","D. 0"],
answer:"A. 1/2"
},

{
question:"8. Find the value of tan 45°.",
options:["A. 0","B. 1/2","C. 1","D. 2"],
answer:"C. 1"
},

{
question:"9. Expand: (x+4)(x+3)",
options:["A. x²+7x+12","B. x²+12","C. x²+4x+3","D. x²+8x+7"],
answer:"A. x²+7x+12"
},

{
question:"10. Solve: 3x - 9 = 12",
options:["A. 5","B. 6","C. 7","D. 8"],
answer:"B. 7"
},

{
question:"11. Find the roots of x² - 9 = 0.",
options:["A. 3 only","B. -3 only","C. 3 and -3","D. 9"],
answer:"C. 3 and -3"
},

{
question:"12. Simplify: (x²)(x⁴)",
options:["A. x⁶","B. x⁸","C. x²","D. 2x⁶"],
answer:"A. x⁶"
},

{
question:"13. Find the area of a circle with radius 7cm. (π=22/7)",
options:["A. 44cm²","B. 154cm²","C. 49cm²","D. 308cm²"],
answer:"B. 154cm²"
},

{
question:"14. The sum of angles in a triangle is:",
options:["A. 90°","B. 180°","C. 270°","D. 360°"],
answer:"B. 180°"
},

{
question:"15. Solve: x/5 = 9",
options:["A. 14","B. 35","C. 45","D. 50"],
answer:"C. 45"
},

{
question:"16. Find the midpoint of (2,4) and (6,8).",
options:["A. (3,5)","B. (4,6)","C. (5,7)","D. (6,8)"],
answer:"B. (4,6)"
},

{
question:"17. Find the mean of 5,10,15,20.",
options:["A. 10","B. 12.5","C. 15","D. 20"],
answer:"B. 12.5"
},

{
question:"18. Find the probability of getting a head when tossing a coin.",
options:["A. 1","B. 1/2","C. 1/3","D. 0"],
answer:"B. 1/2"
},

{
question:"19. Simplify: √144",
options:["A. 10","B. 11","C. 12","D. 14"],
answer:"C. 12"
},

{
question:"20. Solve: x² - 4x = 0",
options:["A. x=0 or 4","B. x=2","C. x=4 only","D. x=1"],
answer:"A. x=0 or 4"
},

{
question:"21. Find the nth term of 2,4,6,8...",
options:["A. n+2","B. 2n","C. 3n","D. n²"],
answer:"B. 2n"
},

{
question:"22. Convert 0.25 into a fraction.",
options:["A. 1/2","B. 1/3","C. 1/4","D. 2/5"],
answer:"C. 1/4"
},

{
question:"23. Solve: 5x=60",
options:["A. 10","B. 12","C. 15","D. 20"],
answer:"B. 12"
},

{
question:"24. Find the circumference of radius 14cm. (π=22/7)",
options:["A. 44cm","B. 88cm","C. 154cm","D. 196cm"],
answer:"B. 88cm"
},

{
question:"25. Simplify: 2x+3x+4x",
options:["A. 5x","B. 7x","C. 9x","D. 12x"],
answer:"C. 9x"
},

{
question:"26. What is the value of log₁₀(100)?",
options:["A. 1","B. 2","C. 10","D. 100"],
answer:"B. 2"
},

{
question:"27. Solve: x²=16",
options:["A. 4 only","B. -4 only","C. ±4","D. 8"],
answer:"C. ±4"
},

{
question:"28. Find the volume of a cube with side 3cm.",
options:["A. 9cm³","B. 18cm³","C. 27cm³","D. 36cm³"],
answer:"C. 27cm³"
},

{
question:"29. Simplify: 6x²/3x",
options:["A. 2x","B. 3x","C. 6x","D. 9x"],
answer:"A. 2x"
},

{
question:"30. Find the distance between (0,0) and (3,4).",
options:["A. 4","B. 5","C. 6","D. 7"],
answer:"B. 5"
},

{
question:"31. Solve: 4x+8=24",
options:["A. 2","B. 3","C. 4","D. 5"],
answer:"C. 4"
},

{
question:"32. Find the gradient of y=3x+2.",
options:["A. 2","B. 3","C. 5","D. x"],
answer:"B. 3"
},

{
question:"33. Calculate 15².",
options:["A. 125","B. 200","C. 225","D. 250"],
answer:"C. 225"
},

{
question:"34. Find the inverse of y=2x.",
options:["A. x=y/2","B. y=x/2","C. x=2y","D. y=2"],
answer:"A. x=y/2"
},

{
question:"35. A straight angle is:",
options:["A. 90°","B. 120°","C. 180°","D. 360°"],
answer:"C. 180°"
},

{
question:"36. Find the HCF of 36 and 48.",
options:["A. 6","B. 8","C. 12","D. 16"],
answer:"C. 12"
},

{
question:"37. Find the LCM of 12 and 18.",
options:["A. 24","B. 36","C. 48","D. 60"],
answer:"B. 36"
},

{
question:"38. Simplify: (a+b)²",
options:["A. a²+b²","B. a²+2ab+b²","C. a+b²","D. 2ab"],
answer:"B. a²+2ab+b²"
},

{
question:"39. Find the mode of 2,3,3,5,7.",
options:["A. 2","B. 3","C. 5","D. 7"],
answer:"B. 3"
},

{
question:"40. Solve: 2x²=18",
options:["A. x=3 or -3","B. x=9","C. x=6","D. x=2"],
answer:"A. x=3 or -3"
},

{
question:"41. Find the gradient of a horizontal line.",
options:["A. 0","B. 1","C. 2","D. Undefined"],
answer:"A. 0"
},

{
question:"42. Simplify: 5³",
options:["A. 15","B. 25","C. 75","D. 125"],
answer:"D. 125"
},

{
question:"43. Solve: x²+2x-8=0",
options:["A. x=2,-4","B. x=4,-2","C. x=8,-1","D. x=1,-8"],
answer:"A. x=2,-4"
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