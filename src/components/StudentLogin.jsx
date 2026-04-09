import { useState } from "react";
import logo from "../assets/logo.png";

function StudentLogin({ onLogin, demoUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setIsSubmitting(true);
    const result = onLogin({ email, password });

    if (!result.success) {
      setError(result.message || "Login failed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    setError("");
    setIsSubmitting(false);
  };

  return (
    <section className="login-screen">
      <div className="login-card">
        <div className="login-brand">
          <img src={logo} alt="PM Education" />
          <div>
            <h1>PM Education</h1>
            <p>Student Portal Login</p>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
          />

          {error && <p className="login-error">{error}</p>}

          <button className="login-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="login-hint">
          <strong>Demo Student Account</strong>
          <span>Email: {demoUser.email}</span>
          <span>Password: {demoUser.password}</span>
        </div>
      </div>
    </section>
  );
}

export default StudentLogin;
