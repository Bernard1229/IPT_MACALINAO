  // Function to add the numbers
  function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
    } else {
        const sum = num1 + num2;
        document.getElementById('result').innerHTML = "Result: " + sum;
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}