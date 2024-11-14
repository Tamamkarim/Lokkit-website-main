import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import "./Loginandregister.css";
import { addLoggedUser } from "../../../toolkit/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("api/auth/protected")
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.message);
        setInterval(() => {
          setError("");
        }, 3000);
      });
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `api/auth/login`,
        { email, password: pass },
        { withCredentials: true }
      )
      .then((res) => {
        const user = res.data.payload;
        dispatch(addLoggedUser(user));
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      });
  };

  return (
    <div className="login-register">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit">Log in</button>
        </form>

        <Link to="/register">
          <button className="link-btn">
            Don't have an account? Register here.
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
