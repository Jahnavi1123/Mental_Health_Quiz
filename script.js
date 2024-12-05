document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;
    const form = document.getElementById('quiz-form');
    
    // Loop through each question
    for (let i = 1; i <= 4; i++) {
        let answer = form.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === '1') {
            score += 1;
        }
    }
    
    // Generate the result message based on the score
    const resultMessage = (score <= 1)
        ? 'Your mental health seems good, but try to stay mindful.'
        : (score <= 3)
        ? 'You might be facing some challenges. Consider seeking support.'
        : 'It’s important to talk to a professional and seek help.';
    
    // Store the score and result message in localStorage
    localStorage.setItem('quizScore', score);
    localStorage.setItem('quizMessage', resultMessage);

    // Redirect to the result page
    window.location.href = 'result.html';
});
