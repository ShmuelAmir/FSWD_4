import React, { useState } from "react";

function LogIn({ setRoute, setUser }) {
  const [error, setError] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const userData = JSON.parse(localStorage.getItem(email))?.userData;

    if (!userData) {
      setError("user donsn't exists. go to sign up...");
    } else if (userData.password !== password) {
      setError("password is not correct");
    } else {
      setError("");
      setUser(email);
      setRoute("editor");
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
