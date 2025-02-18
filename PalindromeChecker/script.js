document.getElementById('check-btn').addEventListener('click', function () {
    const inputElement = document.getElementById('text-input');
    const resultElement = document.getElementById('result');
    const originalText = inputElement.value.trim();

    // Alert if no input is provided
    if (originalText === '') {
        alert('Please input a value');
        return;
    }

    // Normalize input: remove non-alphanumeric characters and convert to lowercase
    const cleanedText = originalText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    // Check if the cleaned text is a palindrome
    const isPalindrome = cleanedText === reversedText;

    // Display result
    if (isPalindrome) {
        resultElement.textContent = `${originalText} is a palindrome`;
    } else {
        resultElement.textContent = `${originalText} is not a palindrome`;
    }
});
