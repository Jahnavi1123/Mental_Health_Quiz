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
    document.getElementById('quiz-form').style.display = 'none';
    totalScoreElement.innerText = `Score: ${score}`;
    feedbackMessageElement.innerText = getFeedback(score);
}

function getFeedback(score) {
    if (score <= 30) {
        return 'You seem to have a lower level of distress. Keep it up!';
    } else if (score <= 60) {
        return 'You might be experiencing some mild distress. Consider seeking support.';
    } else {
        return 'It looks like you are going through a challenging time. Please reach out for help!';
    }
}

retakeButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = 'none';
    document.getElementById('quiz-form').style.display = 'block';
    questions[currentQuestionIndex].classList.add('active');
    updateProgressBar();
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
});
