//================ QUESTIONS =================

const questions = [

{
question:"1. Which SI unit is used to measure force?",
options:["A. Joule","B. Newton","C. Pascal","D. Watt"],
answer:"B. Newton"
},

{
question:"2. What is the formula for speed?",
options:["A. Distance × Time","B. Distance ÷ Time","C. Time ÷ Distance","D. Mass × Acceleration"],
answer:"B. Distance ÷ Time"
},

{
question:"3. Which instrument measures temperature?",
options:["A. Thermometer","B. Barometer","C. Voltmeter","D. Ammeter"],
answer:"A. Thermometer"
},

{
question:"4. The SI unit of mass is:",
options:["A. Gram","B. Kilogram","C. Pound","D. Tonne"],
answer:"B. Kilogram"
},

{
question:"5. Which form of energy is stored in food?",
options:["A. Electrical","B. Chemical","C. Heat","D. Light"],
answer:"B. Chemical"
},

{
question:"6. Which force pulls objects towards the Earth?",
options:["A. Friction","B. Gravity","C. Magnetism","D. Tension"],
answer:"B. Gravity"
},

{
question:"7. Which instrument measures electric current?",
options:["A. Voltmeter","B. Ammeter","C. Thermometer","D. Stopwatch"],
answer:"B. Ammeter"
},

{
question:"8. Which state of matter has a fixed volume but no fixed shape?",
options:["A. Solid","B. Liquid","C. Gas","D. Plasma"],
answer:"B. Liquid"
},

{
question:"9. The SI unit of time is:",
options:["A. Hour","B. Minute","C. Second","D. Day"],
answer:"C. Second"
},

{
question:"10. Which colour of light has the longest wavelength?",
options:["A. Blue","B. Green","C. Red","D. Violet"],
answer:"C. Red"
},

{
question:"11. Speed is measured using:",
options:["A. Speedometer","B. Thermometer","C. Ammeter","D. Hygrometer"],
answer:"A. Speedometer"
},

{
question:"12. Which material is a good conductor of electricity?",
options:["A. Plastic","B. Wood","C. Copper","D. Rubber"],
answer:"C. Copper"
},

{
question:"13. The boiling point of pure water is:",
options:["A. 0°C","B. 50°C","C. 100°C","D. 200°C"],
answer:"C. 100°C"
},

{
question:"14. Which source of energy is renewable?",
options:["A. Coal","B. Petroleum","C. Solar","D. Natural Gas"],
answer:"C. Solar"
},

{
question:"15. The unit of electrical resistance is:",
options:["A. Volt","B. Ohm","C. Ampere","D. Watt"],
answer:"B. Ohm"
},

{
question:"16. Which planet is called the Red Planet?",
options:["A. Venus","B. Mars","C. Jupiter","D. Mercury"],
answer:"B. Mars"
},

{
question:"17. Which mirror forms an upright image?",
options:["A. Concave","B. Convex","C. Plane","D. Both B and C"],
answer:"D. Both B and C"
},

{
question:"18. Sound cannot travel through:",
options:["A. Air","B. Water","C. Vacuum","D. Steel"],
answer:"C. Vacuum"
},

{
question:"19. The SI unit of power is:",
options:["A. Joule","B. Newton","C. Watt","D. Pascal"],
answer:"C. Watt"
},

{
question:"20. Friction acts:",
options:["A. In the direction of motion","B. Opposite to motion","C. Upwards","D. Downwards"],
answer:"B. Opposite to motion"
},

{
question:"21. Which device converts electrical energy into light?",
options:["A. Battery","B. Bulb","C. Cell","D. Switch"],
answer:"B. Bulb"
},

{
question:"22. Which quantity is measured in volts?",
options:["A. Current","B. Resistance","C. Voltage","D. Power"],
answer:"C. Voltage"
},

{
question:"23. The Earth rotates on its:",
options:["A. Orbit","B. Axis","C. Pole","D. Equator"],
answer:"B. Axis"
},

{
question:"24. Which energy is possessed by a moving object?",
options:["A. Potential","B. Kinetic","C. Heat","D. Chemical"],
answer:"B. Kinetic"
},

{
question:"25. Which gas is needed for combustion?",
options:["A. Nitrogen","B. Carbon dioxide","C. Oxygen","D. Hydrogen"],
answer:"C. Oxygen"
},

{
question:"26. Which instrument measures atmospheric pressure?",
options:["A. Thermometer","B. Barometer","C. Hygrometer","D. Ammeter"],
answer:"B. Barometer"
},

{
question:"27. The SI unit of energy is:",
options:["A. Watt","B. Joule","C. Newton","D. Volt"],
answer:"B. Joule"
},

{
question:"28. Which colour is at one end of the visible spectrum?",
options:["A. Green","B. Yellow","C. Violet","D. Orange"],
answer:"C. Violet"
},

{
question:"29. Which property makes magnets attract iron?",
options:["A. Heat","B. Magnetism","C. Electricity","D. Gravity"],
answer:"B. Magnetism"
},

{
question:"30. Which simple machine is used to lift a flag?",
options:["A. Lever","B. Pulley","C. Wheel","D. Inclined Plane"],
answer:"B. Pulley"
},

{
question:"31. Which state of matter has no fixed shape and no fixed volume?",
options:["A. Solid","B. Liquid","C. Gas","D. Ice"],
answer:"C. Gas"
},

{
question:"32. Which energy is stored in a stretched rubber band?",
options:["A. Kinetic","B. Elastic Potential","C. Heat","D. Sound"],
answer:"B. Elastic Potential"
},

{
question:"33. Light travels fastest in:",
options:["A. Water","B. Glass","C. Vacuum","D. Air"],
answer:"C. Vacuum"
},

{
question:"34. Which instrument measures voltage?",
options:["A. Voltmeter","B. Ammeter","C. Barometer","D. Stopwatch"],
answer:"A. Voltmeter"
},

{
question:"35. Which part of an electric circuit controls the flow of current?",
options:["A. Battery","B. Bulb","C. Switch","D. Wire"],
answer:"C. Switch"
},

{
question:"36. The force that opposes motion between surfaces is:",
options:["A. Gravity","B. Friction","C. Tension","D. Upthrust"],
answer:"B. Friction"
},

{
question:"37. Which type of lens is thicker at the centre?",
options:["A. Concave","B. Convex","C. Cylindrical","D. Plane"],
answer:"B. Convex"
},

{
question:"38. Which object is attracted by a magnet?",
options:["A. Plastic","B. Wood","C. Iron Nail","D. Glass"],
answer:"C. Iron Nail"
},

{
question:"39. Which energy transformation occurs in an electric iron?",
options:["A. Heat to Electrical","B. Electrical to Heat","C. Heat to Light","D. Mechanical to Electrical"],
answer:"B. Electrical to Heat"
},

{
question:"40. Which wave is used for communication?",
options:["A. Radio Wave","B. Water Wave","C. Sound Wave","D. Seismic Wave"],
answer:"A. Radio Wave"
},

{
question:"41. Which celestial body gives us light during the day?",
options:["A. Moon","B. Mars","C. Sun","D. Venus"],
answer:"C. Sun"
},

{
question:"42. What is the SI unit of length?",
options:["A. Kilogram","B. Metre","C. Litre","D. Second"],
answer:"B. Metre"
},

{
question:"43. Which instrument is used to measure length accurately?",
options:["A. Metre Rule","B. Thermometer","C. Balance","D. Stopwatch"],
answer:"A. Metre Rule"
}

];


//================ VARIABLES =================

let current = 0;
let score = 0;
let answered = false;


const question = document.getElementById("question");
const answers = document.getElementById("answers");
const scoreText = document.getElementById("score");
const counter = document.getElementById("counter");
const nextBtn = document.getElementById("nextBtn");


//================ LOAD QUESTION =================

function loadQuestion(){

    answered = false;

    nextBtn.disabled = true;

    counter.innerHTML =
    `Question ${current + 1} / ${questions.length}`;


    let q = questions[current];


    question.innerHTML = q.question;


    answers.innerHTML="";


    q.options.forEach(option=>{


        let btn=document.createElement("button");


        btn.className="option";


        btn.innerHTML=option;


        btn.onclick=function(){

            checkAnswer(btn,option);

        };


        answers.appendChild(btn);


    });

}



//================ CHECK ANSWER =================


function checkAnswer(button,selected){


    if(answered) return;


    answered=true;


    let correct = questions[current].answer;


    let buttons=document.querySelectorAll(".option");


    buttons.forEach(btn=>{

        btn.disabled=true;

    });



    if(selected === correct){


        score++;


        button.classList.add("correct");


        fireworks();


    }


    else{


        button.classList.add("wrong");


        buttons.forEach(btn=>{


            if(btn.innerHTML === correct){

                btn.classList.add("correct");

            }


        });


    }



    scoreText.innerHTML =
    "Score : " + score;


    nextBtn.disabled=false;


}




//================ NEXT QUESTION =================


function nextQuestion(){


    if(!answered){

        return;

    }



    current++;



    if(current >= questions.length){


        alert(
        "🎉 Quiz Finished!\n\nYour Score: "
        +score+
        "/"+
        questions.length
        );


        current=0;

        score=0;


        scoreText.innerHTML="Score : 0";


    }



    loadQuestion();


}





//================ FIREWORKS =================


const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");



function resizeCanvas(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}


resizeCanvas();


window.addEventListener(
"resize",
resizeCanvas
);



let particles=[];



class Particle{


constructor(x,y){


this.x=x;

this.y=y;


this.size=Math.random()*4+2;


this.speedX=(Math.random()-0.5)*8;


this.speedY=(Math.random()-0.5)*8;


this.life=100;


this.color=
`hsl(${Math.random()*360},100%,50%)`;


}



update(){


this.x+=this.speedX;


this.y+=this.speedY;


this.life--;


}



draw(){


ctx.beginPath();


ctx.arc(
this.x,
this.y,
this.size,
0,
Math.PI*2
);


ctx.fillStyle=this.color;


ctx.fill();


}



}



function fireworks(){


let x=Math.random()*canvas.width;


let y=Math.random()*canvas.height/2;



for(let i=0;i<70;i++){


particles.push(
new Particle(x,y)
);


}



}



function animate(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.forEach((p,index)=>{


p.update();


p.draw();



if(p.life<=0){

particles.splice(index,1);

}



});



requestAnimationFrame(animate);


}



animate();




//================ START QUIZ =================


loadQuestion();