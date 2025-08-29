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

// 5. Simple user interaction
let userColor = prompt('What is your favorite color?');
if (userColor) {
    alert(`Great choice! ${userColor} is a nice color.`);
    console.log(`User's favorite color is: ${userColor}`);
}
