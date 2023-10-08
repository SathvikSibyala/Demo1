// Get references to the HTML elements
const myDiv = document.getElementById('myDiv');
const changeStyleButton = document.getElementById('changeStyleButton');

// Function to change the background color of the div
function changeBackgroundColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    myDiv.style.backgroundColor = randomColor;
}

// Add a click event listener to the button
changeStyleButton.addEventListener('click', changeBackgroundColor);