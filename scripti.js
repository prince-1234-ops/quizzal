const container = document.querySelector(".container");


function register(){

    container.classList.add("active");

}


function login(){

    container.classList.remove("active");

}

/* ==========================
   MOUSE GLOW
========================== */

const glow = document.querySelector(".mouse-glow");


document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});



/* ==========================
   PARTICLES
========================== */


const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let particles=[];


class Particle{

    constructor(){

        this.x=Math.random()*canvas.width;

        this.y=Math.random()*canvas.height;

        this.size=Math.random()*3;

        this.speedX=(Math.random()-.5)*1;

        this.speedY=(Math.random()-.5)*1;

    }


    update(){

        this.x+=this.speedX;

        this.y+=this.speedY;


        if(this.x<0 || this.x>canvas.width)
            this.speedX*=-1;


        if(this.y<0 || this.y>canvas.height)
            this.speedY*=-1;

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


        ctx.fillStyle="#00eaff";

        ctx.fill();

    }

}



function createParticles(){

    for(let i=0;i<100;i++){

        particles.push(new Particle());

    }

}


function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(p=>{

        p.update();

        p.draw();

    });


    requestAnimationFrame(animate);

}


createParticles();

animate();



window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

});