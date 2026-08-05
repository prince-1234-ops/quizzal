// Quizzal Main Script


// Form switching

const loginForm = document.getElementById("loginForm");

const registerForm = document.getElementById("registerForm");

const showRegister = document.getElementById("showRegister");

const showLogin = document.getElementById("showLogin");



showRegister.onclick = () => {

    loginForm.style.display = "none";

    registerForm.style.display = "flex";

};



showLogin.onclick = () => {

    registerForm.style.display = "none";

    loginForm.style.display = "flex";

};



// Password visibility

const passwordButtons = document.querySelectorAll(".password-toggle");


passwordButtons.forEach(button => {


    button.onclick = () => {


        const input = button.parentElement.querySelector("input");


        if(input.type === "password"){

            input.type = "text";

            button.classList.replace(
                "bx-show",
                "bx-hide"
            );

        }else{

            input.type = "password";

            button.classList.replace(
                "bx-hide",
                "bx-show"
            );

        }


    };


});

// Remove loading screen

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },500);

        },1000);

    }

});
// User storage

function getUsers(){

    return JSON.parse(
        localStorage.getItem("users")
    ) || {};

}


function saveUsers(users){

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}





// Register system

registerForm.addEventListener("submit", function(e){

    e.preventDefault();



    const username =
    document.getElementById(
        "registerUsername"
    ).value.trim();



    const email =
    document.getElementById(
        "registerEmail"
    ).value.trim();



    const password =
    document.getElementById(
        "registerPassword"
    ).value;



    let users = getUsers();




    if(users[email]){

        alert("Account already exists");

        return;

    }





    users[email] = {


        username: username,

        email: email,

        password: password,

        avatar:"",

        totalXP:0,

        totalScore:0,

        completedQuizzes:0,

        streak:0,

        achievements:[],

        settings:{}


    };





    saveUsers(users);



    localStorage.setItem(
        "currentUser",
        email
    );



    window.location.href =
    "dashboard.html";

});



// Login system

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value.trim();


    const password =
    document.getElementById("password").value;


    let users = getUsers();


    if(!users[email]){

        alert("Account not found. Please register.");

        return;

    }


    if(users[email].password !== password){

        alert("Wrong password.");

        return;

    }


    localStorage.setItem(
        "currentUser",
        email
    );


    window.location.href =
    "dashboard.html";


});