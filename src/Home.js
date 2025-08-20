import "./Home.css";
import logo from "./star.svg";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Anna from "./Anna";
import { Link } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";

const Home = () => {
  return (
    <div className="App">
      <main>
        <div class="main-content">
          <img src={logo} className="logo"/>
          <p>We're building the arena..</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
