
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className={`container-box ${signIn ? "" : "right-panel-active"}`}>
      {/* Sign Up Form */}
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input className="form-control mb-2" type="text" placeholder="Name" />
          <input className="form-control mb-2" type="email" placeholder="Email" />
          <input className="form-control mb-2" type="password" placeholder="Password" />
          <button className="btn btn-danger mt-3">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign in</h1>
          <input className="form-control mb-2" type="email" placeholder="Email" />
          <input className="form-control mb-2" type="password" placeholder="Password" />
          <a href="#" className="text-muted my-2">Forgot your password?</a>
          <button className="btn btn-danger mt-3">Sign In</button>
        </form>
      </div>

      {/* Overlay Panel */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="btn btn-outline-light mt-3" onClick={() => setSignIn(true)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="btn btn-outline-light mt-3" onClick={() => setSignIn(false)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
