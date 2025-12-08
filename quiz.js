function answerQuestion(qNum, userAnswer) {
    const correctAnswers = {
        1: "phishing",
        2: "valid",
        3: "phishing",
        4: "phishing",
        5: "phishing",
        // lanjutkan sampai 10 jika ada
    };

    const correct = correctAnswers[qNum];

    // Ambil data sebelumnya
    let quizResults = JSON.parse(localStorage.getItem('quizResults')) || [];

    // Simpan jawaban user
    quizResults[qNum - 1] = {
        question: qNum,
        userAnswer: userAnswer,
        correctAnswer: correct,
        isCorrect: userAnswer === correct
    };

    // Simpan kembali ke localStorage
    localStorage.setItem('quizResults', JSON.stringify(quizResults));

    // Disable button setelah jawab
    document.querySelectorAll(".answerBtn").forEach(btn => btn.disabled = true);

    // Mark warna
    const selectedBtn = document.querySelector(`button[data-answer="${userAnswer}"]`);

    if (userAnswer === correct) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("wrong");
        document.querySelector(`button[data-answer="${correct}"]`)
            .classList.add("correct");
    }

    // Enable next button
    const nextBtn = document.querySelector(".nextBtn");
    nextBtn.disabled = false;
    nextBtn.classList.add("active-next");
}

// Start button
document.getElementById("startBtn")?.addEventListener("click", function() {
    localStorage.removeItem("quizResults"); // reset quiz
    window.location.href = "./quiz-questions/q1.html";
});