// login.js

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "Admin@123";
const MIN_LENGTH = 8;

function isPasswordStrong(password) {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[\W_]/.test(password);
  return password.length >= MIN_LENGTH && hasUpper && hasLower && hasDigit && hasSpecial;
}

function checkLogin(username, password) {
  if (!username || !password) {
    return { success: false, message: "Username and password are required." };
  }

  if (password.length < MIN_LENGTH) {
    return { success: false, message: `Password must be at least ${MIN_LENGTH} characters.` };
  }

  if (!isPasswordStrong(password)) {
    return { success: false, message: "Password is not strong enough." };
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    return { success: true, message: "Login successful!" };
  } else {
    return { success: false, message: "Invalid username or password." };
  }
}

function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");

  const result = checkLogin(username, password);
  messageDiv.textContent = result.message;
  messageDiv.className = "message " + (result.success ? "success" : "error");
}

// Export for Jasmine
if (typeof module !== "undefined") {
  module.exports = { checkLogin, isPasswordStrong };
}
