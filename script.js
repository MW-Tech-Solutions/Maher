// Dummy user data
let users = [
  { email: 'maher@mail.com', username: 'maher', password: '123' },
  { email: 'user2@example.com', username: 'user2', password: 'pass2' }
];

const registrationForm = document.getElementById('registrationForm');
const registrationMessage = document.getElementById('registrationMessage');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const existingUser = users.find(user => user.email === email || user.username === username);
  
  if (existingUser) {
    registrationMessage.textContent = 'Email or username already exists. Please choose another one.';
  } else {
    users.push({ email, username, password });
    registrationMessage.textContent = 'Registration successful. Redirecting to login page...';
    setTimeout(() => {
      window.location.href = 'index.html'; // Redirect to login page
    }, 2000);
  }
});

const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const identifier = document.getElementById('identifier').value;
  const password = document.getElementById('password').value;
  
  const foundUser = users.find(user => (user.email === identifier || user.username === identifier) && user.password === password);
  
  if (foundUser) {
    loginMessage.textContent = 'Login successful. Redirecting to home page...';
    setTimeout(() => {
      window.location.href = 'home.html'; // Redirect to home page
    }, 2000);
  } else {
    loginMessage.textContent = 'Invalid email/username or password. Please try again.';
  }
});
