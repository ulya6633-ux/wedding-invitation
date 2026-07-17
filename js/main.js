const musicButton = document.getElementById("musicButton");

const bgMusic = document.getElementById("bgMusic");

const glassSound = document.getElementById("glassSound");

const musicImg = musicButton.querySelector("img");

glassSound.volume = 0.2;

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    // звук стекла
    glassSound.pause();
    glassSound.currentTime = 0;
    glassSound.play();

    if (!musicPlaying) {

        bgMusic.play();

        musicPlaying = true;

        musicButton.style.animation = "none";

        musicImg.src = "img/icons/music-button.png";

    } else {

        bgMusic.pause();

        musicPlaying = false;

        musicButton.style.animation = "musicPulse 2.4s ease-in-out infinite";

        musicImg.src = "img/icons/music-button-off.png";

    }

});

// =========================
// SAVE THE DATE COUNTER
// =========================


const weddingDate = new Date("2026-09-11T17:00:00");


function updateCounter(){

    const now = new Date();

    const difference = weddingDate - now;


    if(difference <= 0){
        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    const numbers = document.querySelectorAll(".counter b");


    numbers[0].textContent = days;
    numbers[1].textContent = hours;
    numbers[2].textContent = minutes;
    numbers[3].textContent = seconds;

}


updateCounter();

setInterval(updateCounter,1000);


// =========================
// MAP ROUTE BUTTON
// =========================

const routeButton = document.getElementById("routeButton");


if(routeButton){

    routeButton.addEventListener("click", function(){

        if(glassSound){

            glassSound.currentTime = 0;
            glassSound.play();

        }


        window.open(
            "https://yandex.ru/maps/?mode=routes&rtext=~45.062210,38.989947&rtt=auto",
            "_blank"
        );

    });

}



// =========================
// SCREEN 5 ANIMATION
// =========================


const screen5 = document.querySelector(".screen5");


if(screen5){

const colors = screen5.querySelectorAll(
".screen5-color1, .screen5-color2, .screen5-color3, .screen5-color4, .screen5-color5, .screen5-color6"
);


const observer5 = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


colors.forEach((item,index)=>{


item.classList.add("show");


});


observer5.disconnect();


}


});


},


{
threshold:0.5
});


observer5.observe(screen5);


}
window.addEventListener("scroll", ()=>{

    const screen5 = document.querySelector(".screen5");

    const colors = document.querySelectorAll(
        ".screen5-color1, .screen5-color2, .screen5-color3, .screen5-color4, .screen5-color5, .screen5-color6"
    );


    if(screen5){

        const pos = screen5.getBoundingClientRect().top;


        if(pos < window.innerHeight * 0.7){

            colors.forEach((item,index)=>{

                setTimeout(()=>{

                    item.classList.add("show");

                }, index*200);

            });

        }

    }

});







/// звук только кнопки отправить

const sendButton = document.getElementById("sendButton");
const glassSendSound = document.getElementById("glassSendSound");

if (sendButton && glassSendSound) {

    sendButton.addEventListener("click", () => {

        glassSendSound.currentTime = 0;
        glassSendSound.play();

    });

}


// RSVP отправка в Google таблицу

const rsvpButton = document.getElementById("sendButton");


if(rsvpButton){

    rsvpButton.addEventListener("click", ()=>{


        const name = document.getElementById("guestName").value;

        const comment = document.getElementById("guestComment").value;


        const activeRadio = document.querySelector(".radio.active");


        const answer = activeRadio
            ? activeRadio.dataset.answer
            : "Ответ не выбран";


        fetch("https://script.google.com/macros/s/AKfycbz36PxL9penTAazesX8gZWrLXF7xP9MlunE9d21_7AVYPOYc8XExS7tcakdP3T0QH_e/exec",
        {

            method: "POST",

            body: JSON.stringify({

                name: name,

                answer: answer,

                comment: comment

            })

        })

        .then(() => {

    alert("Спасибо! Ваш ответ отправлен")
})
.catch(() => {

    alert("Спасибо! Ваш ответ отправлен")

});


    });

}


// переключение вариантов ответа RSVP

const radios = document.querySelectorAll(".radio");


radios.forEach(radio => {

    radio.addEventListener("click", ()=>{


        radios.forEach(item=>{

            item.classList.remove("active");

            const circle = item.querySelector(".circle");

            if(circle){
                circle.classList.remove("active");
            }

        });



        radio.classList.add("active");

        const circle = radio.querySelector(".circle");

        if(circle){
            circle.classList.add("active");
        }


    });

});




// КОНТАКТЫ

const contactsButton = document.getElementById("contactsButton");
const contactsPopup = document.getElementById("contactsPopup");
const contactsClose = document.getElementById("contactsClose");

if (contactsButton && contactsPopup) {

    contactsButton.onclick = () => {

        // звук стекла
        glassSound.currentTime = 0;
        glassSound.play();

        // открыть окно
        contactsPopup.classList.add("show");

    };

}

if (contactsClose) {

    contactsClose.onclick = () => {
        contactsPopup.classList.remove("show");
    };

}

if (contactsPopup) {

    contactsPopup.onclick = (e) => {

        if (e.target === contactsPopup) {
            contactsPopup.classList.remove("show");
        }

    };

}







// =========================
// SOFT FADE ELEMENTS
// =========================

const fadeElements = document.querySelectorAll(".fade-in");


const fadeObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.25
});


fadeElements.forEach(item=>{
    fadeObserver.observe(item);
});