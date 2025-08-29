// ===== PART 1: JAVASCRIPT BASICS =====

// 1. Variable declarations and data types
let userName = 'John Doe';       // String
const userAge = 25;              // Number
let isStudent = true;           // Boolean
let userHobbies = ['reading', 'coding', 'gaming']; // Array
let userDetails = {              // Object
    email: 'john@example.com',
    country: 'USA'
};

// 2. Basic operators
let birthYear = 2023 - userAge;  // Arithmetic
let greeting = 'Hello, ' + userName + '!'; // String concatenation
let canVote = userAge >= 18;     // Comparison

// 3. Conditional statements
let message;
if (isStudent && userAge >= 18) {
    message = 'Welcome, student! You can vote.';
} else if (isStudent) {
    message = 'Welcome, young student!';
} else {
    message = 'Welcome, guest!';
}

// 4. Output results to the page
document.getElementById('output1').innerHTML = `
    <h3>User Information</h3>
    <p>Name: ${userName}</p>
    <p>Age: ${userAge}</p>
    <p>Birth Year: ${birthYear}</p>
    <p>Student: ${isStudent ? 'Yes' : 'No'}</p>
    <p>Hobbies: ${userHobbies.join(', ')}</p>
    <p>${message}</p>
`;

// ===== PART 2: JAVASCRIPT FUNCTIONS =====

// Function 1: Calculate area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Function 2: Format user information
function formatUserInfo(name, age, isStudent) {
    const status = isStudent ? 'a student' : 'not a student';
    return `${name} is ${age} years old and is ${status}.`;
}

// Using the functions
const area = calculateArea(5, 10);
const userInfo = formatUserInfo(userName, userAge, isStudent);

// Display function outputs
document.getElementById('output2').innerHTML = `
    <h3>Function Examples</h3>
    <p>Area of a 5x10 rectangle: ${area} square units</p>
    <p>${userInfo}</p>
`;

// ===== PART 3: JAVASCRIPT LOOPS =====

// Example 1: for loop - Count from 1 to 5
let countOutput = '<h3>Counting from 1 to 5:</h3><p>';
for (let i = 1; i <= 5; i++) {
    countOutput += `${i} `;
}
countOutput += '</p>';

// Example 2: forEach loop - Display user hobbies
let hobbiesOutput = '<h3>User Hobbies:</h3><ul>';
userHobbies.forEach(hobby => {
    hobbiesOutput += `<li>${hobby.charAt(0).toUpperCase() + hobby.slice(1)}</li>`;
});
hobbiesOutput += '</ul>';

// Display loop outputs
document.getElementById('output3').innerHTML = countOutput + hobbiesOutput;

// ===== PART 4: DOM MANIPULATION =====

// 1. Create a new element and append it
const newSection = document.createElement('section');
newSection.id = 'part4';
newSection.innerHTML = `
    <h2>Part 4: DOM Manipulation</h2>
    <div id="output4">
        <button id="changeColorBtn">Change Background Color</button>
        <button id="addItemBtn">Add List Item</button>
        <button id="toggleTextBtn">Toggle Text</button>
        <div id="dynamicContent"></div>
        <ul id="itemList"></ul>
        <p id="toggleText" style="display: none;">This text can be toggled!</p>
    </div>
`;
document.body.appendChild(newSection);

// 2. Change background color on button click
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#f0f8ff', '#fff0f5', '#f0fff0', '#fff8dc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// 3. Add new list items
document.getElementById('addItemBtn').addEventListener('click', function() {
    const list = document.getElementById('itemList');
    const item = document.createElement('li');
    item.textContent = `Item ${list.children.length + 1} (Added at ${new Date().toLocaleTimeString()})`;
    list.appendChild(item);
});

// 4. Toggle text visibility
document.getElementById('toggleTextBtn').addEventListener('click', function() {
    const text = document.getElementById('toggleText');
    if (text.style.display === 'none') {
        text.style.display = 'block';
        text.style.color = 'green';
    } else {
        text.style.display = 'none';
    }
});

// Initial content
const dynamicContent = document.getElementById('dynamicContent');
dynamicContent.innerHTML = `
    <h3>Interactive Elements</h3>
    <p>Click the buttons above to see DOM manipulation in action!</p>
`;

// 5. Simple user interaction
let userColor = prompt('What is your favorite color?');
if (userColor) {
    alert(`Great choice! ${userColor} is a nice color.`);
    console.log(`User's favorite color is: ${userColor}`);
}
