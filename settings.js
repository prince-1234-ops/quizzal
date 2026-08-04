window.addEventListener("load", ()=>{


    const loader =
    document.getElementById("appLoader");



    if(loader){


        setTimeout(()=>{


            loader.style.opacity="0";



            setTimeout(()=>{


                loader.style.display="none";


            },500);



        },800);



    }



});









// ================================
// SETTINGS SECTIONS
// ================================


const navItems =
document.querySelectorAll(".nav-item");



const sections =
document.querySelectorAll(".settings-section");





function openSection(sectionID){



    sections.forEach(section=>{


        section.classList.remove("active");


    });



    const target =
    document.getElementById(sectionID);



    if(target){


        target.classList.add("active");


    }





    navItems.forEach(item=>{


        item.classList.remove("active");


        if(item.dataset.section === sectionID){


            item.classList.add("active");


        }



    });



}








// Sidebar buttons


navItems.forEach(item=>{



    item.addEventListener("click",()=>{



        const section =
        item.dataset.section;



        openSection(section);



    });



});









// ================================
// MOBILE SIDEBAR
// ================================


const mobileMenuBtn =
document.getElementById("mobileMenuBtn");



const sidebar =
document.getElementById("settingsSidebar");





if(mobileMenuBtn){



    mobileMenuBtn.addEventListener("click",()=>{


        sidebar.classList.toggle("open");


    });



}







// close sidebar after choosing section on mobile


navItems.forEach(item=>{


    item.addEventListener("click",()=>{


        if(window.innerWidth <= 850){


            sidebar.classList.remove("open");


        }



    });



});








// ================================
// CLOSE SIDEBAR WHEN CLICK OUTSIDE
// ================================


document.addEventListener("click",(e)=>{



    if(

        window.innerWidth <= 850 &&

        sidebar.classList.contains("open") &&

        !sidebar.contains(e.target) &&

        !mobileMenuBtn.contains(e.target)

    ){



        sidebar.classList.remove("open");


    }



});





// ================================
// PROFILE ELEMENTS
// ================================


const usernameInput =
document.getElementById("usernameInput");


const emailInput =
document.getElementById("emailInput");


const phoneInput =
document.getElementById("phoneInput");


const countryInput =
document.getElementById("countryInput");



const profileName =
document.getElementById("profileName");


const profileEmail =
document.getElementById("profileEmail");


const headerUsername =
document.getElementById("headerUsername");



const profileAvatar =
document.getElementById("profileAvatar");







// ================================
// LOAD USER DATA
// ================================


function loadProfile(){



    const username =
    localStorage.getItem("username")
    || "Frank Bagiraneza";



    const email =
    localStorage.getItem("email")
    || "student@quizzal.com";



    const phone =
    localStorage.getItem("phone")
    || "";



    const country =
    localStorage.getItem("country")
    || "Rwanda";





    if(usernameInput)
    usernameInput.value=username;



    if(emailInput)
    emailInput.value=email;



    if(phoneInput)
    phoneInput.value=phone;



    if(countryInput)
    countryInput.value=country;





    if(profileName)
    profileName.textContent=username;



    if(profileEmail)
    profileEmail.textContent=email;



    if(headerUsername)
    headerUsername.textContent=
    username.split(" ")[0];




    loadAvatar();



}







loadProfile();









// ================================
// SAVE PROFILE
// ================================


function saveProfile(){



    if(usernameInput){


        localStorage.setItem(
            "username",
            usernameInput.value
        );


    }





    if(emailInput){


        localStorage.setItem(
            "email",
            emailInput.value
        );


    }






    if(phoneInput){


        localStorage.setItem(
            "phone",
            phoneInput.value
        );


    }





    if(countryInput){


        localStorage.setItem(
            "country",
            countryInput.value
        );


    }





    loadProfile();



    showToast(
    "Profile updated successfully"
    );



}








// Auto save when leaving input


[
usernameInput,
emailInput,
phoneInput

].forEach(input=>{


    if(input){


        input.addEventListener(
        "change",
        saveProfile
        );


    }



});









// ================================
// ACCOUNT ID
// ================================


const accountID =
document.getElementById("accountId");



if(accountID){


    let id =
    localStorage.getItem(
    "accountID"
    );



    if(!id){


        id =
        "QZ-" +
        Math.floor(
        100000 +
        Math.random()*900000
        );



        localStorage.setItem(
        "accountID",
        id
        );


    }



    accountID.textContent=id;


}









// ================================
// AVATAR UPLOAD
// ================================


const avatarButton =
document.getElementById("avatarUploadBtn");


const avatarInput =
document.getElementById("avatarInput");





if(avatarButton){


    avatarButton.onclick=()=>{


        avatarInput.click();


    };


}







if(avatarInput){



    avatarInput.addEventListener(
    "change",
    ()=>{


        const file =
        avatarInput.files[0];



        if(file){



            const reader =
            new FileReader();



            reader.onload=function(e){



                profileAvatar.style.backgroundImage =
                `url(${e.target.result})`;



                profileAvatar.style.backgroundSize =
                "cover";



                profileAvatar.textContent="";



                localStorage.setItem(
                "avatar",
                e.target.result
                );



            };



            reader.readAsDataURL(file);



        }



    });



}









function loadAvatar(){



    const avatar =
    localStorage.getItem("avatar");



    if(
    avatar &&
    profileAvatar
    ){


        profileAvatar.style.backgroundImage =
        `url(${avatar})`;


        profileAvatar.style.backgroundSize =
        "cover";


        profileAvatar.textContent="";


    }



}




// ================================
// TOAST SYSTEM
// ================================


const toast =
document.getElementById("toast");


const toastMessage =
document.getElementById("toastMessage");



let toastTimer;





function showToast(message){



    if(!toast) return;



    toastMessage.textContent =
    message;



    toast.classList.add("active");



    clearTimeout(toastTimer);



    toastTimer =
    setTimeout(()=>{


        toast.classList.remove("active");


    },3000);



}









// ================================
// MODAL SYSTEM
// ================================


const modalOverlay =
document.getElementById("modalOverlay");


const modalContent =
document.getElementById("modalContent");


const closeModal =
document.getElementById("closeModal");







function openModal(content){



    if(!modalOverlay)
    return;



    modalContent.innerHTML =
    content;



    modalOverlay.classList.add(
    "active"
    );



}









function hideModal(){



    if(modalOverlay){


        modalOverlay.classList.remove(
        "active"
        );


    }



}






if(closeModal){


    closeModal.onclick =
    hideModal;


}






if(modalOverlay){



    modalOverlay.addEventListener(
    "click",
    (e)=>{



        if(
        e.target === modalOverlay
        ){


            hideModal();


        }



    });



}









// ================================
// CHANGE PASSWORD MODAL
// ================================



const passwordButton =
document.querySelector(
".primary-action"
);





if(passwordButton){



passwordButton.addEventListener(
"click",
()=>{


openModal(`


<h2>
Change Password
</h2>


<p>
Enter your new password below.
</p>



<div class="input-group">

<label>
New Password
</label>

<input 
type="password"
id="newPassword"
placeholder="New password">

</div>



<div class="modal-actions">


<button 
class="modal-cancel"
onclick="hideModal()">

Cancel

</button>


<button 
class="modal-confirm"
onclick="changePassword()">

Save

</button>


</div>


`);



});



}








function changePassword(){



const password =
document.getElementById(
"newPassword"
);



if(password.value.length < 6){


showToast(
"Password must be 6 characters"
);


return;


}




localStorage.setItem(
"password",
password.value
);



hideModal();



showToast(
"Password changed"
);



}









// make modal functions global

window.hideModal =
hideModal;


window.changePassword =
changePassword;
const animationToggle = document.getElementById("animationToggle");


// Load saved animation setting
const animationsEnabled =
localStorage.getItem("animations") !== "false";


if(animationToggle){

    animationToggle.checked = animationsEnabled;


    if(!animationsEnabled){
        document.body.classList.add("no-animation");
    }


    animationToggle.addEventListener("change", ()=>{


        if(animationToggle.checked){


            localStorage.setItem(
                "animations",
                "true"
            );


            document.body.classList.remove(
                "no-animation"
            );


            showToast(
                "Animations enabled"
            );


        }else{


            localStorage.setItem(
                "animations",
                "false"
            );


            document.body.classList.add(
                "no-animation"
            );


            showToast(
                "Animations disabled"
            );


        }


    });


}
const darkModeToggle =
document.getElementById("darkModeToggle");


// Load saved theme

const darkMode =
localStorage.getItem("darkMode") !== "false";


if(darkModeToggle){


    darkModeToggle.checked = darkMode;



    if(!darkMode){

        document.body.classList.add("light-mode");

    }



    darkModeToggle.addEventListener("change",()=>{


        if(darkModeToggle.checked){


            localStorage.setItem(
                "darkMode",
                "true"
            );


            document.body.classList.remove(
                "light-mode"
            );


            showToast(
                "Dark mode enabled"
            );



        }else{


            localStorage.setItem(
                "darkMode",
                "false"
            );


            document.body.classList.add(
                "light-mode"
            );


            showToast(
                "Light mode enabled"
            );


        }


    });


}
const glassToggle =
document.getElementById("glassToggle");


// Load saved glass setting

const glassEnabled =
localStorage.getItem("glassEffect") !== "false";


if(glassToggle){


    glassToggle.checked = glassEnabled;



    if(!glassEnabled){

        document.body.classList.add(
            "no-glass"
        );

    }





    glassToggle.addEventListener("change",()=>{


        if(glassToggle.checked){


            localStorage.setItem(
                "glassEffect",
                "true"
            );


            document.body.classList.remove(
                "no-glass"
            );


            showToast(
                "Glass effects enabled"
            );



        }else{


            localStorage.setItem(
                "glassEffect",
                "false"
            );


            document.body.classList.add(
                "no-glass"
            );


            showToast(
                "Glass effects disabled"
            );


        }



    });


}

// AUTO SAVE SETTINGS


const settingInputs =
document.querySelectorAll(
".settings-section input:not([type='file']), .settings-section select"
);



function saveSettings(){


    settingInputs.forEach(input=>{


        if(input.type === "checkbox"){


            localStorage.setItem(
                input.id,
                input.checked
            );


        }
        else{


            localStorage.setItem(
                input.id,
                input.value
            );


        }


    });



}





function loadSettings(){



    settingInputs.forEach(input=>{


        const saved =
        localStorage.getItem(input.id);



        if(saved !== null){


            if(input.type === "checkbox"){


                input.checked =
                saved === "true";


            }
            else{


                input.value =
                saved;


            }


        }



    });



}





// Save whenever something changes

settingInputs.forEach(input=>{


    input.addEventListener(
    "change",
    ()=>{


        saveSettings();


        showToast(
        "Settings saved"
        );


    });


});





// Load when page starts

loadSettings();
// =======================================
// DASHBOARD + PROFILE CONNECTION
// =======================================


// Load dashboard data into settings


function loadDashboardData(){


    const xp =
    localStorage.getItem("totalXP") || 0;


    const score =
    localStorage.getItem("totalScore") || 0;


    const quizzes =
    localStorage.getItem("completedQuizzes") || 0;


    const streak =
    localStorage.getItem("streak") || 0;



    const xpText =
    document.getElementById("settingsXP");


    const streakText =
    document.getElementById("settingsStreak");


    const quizText =
    document.getElementById("settingsQuizzes");




    if(xpText)
    xpText.textContent = xp;



    if(streakText)
    streakText.textContent = streak;



    if(quizText)
    quizText.textContent = quizzes;



}





loadDashboardData();


const exitSettings =
document.getElementById("exitSettings");


if(exitSettings){


    exitSettings.addEventListener("click",()=>{


        const returnPage =
        localStorage.getItem("settingsReturn");


        if(returnPage){

            window.location.href =
            returnPage;

        }
        else{

            window.location.href =
            "dashboard.html";

        }


    });


}


