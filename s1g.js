//================ QUESTIONS =================


const questions = [

{
question:"1. Geography is the study of:",
options:["A. Animals only","B. The earth and its features","C. Numbers","D. Chemicals"],
answer:"B. The earth and its features"
},

{
question:"2. The shape of the earth is:",
options:["A. Flat","B. Square","C. Spherical","D. Triangular"],
answer:"C. Spherical"
},

{
question:"3. The imaginary line dividing the earth into two halves is called:",
options:["A. Prime Meridian","B. Equator","C. Tropic of Cancer","D. Latitude"],
answer:"B. Equator"
},

{
question:"4. Lines running from east to west on maps are called:",
options:["A. Longitudes","B. Latitudes","C. Grid lines","D. Contours"],
answer:"B. Latitudes"
},

{
question:"5. The 0° longitude line is called:",
options:["A. Equator","B. Prime Meridian","C. Tropic of Capricorn","D. Arctic Circle"],
answer:"B. Prime Meridian"
},

{
question:"6. The instrument used to measure temperature is:",
options:["A. Rain gauge","B. Thermometer","C. Barometer","D. Wind vane"],
answer:"B. Thermometer"
},

{
question:"7. Rainfall is measured using a:",
options:["A. Thermometer","B. Rain gauge","C. Compass","D. Barometer"],
answer:"B. Rain gauge"
},

{
question:"8. The instrument used to measure wind direction is:",
options:["A. Wind vane","B. Thermometer","C. Hygrometer","D. Barometer"],
answer:"A. Wind vane"
},

{
question:"9. Weather is the condition of the atmosphere:",
options:["A. Over a short period","B. Over many years","C. Underground","D. In oceans"],
answer:"A. Over a short period"
},

{
question:"10. Climate refers to:",
options:["A. Daily weather","B. Long-term weather conditions","C. Soil type","D. Population"],
answer:"B. Long-term weather conditions"
},

{
question:"11. The layer of gases surrounding the earth is:",
options:["A. Lithosphere","B. Atmosphere","C. Hydrosphere","D. Biosphere"],
answer:"B. Atmosphere"
},

{
question:"12. The main source of heat and light on earth is:",
options:["A. Moon","B. Stars","C. Sun","D. Clouds"],
answer:"C. Sun"
},

{
question:"13. A map is a representation of:",
options:["A. A country only","B. The earth or part of it","C. A building only","D. A person"],
answer:"B. The earth or part of it"
},

{
question:"14. The four main directions are:",
options:["A. N,S,E,W","B. A,B,C,D","C. Up,down,left,right","D. Hot,cold"],
answer:"A. N,S,E,W"
},

{
question:"15. A scale on a map shows:",
options:["A. Colour","B. Distance relationship","C. Weather","D. Population"],
answer:"B. Distance relationship"
},

{
question:"16. A map showing relief features is called:",
options:["A. Political map","B. Physical map","C. Road map","D. Weather map"],
answer:"B. Physical map"
},

{
question:"17. Mountains are examples of:",
options:["A. Relief features","B. Weather instruments","C. Minerals","D. Crops"],
answer:"A. Relief features"
},

{
question:"18. The process by which rocks are broken down is:",
options:["A. Weathering","B. Erosion","C. Deposition","D. Folding"],
answer:"A. Weathering"
},

{
question:"19. Movement of weathered materials is called:",
options:["A. Weathering","B. Erosion","C. Evaporation","D. Condensation"],
answer:"B. Erosion"
},

{
question:"20. Deposition occurs when:",
options:["A. Materials are dropped","B. Rocks melt","C. Rain falls","D. Wind blows"],
answer:"A. Materials are dropped"
},

{
question:"21. Soil is formed from:",
options:["A. Weathered rocks and organic matter","B. Water only","C. Air only","D. Animals only"],
answer:"A. Weathered rocks and organic matter"
},

{
question:"22. The top layer of soil is called:",
options:["A. Bedrock","B. Topsoil","C. Subsoil","D. Parent rock"],
answer:"B. Topsoil"
},

{
question:"23. A river begins from its:",
options:["A. Mouth","B. Source","C. Delta","D. Valley"],
answer:"B. Source"
},

{
question:"24. The place where a river enters the sea is:",
options:["A. Source","B. Mouth","C. Valley","D. Gorge"],
answer:"B. Mouth"
},

{
question:"25. A waterfall is formed when:",
options:["A. River falls over a steep slope","B. Rain stops","C. Wind increases","D. Soil forms"],
answer:"A. River falls over a steep slope"
},

{
question:"26. A lake is:",
options:["A. Flowing water","B. A large area of enclosed water","C. A mountain","D. A desert"],
answer:"B. A large area of enclosed water"
},

{
question:"27. Population means:",
options:["A. Number of people living in an area","B. Number of animals","C. Amount of rainfall","D. Size of land"],
answer:"A. Number of people living in an area"
},

{
question:"28. A census is carried out to find:",
options:["A. Weather","B. Population numbers","C. Soil types","D. Mountains"],
answer:"B. Population numbers"
},

{
question:"29. Migration means:",
options:["A. Movement of people","B. Growth of plants","C. Soil erosion","D. Rainfall"],
answer:"A. Movement of people"
},

{
question:"30. Rural areas are mainly:",
options:["A. Countryside areas","B. Cities","C. Town centres","D. Industrial areas"],
answer:"A. Countryside areas"
},

{
question:"31. Urban areas are:",
options:["A. Forests","B. Cities and towns","C. Farms","D. Mountains"],
answer:"B. Cities and towns"
},

{
question:"32. Agriculture involves:",
options:["A. Growing crops and keeping animals","B. Building roads","C. Mining only","D. Trading only"],
answer:"A. Growing crops and keeping animals"
},

{
question:"33. Coffee is a:",
options:["A. Cash crop","B. Food crop","C. Mineral","D. Fuel"],
answer:"A. Cash crop"
},

{
question:"34. Maize is mainly a:",
options:["A. Food crop","B. Cash crop","C. Mineral","D. Rock"],
answer:"A. Food crop"
},

{
question:"35. Mining involves:",
options:["A. Extracting minerals","B. Growing crops","C. Fishing","D. Transport"],
answer:"A. Extracting minerals"
},

{
question:"36. Transport means:",
options:["A. Movement of people and goods","B. Growing plants","C. Measuring rainfall","D. Making maps"],
answer:"A. Movement of people and goods"
},

{
question:"37. Fishing is an activity involving:",
options:["A. Catching fish","B. Mining gold","C. Growing crops","D. Building houses"],
answer:"A. Catching fish"
},

{
question:"38. A forest is an area covered mainly by:",
options:["A. Buildings","B. Trees","C. Water","D. Rocks"],
answer:"B. Trees"
},

{
question:"39. Deforestation means:",
options:["A. Planting trees","B. Cutting down forests","C. Protecting soil","D. Growing crops"],
answer:"B. Cutting down forests"
},

{
question:"40. Conservation means:",
options:["A. Protection of resources","B. Destruction of resources","C. Pollution","D. Mining"],
answer:"A. Protection of resources"
},

{
question:"41. A desert receives:",
options:["A. Very little rainfall","B. Heavy rainfall","C. Snow only","D. Floods"],
answer:"A. Very little rainfall"
},

{
question:"42. The largest continent is:",
options:["A. Africa","B. Asia","C. Europe","D. Australia"],
answer:"B. Asia"
},

{
question:"43. The largest ocean is:",
options:["A. Atlantic Ocean","B. Indian Ocean","C. Pacific Ocean","D. Arctic Ocean"],
answer:"C. Pacific Ocean"
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