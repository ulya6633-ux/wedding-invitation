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

        rsvpButton.style.pointerEvents = "none";
        rsvpButton.style.opacity = "0.5";


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

    alert("Спасибо, что разделите с нами этот особенный день 🤍\n\nИлья & Анна")
})
.catch(() => {

    alert("Спасибо, что разделите с нами этот особенный день 🤍\n\nИлья & Анна")

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









const s1pearl1 = document.querySelector('.screen1-pearl1');
const s1pearl2 = document.querySelector('.screen1-pearl2');
const s1pearl3 = document.querySelector('.screen1-pearl3');


if(screen1){

window.addEventListener('scroll',()=>{

let rect = screen1.getBoundingClientRect();

let move = Math.max(0, -rect.top);


if(s1pearl1){

s1pearl1.style.transform =
`
translate(${move*0.18}px, ${move}px)
rotate(${move*1}deg)
`;

}


if(s1pearl2){

s1pearl2.style.transform =
`
translate(${-move*0.38}px, ${move*1.2}px)
rotate(${-move*1}deg)
`;

}


if(s1pearl3){

s1pearl3.style.transform =
`
translate(${move*0.5}px, ${move*0.8}px)
rotate(${move*2}deg)
`;

}


});

}








const pearl1 = document.querySelector('.screen3-pearl1');
const pearl2 = document.querySelector('.screen3-pearl2');
const pearl3 = document.querySelector('.screen3-pearl3');
const glass = document.querySelector('.screen3-glass');


window.addEventListener('scroll', () => {

    const screen3 = document.querySelector('.screen3');
    const rect = screen3.getBoundingClientRect();

    let move = Math.max(0, -rect.top);


    pearl1.style.transform = `
        translate(${move * 0.18}px, ${move*1.2}px)
        rotate(${move * 2}deg)
    `;


    pearl2.style.transform = `
        translate(${move * 0.37}px, ${move * 1.4}px)
        rotate(${-move * 2}deg)
    `;


    pearl3.style.transform = `
        translate(${move * 0.5}px, ${move}px)
        rotate(${move * 2}deg)
    `;


    glass.style.transform = `
        translateY(${move * 0.5}px)
        rotate(${move * 2}deg)
    `;

});



// ==========================
// SCREEN 2 PEARLS
// только скролл
// ==========================

const screen2 = document.querySelector('.second');

const screen2Pearl1 = document.querySelector('.screen2-pearl1');
const screen2Pearl2 = document.querySelector('.screen2-pearl2');
const screen2Pearl3 = document.querySelector('.screen2-pearl3');


if(screen2){


window.addEventListener('scroll',()=>{


const rect = screen2.getBoundingClientRect();


let move = Math.max(0, -rect.top);



if(screen2Pearl1){

screen2Pearl1.style.transform =
`
translate(${move*0.15}px, ${move}px)
rotate(${move*1}deg)
`;

}



if(screen2Pearl2){

screen2Pearl2.style.transform =
`
translate(${-move*0.12}px, ${move*1.2}px)
rotate(${-move*5}deg)
`;

}



if(screen2Pearl3){

screen2Pearl3.style.transform =
`
translate(${move*0.3}px, ${move*0.8}px)
rotate(${move*3}deg)
`;

}



});


}






// ==========================
// SCREEN 6 PEARL
// медленно укатывается влево
// ==========================

const screen6 = document.querySelector('.screen6');
const screen6Pearl = document.querySelector('.screen6-pearl');


if(screen6 && screen6Pearl){

window.addEventListener('scroll',()=>{


const rect = screen6.getBoundingClientRect();


let move = Math.max(0, -rect.top);


// ограничиваем движение
let roll = Math.max(0, Math.min(move - 350, 250));



screen6Pearl.style.transform =
`
translateX(${-roll * 0.5}px)
rotate(${roll * 3}deg)
`;



});


}




// ==========================
// SCREEN 7 PEARL
// медленно вправо + вниз
// ==========================

const screen7 = document.querySelector('.screen7');
const screen7Pearl = document.querySelector('.screen7-pearl');


if(screen7 && screen7Pearl){

window.addEventListener('scroll',()=>{


const rect = screen7.getBoundingClientRect();


let move = Math.max(0, -rect.top);


// задержка старта
let roll = Math.max(0, move - 300);



screen7Pearl.style.transform =
`
translate(${roll * 0.85}px, ${roll * 0.25}px)
rotate(${roll * 2}deg)
`;



});

}


// ==========================
// SCREEN 8 PEARLS
// как первый слайд
// ==========================

const s8pearl1 = document.querySelector('.screen8-pearl1');
const s8pearl2 = document.querySelector('.screen8-pearl2');
const s8pearl3 = document.querySelector('.screen8-pearl3');


const screen8 = document.querySelector('.screen8');


if(screen8){

window.addEventListener('scroll',()=>{


let rect = screen8.getBoundingClientRect();

let move = Math.max(0, -rect.top);



if(s8pearl1){

s8pearl1.style.transform =
`
translate(${move*1.8}px, ${move}px)
rotate(${move*1}deg)
`;

}



if(s8pearl2){

s8pearl2.style.transform =
`
translate(${move*1.2}px, ${move*1}px)
rotate(${-move*3}deg)
`;

}



if(s8pearl3){

s8pearl3.style.transform =
`
translate(${move*1}px, ${move*0.9}px)
rotate(${move*1}deg)
`;

}



});


}