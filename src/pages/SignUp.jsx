import React, { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

function SignUp({ setRoute }) {
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
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

      const userData = { email, password };
      localStorage.setItem(email, JSON.stringify({ userData, userFiles: [] }));

      setRoute("login");
      alert("Registration successful !");
    }
  };

  return (
    <div className="form">
      <h2>Subscription</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
