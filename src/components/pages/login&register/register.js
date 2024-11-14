import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import "./Loginandregister.css";

function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("api/auth/protected")
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        // setError(err.response.data.message);
        setInterval(() => {
          setError("");
        }, 3000);
      });
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `/api/users/process-register`,
        {
          name,
          email,
          password: pass,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log(err.response.data.message);
      });
  };

  return (
    <div className="login-register">
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            placeholder="Full Name"
          />

          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Register</button>
        </form>

        <Link to="/login">
          <button className="link-btn">
            Already have an account? Login here.
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
