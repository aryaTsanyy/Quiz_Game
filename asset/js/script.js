"use strict";

const quizData = [
    {
        question: "Tanggal Berapa Hari ini?",
        a: "Tanngal Jadian",
        b: "Tanggalan",
        c: "1 Oktober",
        d: "Kepo",
        e: "Terserah",
        correct: "c",
    },
    {
        question: "Dimana Letak SMK Telkom Purwokerto?",
        a: "Purwokerto",
        b: "Isekai",
        c: "Banyumas",
        d: "Brebes",
        e: "Jalan Jalan",
        correct: "a",
    }
];

const quizContainer = document.querySelector(".app");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.querySelector(".question");
const aAnswer = document.getElementById("a--answer")
const bAnswer = document.getElementById("b--answer")
const cAnswer = document.getElementById("c--answer")
const dAnswer = document.getElementById("d--answer")
const eAnswer = document.getElementById("e--answer")
const submit = document.querySelector(".btn")

let currentQuiz = 0;
let score = 0;

const resetAnswer = function () {
    answerElement.forEach((el) => (el.checked = false));
}

const loadQuiz = function () {
    resetAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionElement.textContent = currentQuizData.question;
    aAnswer.textContent = currentQuizData.a;
    bAnswer.textContent = currentQuizData.b;
    cAnswer.textContent = currentQuizData.c;
    dAnswer.textContent = currentQuizData.d;
    eAnswer.textContent = currentQuizData.e;
}
loadQuiz();

const getSelected = function () {
    let answer;

    answerElement.forEach((el) => {
        if (el.checked) answer = el.id
    })

    return answer;
}

submit.addEventListener("click", function () {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quizContainer.innerHTML = score < 2 ? `<h2 class="question">Score Kamu ${score * 10}%, raih minimal 70% agar bisa menang!</h2>  <div class="d-grid gap-2 mt-2"> <button class="btn btn-color-theme btn-lg" onclick="location.reload()">Coba Lagi</button></div>` :
            `<h2 class="question">Selamat kamu menang!</h2>  <div class="d-grid gap-2 mt-2"> <button class="btn btn-color-theme btn-lg" onclick="location.reload()">Coba Lagi</button></div>>`;
    }
})
