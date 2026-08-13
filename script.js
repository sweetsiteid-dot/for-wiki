/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 800);

    }, 1200);

});


/* =========================
   PIN SYSTEM
========================= */

const unlockBtn = document.getElementById("unlockBtn");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");

const pinScreen = document.getElementById("pinScreen");
const website = document.getElementById("website");

unlockBtn.addEventListener("click", () => {

    if(pinInput.value === "3107"){

        pinScreen.style.display = "none";
        website.style.display = "block";

        pinError.innerText = "";

    }else{

        pinError.innerText = "Wrong PIN 💔";

        pinInput.value = "";

        pinInput.focus();

    }

});


/* =========================
   OPEN BOOK
========================= */

const openBookBtn =
document.getElementById("openBookBtn");

openBookBtn.addEventListener("click", () => {

    const music =
        document.getElementById("bgMusic");

    music.play().catch(() => {
        console.log("Music requires user interaction.");
    });

    document
    .getElementById("scrapbook")
    .scrollIntoView({
        behavior:"smooth"
    });

});


/* =========================
   LETTER OPEN
========================= */

const openLetter =
document.getElementById("openLetter");

const letterPaper =
document.getElementById("letterPaper");

openLetter.addEventListener("click", () => {

    if(letterPaper.style.display === "block"){

        letterPaper.style.display = "none";

    }else{

        letterPaper.style.display = "block";

        letterPaper.scrollIntoView({
            behavior:"smooth"
        });

    }

});


/* =========================
   QUIZ
========================= */

const checkQuiz =
document.getElementById("checkQuiz");

checkQuiz.addEventListener("click", () => {

    const a1 = document
        .getElementById("answer1")
        .value
        .toLowerCase()
        .trim();

    const a2 = document
        .getElementById("answer2")
        .value
        .toLowerCase()
        .trim();

    const result =
        document.getElementById("quizResult");


    /*
        Jawaban 1:
        Timothy

        Jawaban 2:
        31 Juli 2026
    */

    if(
        a1 === "timothy" &&
        (
            a2 === "31 juli 2026" ||
            a2 === "31 july 2026" ||
            a2 === "31/07/2026" ||
            a2 === "31-07-2026"
        )
    ){

        result.style.color = "#D85C86";

        result.innerText =
            "Correct! Memory unlocked 💗✨";


        document
        .getElementById("specialMemory")
        .scrollIntoView({
            behavior:"smooth"
        });

    }else{

        result.style.color = "#E05B7A";

        result.innerText =
            "Try again 🥹💗";

    }

});


/* =========================
   REVEAL MEMORY
========================= */

const revealBtn =
document.getElementById("revealBtn");

revealBtn.addEventListener("click", () => {

    const specialPhoto =
        document.getElementById("specialPhoto");

    specialPhoto.classList.add("show");

});


/* =========================
   RELATIONSHIP COUNTER
========================= */

function updateCounter(){

    /*
        Relationship starts:
        31 July 2026
    */

    const startDate =
        new Date("2026-07-31T00:00:00");

    const now =
        new Date();

    const diff =
        now.getTime() -
        startDate.getTime();


    /*
        Kalau tanggal sekarang
        masih sebelum tanggal jadian,
        counter dibuat 0.
    */

    if(diff < 0){

        document.getElementById("days").innerText = 0;
        document.getElementById("hours").innerText = 0;
        document.getElementById("minutes").innerText = 0;

        return;

    }


    const days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            diff /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            diff /
            (1000 * 60)
        );


    document
    .getElementById("days")
    .innerText = days;

    document
    .getElementById("hours")
    .innerText = hours;

    document
    .getElementById("minutes")
    .innerText = minutes;

}


updateCounter();

setInterval(
    updateCounter,
    1000
);


/* =========================
   SECRET MESSAGE
========================= */

const stars =
document.querySelectorAll(".secret-star");

let clickedStars = 0;


stars.forEach(star => {

    star.addEventListener("click", () => {

        if(
            !star.classList.contains("active")
        ){

            star.classList.add("active");

            clickedStars++;


            star.style.transform =
                "scale(1.5)";


            star.style.opacity =
                "0.7";


            /*
                Update progress
            */

            document
            .getElementById("starProgress")
            .innerText =
                `Find all the stars (${clickedStars}/5)`;

        }


        if(clickedStars >= 5){

            document
            .getElementById("secretMessage")
            .style.display = "block";


            document
            .getElementById("secretMessage")
            .scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


/* =========================
   REPLAY BUTTON
========================= */

const replayBtn =
document.getElementById("replayBtn");

replayBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* =========================
   ENTER KEY PIN
========================= */

pinInput.addEventListener(
    "keypress",
    (e) => {

        if(e.key === "Enter"){

            unlockBtn.click();

        }

    }
);
