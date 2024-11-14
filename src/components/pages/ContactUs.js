import React, { useEffect } from "react";
import "../../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("api/auth/protected")
      .then(() => {
        navigate("/contact-us");
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        navigate("/login");
      });
  }, [navigate]);

  return <h1 className="contact-us">CONTACT</h1>;
}
