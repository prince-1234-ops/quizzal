
// SECTION SWITCHING

function showSection(sectionName){

    let sections = document.querySelectorAll(".section");

    sections.forEach(section=>{

        section.classList.add("hidden");

    });


    document.getElementById(sectionName)
    .classList.remove("hidden");



    let buttons = document.querySelectorAll(".menu-btn");


    buttons.forEach(btn=>{

        btn.classList.remove("active");

    });


    event.target.classList.add("active");

}







// USER DATA

const username =
document.getElementById("username");


const email =
document.getElementById("email");


const displayName =
document.getElementById("displayName");






window.onload=function(){


    username.value =
    localStorage.getItem("username") || "Frank";


    email.value =
    localStorage.getItem("email") || "";



    displayName.textContent =
    username.value;



    document.getElementById("darkMode").checked =
    localStorage.getItem("darkMode") === "true";

};







// SAVE SETTINGS

document.getElementById("saveBtn").onclick=function(){

    localStorage.setItem(
        "username",
        username.value
    );


    localStorage.setItem(
        "email",
        email.value
    );


    // update current user everywhere
    localStorage.setItem(
        "currentUser",
        username.value
    );


    displayName.textContent =
    username.value;


    alert("Profile updated successfully!");

};








// DARK MODE


document.getElementById("darkMode")
.onchange=function(){


    if(this.checked){


        document.body.style.background =
        "#050816";


        document.body.style.color =
        "white";


    }

    else{


        document.body.style.background =
        "#f5f5f5";


        document.body.style.color =
        "#111";


    }


};









// RESET PROGRESS


const resetButton =
document.querySelector(".danger");



resetButton.onclick=function(){


    let confirmReset =
    confirm(
    "Are you sure you want to delete your progress?"
    );



    if(confirmReset){


        localStorage.removeItem("totalXP");

        localStorage.removeItem("totalScore");

        localStorage.removeItem("completedQuizzes");



        alert(
        "Progress reset successfully"
        );


    }


};










// LOGOUT


const logoutButton =
document.querySelector(".logout");



logoutButton.onclick=function(){


    localStorage.removeItem("currentUser");


    alert(
    "Logged out"
    );


    window.location.href="index.html";


};
