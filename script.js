const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

// Toggle forms
signUpButton.addEventListener('click', function() {
    signInForm.style.display = 'none'; 
    signUpForm.style.display = 'block';
});
signInButton.addEventListener('click', function() {
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
});

const backendUrl = "http://localhost:2083"; // change to Render URL later

// Handle Sign Up form
document.querySelector("#signup form").addEventListener("submit", async (e) => {
  e.preventDefault(); // stop page reload

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  try {
    const res = await fetch("http://localhost:2083/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password })
    });

    const data = await res.json();
    if (!res.ok) {
      alert("Sign Up failed: " + (data.message || "Unknown error"));
    } else {
      alert("Account created! Please sign in.");
      // Switch to sign in form
      document.getElementById("signup").style.display = "none";
      document.getElementById("signIn").style.display = "block";
    }
  } catch (err) {
    console.error(err);
    alert("Error connecting to server");
  }
});

// Handle Sign In form
document.querySelector("#signIn form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  try {
    const res = await fetch("http://localhost:2083/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const text = await res.text();
    console.log("Raw login response:", text);

    if (!res.ok) {
      alert("Login failed: " + text);
      return; // ⛔ stop here if login fails
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error("Failed to parse login JSON:", err);
      alert("Login failed: Invalid server response");
      return;
    }

    console.log("Parsed login data:", data);

    // Use firstName if provided, otherwise email
    alert("Welcome, " + (data.firstName || data.email || "User") + "!");

    // Only save token if it exists
    if (data.token) {
      localStorage.setItem("authToken", data.token);
    } else {
      console.warn("No token received from backend!");
    }

    // ✅ Redirect only after successful login
    window.location.href = "home.html";
  } catch (err) {
    console.error("Error during login:", err);
    alert("Error connecting to server");
  }
});

