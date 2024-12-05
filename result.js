// Retrieve the score and message from localStorage
const score = localStorage.getItem('quizScore');
const message = localStorage.getItem('quizMessage');

// Display the result on the page
const resultDiv = document.getElementById('result-message');
resultDiv.innerHTML = `You scored ${score}/4. ${message}`;

// Optionally, clear the data from localStorage after use, to prevent old data from being shown
localStorage.removeItem('quizScore');
localStorage.removeItem('quizMessage');
