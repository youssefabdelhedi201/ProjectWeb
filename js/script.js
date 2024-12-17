/** creating button click show hide navbar **/
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

var typed = new Typed(".input", {
    strings: ["Fullstack Developer", "UX Designer", "FinOps Developer"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
});

document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "path/to/your/CV.pdf"; // Update this path to the correct location of your CV file
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".resume-item");
    const navLinks = document.querySelectorAll(".resume nav ul li a");

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});

function calculateScore() {
    const correctAnswers = {
        q1: 'a',
        q2: 'b',
        q3: 'c',
        q4: 'b',
        q5: 'a',
        q6: 'c',
        q7: 'c',
        q8: 'a',
        q9: 'b',
        q10: 'b'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    for (const [question, answer] of formData.entries()) {
        const isCorrect = answer === correctAnswers[question];
        if (isCorrect) {
            score++;
        }
        resultDiv.innerHTML += `<p>Question ${question.slice(1)}: ${isCorrect ? 'Correct' : 'Wrong'}</p>`;
    }

    const totalQuestions = Object.keys(correctAnswers).length;
    resultDiv.innerHTML += `<p>Your score: ${score} out of ${totalQuestions}</p>`;

    let correctAnswersList = '<h3>Correct Answers:</h3><ul>';
    for (const [question, answer] of Object.entries(correctAnswers)) {
        correctAnswersList += `<li>${question}: ${answer}</li>`;
    }
    correctAnswersList += '</ul>';
    resultDiv.innerHTML += correctAnswersList;
}