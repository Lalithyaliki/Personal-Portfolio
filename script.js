
// toggle nav-links

function togglemenu() {
    document.querySelector('.nav-links').classList.toggle('active');
};

function onhover() {
    document.querySelector('.nav-links').classList.remove('active');
};

// button scrolling function

let but = document.getElementById("button");
but.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        but.style.display = "block";
    }
    else {
        but.style.display = "none";
    }
});

// working of chat box (opening and closing)

let icon = document.getElementById("icon-1");
let chatbox = document.getElementById("chat");
let closebox = document.getElementById("close-chat")

icon.addEventListener("click", function () {
    chatbox.classList.add("open");
    but.classList.add("hide");
});
closebox.addEventListener("click", function () {
    chatbox.classList.remove("open");
    but.classList.remove("hide");
});

// getting details of person from the chat box

let email = document.getElementById("email");
let popupmessage = document.getElementById("pop-msg")

document.getElementById("pop").addEventListener("click", function () {

    if (email.value.trim() != '') {
        popupmessage.innerHTML =`your details are accessed successfully ${email.value}.`;

        popupmessage.classList.add("success");

        setTimeout(() => {
            popupmessage.classList.remove('success');
        }, 3000);

        document.getElementById("chat").classList.remove("open");
    }
    else {
        popupmessage.innerHTML="enter valid email";
        popupmessage.classList.add("success");
    
        setTimeout(() => {
            popupmessage.classList.remove("success");
        }, 3000);
    }

});











