// Handle form submission
document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);

    // Send POST request to the backend
    fetch('/calculate', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById('rate').textContent = data.rate;
            document.getElementById('total').textContent = data.total;
        }
    })
    .catch(error => console.error('Error:', error));
});

// Toggle Light/Dark Mode with Icon Change
const toggleModeButton = document.getElementById('toggle-mode');
const toggleIcon = document.getElementById('toggle-icon');

toggleModeButton.addEventListener('click', () => {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    body.className = isDarkMode ? 'light-mode' : 'dark-mode';
    toggleIcon.className = isDarkMode ? 'fas fa-moon' : 'fas fa-sun';
});
