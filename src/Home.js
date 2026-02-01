import "./Home.scss";
import logo from "./stb_full_logo.svg";
import { db } from "./firebase";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Anna from "./Anna";
import { Link } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";
import Accordion from "./Accordion";
import Header from "./Header";
import arrow from "./arrow.svg";
import CountUp from "react-countup";

const Home = () => {
  const [view, setView] = useState(0);

  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const getAmount = async () => {
      const usersRef = collection(db, "users");

      try {
        const usersSnapshot = await getDocs(usersRef);

        setAmount(usersSnapshot.size);
      } catch (error) {
        console.log(error);
      }
    };

    getAmount();
  });

  return (
    <div className="App">
      <Header />

      <main>
        <div
          className="main-content"
          style={{ transform: `translateY(-${view * 100}%)` }}
        >
          <section className="billboard">
            <h1>
              Join{" "}
              <span className="highlight">
                <CountUp end={amount} delay={0} />
              </span>{" "}
              other actors in the arena
            </h1>
            <p>Self Tape Battle is the world's first competitive acting app. Compete, vote & win big as you build a diverse portfolio visible to industry pros!</p>
            <Link to="https://app.selftapebattle.com/userAuth" target="_blank">
              <button>Enter Arena</button>
            </Link>
          </section>

          <section className="how-it-works" id="how-it-works">
            <h1>The new industry platform that works for everyone</h1>

            <div className="actors">
              <div className="box">
                <h4>Upload your tape</h4>
              </div>
              <div className="box">
                <h4>Vote & Receive Votes</h4>
              </div>
              <div className="box">
                <h4>Win prizes</h4>
              </div>
              <div className="box">
                <h4>Build your diverse showreel</h4>
              </div>
            </div>
          </section>

          <section className="contact">
            <h1>For all enquiries:</h1>
            <p>info@selftapebattle.com</p>
          </section>

          <footer>
            <p>
              © 2026 Self Tape Battle. Self Tape Battle® is a registered
              trademark of Self Tape Battle Ltd.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
