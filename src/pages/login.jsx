import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export default function Login() {
  const [signIn, setSignIn] = useState(true);

  // Sign Up form state and errors
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");

  // Sign In form state and errors
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInError, setSignInError] = useState("");

  // Handle Sign Up submission
  const handleSignUp = (e) => {
    e.preventDefault();
    
    // Validate that all fields are filled
    if (!signUpName || !signUpEmail || !signUpPassword) {
      setSignUpError("Please fill in all the required fields.");
      return;
    }
    
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(signUpEmail)) {
      setSignUpError("Please enter a valid email address.");
      return;
    }
    
    // Store user data in localStorage (simulation – do not store plain passwords in production)
    const userData = { name: signUpName, email: signUpEmail, password: signUpPassword };
    localStorage.setItem("user", JSON.stringify(userData));
    
    setSignUpError("");
    alert("Sign Up Successful! Please sign in.");
    
    // Clear sign up fields (optional) and switch to sign in view
    setSignUpName("");
    setSignUpEmail("");
    setSignUpPassword("");
    setSignIn(true);
  };

  // Handle Sign In submission
  const handleSignIn = (e) => {
    e.preventDefault();
    
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      setSignInError("No user found. Please sign up first.");
      return;
    }
    
    if (signInEmail !== storedUser.email || signInPassword !== storedUser.password) {
      setSignInError("Invalid email or password.");
      return;
    }
    
    setSignInError("");
    
    window.location.href = "/home";
  };

  return (
    <div className={`container-box ${signIn ? "" : "right-panel-active"}`}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          {signUpError && <p className="text-danger">{signUpError}</p>}
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Name"
            value={signUpName}
            onChange={(e) => setSignUpName(e.target.value)}
          />
          <input
            className="form-control mb-2"
            type="email"
            placeholder="Email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <input
            className="form-control mb-2"
            type="password"
            placeholder="Password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <button className="btn btn-danger mt-3" type="submit">
            Sign Up
          </button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form onSubmit={handleSignIn}>
          <h1>Sign in</h1>
          {signInError && <p className="text-danger">{signInError}</p>}
          <input
            className="form-control mb-2"
            type="email"
            placeholder="Email"
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
          />
          <input
            className="form-control mb-2"
            type="password"
            placeholder="Password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
          <a href="#" className="text-muted my-2">
            Forgot your password?
          </a>
          <button className="btn btn-danger mt-3" type="submit">
            Sign In
          </button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="btn btn-outline-light mt-3" onClick={() => setSignIn(true)}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="btn btn-outline-light mt-3" onClick={() => setSignIn(false)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
