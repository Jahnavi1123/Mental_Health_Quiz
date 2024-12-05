document.getElementById('quiz-form').onsubmit = function(event) {
    event.preventDefault();

    // Get the answers and store them in an array
    let results = [];
    for (let i = 1; i <= 15; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            results.push(parseInt(selectedOption.value));
        } else {
            results.push(0); // No answer selected, push a default value (or handle this case differently)
        }
    }

    // Store results in localStorage
    localStorage.setItem('quizResults', JSON.stringify(results));

    // Redirect to result page
    window.location.href = "result.html";
};
