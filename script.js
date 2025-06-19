
// Selecting the required elements
const openBtn = document.getElementById('btn1');
const closeBtn = document.getElementById('btn2');
const container = document.getElementById('container');

// Initially hide the container div
container.style.display = 'none';

// Show the container div when the OPEN button is clicked
openBtn.addEventListener('click', function () {
    container.style.display = 'block';
});

// Hide the container div when the CLOSE button is clicked
closeBtn.addEventListener('click', function ()  {
    container.style.display = 'none';
});
