const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let particles = [];


for(let i = 0; i < 120; i++){

    particles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        size: Math.random() * 3 + 1,

        speedX: (Math.random() - 0.5) * 0.7,

        speedY: (Math.random() - 0.5) * 0.7

    });

}



function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    particles.forEach(p=>{


        p.x += p.speedX;
        p.y += p.speedY;


        if(p.x < 0 || p.x > canvas.width){
            p.speedX *= -1;
        }


        if(p.y < 0 || p.y > canvas.height){
            p.speedY *= -1;
        }



        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle="#00eaff";

        ctx.shadowBlur=15;

        ctx.shadowColor="#00eaff";

        ctx.fill();


    });



    connect();


    requestAnimationFrame(animate);

}




function connect(){

    for(let a=0; a<particles.length; a++){

        for(let b=a; b<particles.length; b++){


            let dx = particles[a].x - particles[b].x;

            let dy = particles[a].y - particles[b].y;


            let distance = Math.sqrt(dx*dx + dy*dy);



            if(distance < 120){


                ctx.beginPath();


                ctx.strokeStyle =
                "rgba(0,234,255,"+(1-distance/120)+")";


                ctx.lineWidth = 0.5;


                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );


                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );


                ctx.stroke();

            }

        }

    }

}




animate();



window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});