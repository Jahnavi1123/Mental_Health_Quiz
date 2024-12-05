<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mental Health Quiz</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="quiz-container">
        <form id="quiz-form">
            <div class="question" id="question1">
                <p>1. Do you feel tired or lack energy on most days?</p>
                <label><input type="radio" name="q1" value="1"> 1 - Not at all</label><br>
                <label><input type="radio" name="q1" value="2"> 2 - Occasionally</label><br>
                <label><input type="radio" name="q1" value="3"> 3 - Sometimes</label><br>
                <label><input type="radio" name="q1" value="4"> 4 - Frequently</label><br>
                <label><input type="radio" name="q1" value="5"> 5 - Always</label><br>
            </div>
            <!-- Add all your other questions here, from q2 to q20 -->
            <button type="button" id="next-btn">Next Question</button>
        </form>
        <div id="result-container" style="display: none;">
            <h2>Your Result</h2>
            <p id="total-score">Score: 0</p>
            <p id="feedback-message">Feedback will be shown here.</p>
            <button id="retake-btn">Retake the Quiz</button>
        </div>
    </div>

    <!-- Insert your JavaScript here -->
    <script>
        const questions = document.querySelectorAll('.question');
        const nextButton = document.getElementById('next-btn');
        const resultContainer = document.getElementById('result-container');
        const totalScoreElement = document.getElementById('total-score');
        const feedbackMessageElement = document.getElementById('feedback-message');
        const progressBar = document.getElementById('progress-bar');
        const retakeButton = document.getElementById('retake-btn');
        let currentQuestionIndex = 0;
        let score = 0;
        questions[currentQuestionIndex].classList.add('active');

        function updateProgressBar() {
            const progress = (currentQuestionIndex / (questions.length - 1)) * 100;
            progressBar.value = progress;
        }

        nextButton.addEventListener('click', () => {
            const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex + 1}"]:checked`);
            if (!selectedAnswer) {
                alert('Please select an answer.');
                return;
            }
            score += parseInt(selectedAnswer.value);
            questions[currentQuestionIndex].classList.remove('active');
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                questions[currentQuestionIndex].classList.add('active');
                updateProgressBar();
            } else {
                showResults();
            }
        });

        function showResults() {
            resultContainer.style.display = 'block';
            const averageScore = score / questions.length;
            totalScoreElement.textContent = `Score: ${score} / ${questions.length * 5}`;
            if (averageScore <= 1.5) {
                feedbackMessageElement.textContent = 'You seem to be in a great mental state. Keep it up!';
            } else if (averageScore <= 3) {
                feedbackMessageElement.textContent = 'You might want to explore ways to reduce stress or talk to a professional.';
            } else {
                feedbackMessageElement.textContent = 'It may be helpful to reach out to a mental health professional for support.';
            }
        }

        retakeButton.addEventListener('click', () => {
            score = 0;
            currentQuestionIndex = 0;
            resultContainer.style.display = 'none';
            questions.forEach(q => q.classList.remove('active'));
            questions[currentQuestionIndex].classList.add('active');
            updateProgressBar();
        });
    </script>
</body>
</html>
