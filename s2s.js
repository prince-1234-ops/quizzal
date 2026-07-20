//================ QUESTIONS =================
const questions = [

{
question:"1. A computer system consists of:",
options:["A. Hardware and software","B. Books and papers","C. Tables and chairs","D. Electricity only"],
answer:"A. Hardware and software"
},

{
question:"2. The CPU is responsible for:",
options:["A. Processing instructions","B. Printing documents","C. Storing files only","D. Displaying images"],
answer:"A. Processing instructions"
},

{
question:"3. The ALU performs:",
options:["A. Arithmetic and logical operations","B. Printing","C. Scanning","D. Internet connection"],
answer:"A. Arithmetic and logical operations"
},

{
question:"4. The control unit controls:",
options:["A. Computer operations","B. Sound volume","C. Keyboard size","D. Internet speed"],
answer:"A. Computer operations"
},

{
question:"5. Primary memory includes:",
options:["A. RAM and ROM","B. Hard disk only","C. Flash drive only","D. CDs only"],
answer:"A. RAM and ROM"
},

{
question:"6. Secondary storage is used for:",
options:["A. Permanent storage of data","B. Processing data","C. Displaying information","D. Typing"],
answer:"A. Permanent storage of data"
},

{
question:"7. An example of secondary storage is:",
options:["A. Hard disk","B. CPU","C. RAM","D. Keyboard"],
answer:"A. Hard disk"
},

{
question:"8. A computer peripheral is:",
options:["A. An external device connected to a computer","B. The CPU only","C. A computer virus","D. Software"],
answer:"A. An external device connected to a computer"
},

{
question:"9. A joystick is mainly used for:",
options:["A. Controlling games","B. Printing","C. Typing","D. Scanning"],
answer:"A. Controlling games"
},

{
question:"10. A microphone is used to:",
options:["A. Input sound","B. Display images","C. Store files","D. Print documents"],
answer:"A. Input sound"
},

{
question:"11. A speaker is an:",
options:["A. Output device","B. Input device","C. Storage device","D. Processing device"],
answer:"A. Output device"
},

{
question:"12. The process of starting a computer is called:",
options:["A. Booting","B. Formatting","C. Browsing","D. Scanning"],
answer:"A. Booting"
},

{
question:"13. The desktop is:",
options:["A. The main screen after starting a computer","B. A hardware device","C. A virus","D. A printer"],
answer:"A. The main screen after starting a computer"
},

{
question:"14. A file is:",
options:["A. A collection of related data","B. A computer screen","C. A keyboard key","D. A cable"],
answer:"A. A collection of related data"
},

{
question:"15. A database stores:",
options:["A. Organized information","B. Electricity","C. Computer parts","D. Programs only"],
answer:"A. Organized information"
},

{
question:"16. A database table contains:",
options:["A. Rows and columns","B. Pictures only","C. Sounds only","D. Passwords only"],
answer:"A. Rows and columns"
},

{
question:"17. A row in a database is called a:",
options:["A. Record","B. Field","C. File","D. Folder"],
answer:"A. Record"
},

{
question:"18. A column in a database is called a:",
options:["A. Field","B. Record","C. Program","D. Folder"],
answer:"A. Field"
},

{
question:"19. A spreadsheet is mainly used for:",
options:["A. Calculations and data analysis","B. Playing games","C. Drawing only","D. Browsing"],
answer:"A. Calculations and data analysis"
},

{
question:"20. A formula in Excel begins with:",
options:["A. =","B. +","C. #","D. &"],
answer:"A. ="
},

{
question:"21. A cell is found at the intersection of:",
options:["A. Row and column","B. Page and book","C. File and folder","D. Screen and keyboard"],
answer:"A. Row and column"
},

{
question:"22. A computer algorithm is:",
options:["A. A step-by-step procedure for solving a problem","B. A computer virus","C. A device","D. A file"],
answer:"A. A step-by-step procedure for solving a problem"
},

{
question:"23. A flowchart uses:",
options:["A. Symbols to represent processes","B. Words only","C. Pictures only","D. Numbers only"],
answer:"A. Symbols to represent processes"
},

{
question:"24. A decision in a flowchart is represented by:",
options:["A. Diamond","B. Rectangle","C. Circle","D. Triangle"],
answer:"A. Diamond"
},

{
question:"25. A process in a flowchart is represented by:",
options:["A. Rectangle","B. Diamond","C. Oval","D. Arrow"],
answer:"A. Rectangle"
},

{
question:"26. Programming languages are used to:",
options:["A. Create computer programs","B. Repair hardware","C. Clean computers","D. Connect cables"],
answer:"A. Create computer programs"
},

{
question:"27. HTML is used for creating:",
options:["A. Web pages","B. Databases only","C. Operating systems","D. Games only"],
answer:"A. Web pages"
},

{
question:"28. CSS is used to:",
options:["A. Design web pages","B. Store data","C. Create viruses","D. Repair computers"],
answer:"A. Design web pages"
},

{
question:"29. JavaScript is used to add:",
options:["A. Interactivity to websites","B. Hardware","C. Electricity","D. Storage"],
answer:"A. Interactivity to websites"
},

{
question:"30. A computer network allows computers to:",
options:["A. Share resources and information","B. Become smaller","C. Stop working","D. Remove software"],
answer:"A. Share resources and information"
},

{
question:"31. WAN means:",
options:["A. Wide Area Network","B. Web Access Number","C. Wireless Area Node","D. Wide Application Network"],
answer:"A. Wide Area Network"
},

{
question:"32. The internet uses:",
options:["A. A collection of connected networks","B. One computer only","C. A printer","D. A keyboard"],
answer:"A. A collection of connected networks"
},

{
question:"33. A router is used to:",
options:["A. Connect networks","B. Print documents","C. Store files","D. Scan images"],
answer:"A. Connect networks"
},

{
question:"34. Cybercrime involves:",
options:["A. Illegal activities using computers","B. Computer repair","C. Programming lessons","D. Typing"],
answer:"A. Illegal activities using computers"
},

{
question:"35. Phishing is an attempt to:",
options:["A. Steal personal information","B. Speed up computers","C. Create websites","D. Repair viruses"],
answer:"A. Steal personal information"
},

{
question:"36. Data security protects:",
options:["A. Information from unauthorized access","B. Computer screens","C. Keyboards","D. Printers"],
answer:"A. Information from unauthorized access"
},

{
question:"37. Cloud computing provides:",
options:["A. Online storage and services","B. Only hardware","C. Electricity","D. Cables"],
answer:"A. Online storage and services"
},

{
question:"38. A backup is:",
options:["A. A copy of data","B. A deleted file","C. A virus","D. A password"],
answer:"A. A copy of data"
},

{
question:"39. Encryption is used to:",
options:["A. Protect data by changing it into secret form","B. Delete files","C. Print documents","D. Increase volume"],
answer:"A. Protect data by changing it into secret form"
},

{
question:"40. Artificial Intelligence allows computers to:",
options:["A. Perform tasks requiring human intelligence","B. Become human","C. Stop processing","D. Destroy data"],
answer:"A. Perform tasks requiring human intelligence"
},

{
question:"41. Robotics involves:",
options:["A. Designing and using robots","B. Writing books","C. Growing crops","D. Weather study"],
answer:"A. Designing and using robots"
},

{
question:"42. E-learning means:",
options:["A. Learning using electronic technologies","B. Learning without teachers","C. Learning only outdoors","D. Reading newspapers"],
answer:"A. Learning using electronic technologies"
},

{
question:"43. ICT is important because it improves:",
options:["A. Communication and access to information","B. Pollution","C. Computer damage","D. Data loss"],
answer:"A. Communication and access to information"
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