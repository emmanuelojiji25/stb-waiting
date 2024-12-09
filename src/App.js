import "./App.css";
import logo from "./logo.gif";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Anna from "./Anna";

function App() {
  const [email, setEmail] = useState("");
  const [isAnnaVisible, setIsAnnaVisible] = useState(false);
  const [hasUserOpenedAnna, setHasUserOpenedAnna] = useState(false);

  const handleSendEmail = async () => {
    try {
      const emailsRef = collection(db, "emails");
      await addDoc(emailsRef, {
        email: email,
      });
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
          <h1>FIGHT TO BE SEEN!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dapibus, metus at ornare dapibus, nibh tellus iaculis nunc, in
            rutrum ex orci sed sem.
          </p>
          <input
            id="emailInput"
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={() => handleSendEmail()}>REMIND ME</button>
          <div className="anna-container" onClick={() => handleOpenAnna()}>
            <div class="anna">
              <i class="fa-solid fa-user"></i>
            </div>
            <p>Meet Anna, your agent.</p>
          </div>
        </div>

        <div>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>

        <div className="footer">
          <p>FAQ</p>
          <p className="privacy-policy">Privacy Policy</p>
        </div>
      </main>
    </div>
  );
}

export default App;
