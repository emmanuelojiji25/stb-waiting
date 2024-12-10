import "./Home.css";
import logo from "./logo.gif";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Anna from "./Anna";
import { Link } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";

const Home = () => {
  const [email, setEmail] = useState("");
  const [isAnnaVisible, setIsAnnaVisible] = useState(false);
  const [hasUserOpenedAnna, setHasUserOpenedAnna] = useState(false);

  const [signUpSuccessful, setSignUpSuccessful] = useState(false);

  const handleSendEmail = async () => {
    try {
      const emailsRef = collection(db, "emails");
      await addDoc(emailsRef, {
        email: email,
      });
      setSignUpSuccessful(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenAnna = () => {
    setIsAnnaVisible(true);

    setTimeout(() => {
      setHasUserOpenedAnna(true);
    }, 30000);
  };
  return (
    <div className="App">
      <main>
        <div class="main-content">
          {isAnnaVisible && (
            <Anna
              close={() => setIsAnnaVisible(false)}
              hasUserOpenedAnna={hasUserOpenedAnna}
            />
          )}
          <img src={logo} class="logo" />

          {!signUpSuccessful && (
            <>
              <h1>THE ULTIMATE ACTING SHOWDOWN!</h1>
              <p>
                The first-of-its-kind competition app. Rise to the top, win big,
                and claim your victory. Sign up to be the first to know when the
                arena is ready!
              </p>
              <input
                id="emailInput"
                type="text"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={() => handleSendEmail()}>KEEP ME UPDATED</button>{" "}
            </>
          )}
          {signUpSuccessful && (
            <>
              <ConfettiExplosion />
              <h2 className="success">
                You're officially in! Sharpen those skills, the challenge
                awaits.
              </h2>
            </>
          )}
          <div className="anna-container" onClick={() => handleOpenAnna()}>
            <div class="anna">
              <i class="fa-solid fa-user"></i>
            </div>
            <p>Meet Anna, your no-nonsene agent.</p>
          </div>
        </div>

        <div>
          <Link to="https://x.com/selftapebattle" target="_blank">
            <i class="fa-brands fa-x-twitter"></i>
          </Link>
          <Link to="https://www.instagram.com/selftapebattle" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </Link>
        </div>

        <div className="footer">
          <Link to="/privacypolicy" className="privacy-policy-link">
            Privacy Policy
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
