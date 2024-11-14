import React, { useEffect, useState } from "react";
import "./Button.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLoggedUser } from "../toolkit/userSlice";
import axios from "axios";

export function Button() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    axios
      .get("api/auth/protected")
      .then(() => {
        setIsLogin(true);
      })
      .catch((err) => {
        setIsLogin(false);
        // console.log(err.response.data.message);
      });
  }, [navigate]);

  const handleLogout = async () => {
    await axios
      .post("/api/auth/logout")
      .then((res) => {
        // console.log(res);
        console.log("logout");
        navigate("/login");
        dispatch(addLoggedUser());
        setIsLogin(false);
      })
      .catch((err) => {
        // console.log(err.response.data.message);
      });
  };

  return (
    <div>
      {isLogin ? (
        <button onClick={handleLogout} className="login-btn">
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      )}
    </div>
  );
}
