import React, { useEffect } from "react";

import "../../App.css";
import car from "../../images/landing_images/car.jpg";
import city from "../../images/landing_images/city.jpg";
import electric_car from "../../images/landing_images/electric_car.jpg";
import smartphone from "../../images/landing_images/smartphone.jpg";
import train_track from "../../images/landing_images/train_track.jpg";
import PrimaryImage from "./landingpage/PrimaryImage.js";
import Slider from "./landingpage/Slider";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addLoggedUser } from "../../toolkit/userSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/auth/refresh-token")
      .then((res) => {
        dispatch(addLoggedUser(res.data.payload));
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, [dispatch]);

  return (
    <div className="home">
      <PrimaryImage imageSrc={car} />
      <Slider
        imageSrc={electric_car}
        title={"We're here"}
        subtitle={"to charge your car"}
        flipped={true}
      />
      <Slider
        imageSrc={city}
        title={"And your future"}
        subtitle={"through the use of renewable energy"}
      />
      <Slider
        imageSrc={smartphone}
        title={"Download our app"}
        subtitle={"to get started today"}
        flipped={true}
      />
      <Slider
        imageSrc={train_track}
        title={"And take your first step"}
        subtitle={"towards greener tomorrow"}
      />
    </div>
  );
}
