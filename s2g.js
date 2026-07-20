//================ QUESTIONS =================
const questions = [

{
question:"1. The rotation of the earth causes:",
options:["A. Seasons","B. Day and night","C. Rainfall","D. Earthquakes"],
answer:"B. Day and night"
},

{
question:"2. The revolution of the earth around the sun causes:",
options:["A. Day and night","B. Seasons","C. Winds","D. Tides"],
answer:"B. Seasons"
},

{
question:"3. The earth takes how long to rotate once?",
options:["A. 12 hours","B. 24 hours","C. 30 days","D. 365 days"],
answer:"B. 24 hours"
},

{
question:"4. The earth takes how long to revolve around the sun?",
options:["A. 24 hours","B. 7 days","C. 365 days","D. 12 hours"],
answer:"C. 365 days"
},

{
question:"5. The imaginary lines joining the North and South poles are:",
options:["A. Latitudes","B. Longitudes","C. Equators","D. Contours"],
answer:"B. Longitudes"
},

{
question:"6. Latitude is measured in:",
options:["A. Degrees","B. Kilograms","C. Litres","D. Metres"],
answer:"A. Degrees"
},

{
question:"7. The Tropic of Cancer is located at:",
options:["A. 0°","B. 23.5°N","C. 23.5°S","D. 90°S"],
answer:"B. 23.5°N"
},

{
question:"8. The Tropic of Capricorn is located at:",
options:["A. 23.5°S","B. 23.5°N","C. 0°","D. 90°N"],
answer:"A. 23.5°S"
},

{
question:"9. A contour line joins places of equal:",
options:["A. Temperature","B. Height","C. Rainfall","D. Population"],
answer:"B. Height"
},

{
question:"10. A valley is a:",
options:["A. Low area between hills","B. High mountain","C. Flat land","D. Desert"],
answer:"A. Low area between hills"
},

{
question:"11. The process of wearing away rocks by agents is:",
options:["A. Weathering","B. Erosion","C. Deposition","D. Folding"],
answer:"B. Erosion"
},

{
question:"12. Wind erosion is common in:",
options:["A. Deserts","B. Oceans","C. Lakes","D. Forests"],
answer:"A. Deserts"
},

{
question:"13. The removal of trees from forests is called:",
options:["A. Afforestation","B. Deforestation","C. Conservation","D. Irrigation"],
answer:"B. Deforestation"
},

{
question:"14. Planting trees to replace forests is called:",
options:["A. Mining","B. Afforestation","C. Erosion","D. Urbanization"],
answer:"B. Afforestation"
},

{
question:"15. The process of water changing into vapour is:",
options:["A. Condensation","B. Evaporation","C. Rainfall","D. Freezing"],
answer:"B. Evaporation"
},

{
question:"16. Clouds are formed through:",
options:["A. Condensation","B. Melting","C. Erosion","D. Deposition"],
answer:"A. Condensation"
},

{
question:"17. Rainfall caused by mountains is called:",
options:["A. Convectional rainfall","B. Relief rainfall","C. Cyclonic rainfall","D. Artificial rainfall"],
answer:"B. Relief rainfall"
},

{
question:"18. Climate is affected by:",
options:["A. Latitude and altitude","B. Colour","C. Population only","D. Roads"],
answer:"A. Latitude and altitude"
},

{
question:"19. High areas usually have:",
options:["A. Higher temperatures","B. Lower temperatures","C. No rainfall","D. No winds"],
answer:"B. Lower temperatures"
},

{
question:"20. A climate with high rainfall and temperatures is:",
options:["A. Tropical climate","B. Desert climate","C. Polar climate","D. Mediterranean climate"],
answer:"A. Tropical climate"
},

{
question:"21. Population density means:",
options:["A. People per unit area","B. Total rainfall","C. Land size","D. Number of towns"],
answer:"A. People per unit area"
},

{
question:"22. Birth rate refers to:",
options:["A. Number of deaths","B. Number of births","C. Migration","D. Population decrease"],
answer:"B. Number of births"
},

{
question:"23. Death rate refers to:",
options:["A. Number of births","B. Number of deaths","C. Number of migrants","D. Population growth"],
answer:"B. Number of deaths"
},

{
question:"24. A population pyramid shows:",
options:["A. Population structure","B. Soil layers","C. Climate","D. Relief"],
answer:"A. Population structure"
},

{
question:"25. Urbanization means:",
options:["A. Growth of towns","B. Cutting forests","C. Farming","D. Mining"],
answer:"A. Growth of towns"
},

{
question:"26. A settlement is:",
options:["A. A place where people live","B. A river","C. A mountain","D. A forest"],
answer:"A. A place where people live"
},

{
question:"27. A nucleated settlement has houses that are:",
options:["A. Scattered","B. Close together","C. Underground","D. Temporary"],
answer:"B. Close together"
},

{
question:"28. Subsistence farming is done mainly for:",
options:["A. Export","B. Family use","C. Industries","D. Tourism"],
answer:"B. Family use"
},

{
question:"29. Commercial farming is done mainly for:",
options:["A. Selling products","B. Feeding one family","C. Research","D. Recreation"],
answer:"A. Selling products"
},

{
question:"30. Irrigation is the supply of:",
options:["A. Water to crops","B. Seeds","C. Fertilizer only","D. Machines"],
answer:"A. Water to crops"
},

{
question:"31. Terrace farming is common in:",
options:["A. Mountain areas","B. Deserts","C. Oceans","D. Cities"],
answer:"A. Mountain areas"
},

{
question:"32. Tourism involves:",
options:["A. Travelling for leisure","B. Mining","C. Farming","D. Fishing"],
answer:"A. Travelling for leisure"
},

{
question:"33. A national park is created to:",
options:["A. Protect wildlife","B. Build houses","C. Mine minerals","D. Grow crops"],
answer:"A. Protect wildlife"
},

{
question:"34. Industry involves:",
options:["A. Manufacturing goods","B. Farming only","C. Fishing only","D. Weather study"],
answer:"A. Manufacturing goods"
},

{
question:"35. Raw materials are used in:",
options:["A. Industries","B. Weather stations","C. Schools","D. Hospitals"],
answer:"A. Industries"
},

{
question:"36. Renewable resources include:",
options:["A. Solar energy","B. Coal","C. Petroleum","D. Minerals"],
answer:"A. Solar energy"
},

{
question:"37. Pollution means:",
options:["A. Contamination of environment","B. Planting trees","C. Protecting nature","D. Conservation"],
answer:"A. Contamination of environment"
},

{
question:"38. Greenhouse gases cause:",
options:["A. Global warming","B. Earthquakes","C. Erosion only","D. Flood control"],
answer:"A. Global warming"
},

{
question:"39. A map showing population distribution is:",
options:["A. Population map","B. Relief map","C. Weather map","D. Road map"],
answer:"A. Population map"
},

{
question:"40. GIS stands for:",
options:["A. Geographic Information System","B. General Information Service","C. Global Internet System","D. Geographic Industrial Survey"],
answer:"A. Geographic Information System"
},

{
question:"41. Remote sensing uses:",
options:["A. Satellites","B. Farming tools","C. Cars","D. Boats"],
answer:"A. Satellites"
},

{
question:"42. A drought is caused by:",
options:["A. Long period without rainfall","B. Heavy rainfall","C. Strong winds only","D. Earthquakes"],
answer:"A. Long period without rainfall"
},

{
question:"43. Flooding occurs when:",
options:["A. Water covers normally dry land","B. Soil dries","C. Rain stops","D. Rivers disappear"],
answer:"A. Water covers normally dry land"
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