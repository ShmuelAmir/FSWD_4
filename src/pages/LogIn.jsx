import React, { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

function LogIn({ setRoute, setUser }) {
  const [error, setError] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!emailRegex.test(email)) {
      setError("The email must be a @gmail.com address.");
    } else if (!passwordRegex.test(password)) {
      setError(
        "The password must contain at least 8 characters, one uppercase letter, and one number."
      );
    } else {
      setError("");
      const userData = JSON.parse(localStorage.getItem(email))?.userData;
      if (userData && userData.password === password) {
        setRoute("editor"); 
        setUser(email); 
      } else {
        setError("Email ou mot de passe incorrect.");
      }
    }
  };

  return (
    <div className="form">
      <h2>Log in</h2>
      <form onSubmit={handleLogIn}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account ?{" "}
        <a
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            setRoute("signup");
          }}
        >
          Sign up
        </a>
      </p>
    </div>
  );
}

export default LogIn;
