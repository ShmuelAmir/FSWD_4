import React, { useState } from 'react';

function SignUp({ setRoute }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!emailRegex.test(email)) {
            setError('The email must be a @gmail.com address.');
        } else if (!passwordRegex.test(password)) {
            setError('The password must contain at least 8 characters, one uppercase letter, and one number.');
        } else {
            setError('');
            setRoute('login'); // Redirect to editor area after successful sign-up

            const userData = { email, password };
            const userFiles = JSON.parse(localStorage.getItem(email))?.userFiles || [];

            localStorage.setItem(email, JSON.stringify({ userData, userFiles })); // Save user files in localStorage
            
            alert('Registration successful !'); 
        }
    };

    return (
        <div className="form">
            <h2>Subscription</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;

