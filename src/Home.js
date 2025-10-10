import "./Home.scss";
import logo from "./star.svg";
import { db } from "./firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Anna from "./Anna";
import { Link } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";
import Accordion from "./Accordion";
import Header from "./Header";
import arrow from "./arrow.svg";
const general = [
  {
    question: "What is Self Tape Battle",
    answer:
      " Self Tape Battle is the first acting game  where actors compete in self tape challenges, earn votes, and win prizes. It’s part competition, part portfolio builder, and part networking tool — designed to keep your craft sharp and keep you rewarded.",
  },

  {
    question: "Will it be free to use?",
    answer: "Yes!",
  },

  {
    question: "Who can join?",
    answer: (
      <>
        <h3>Actors</h3>
        <p>
          Any actor based in the UK (for now). Whether you’re just starting out
          or you’ve been on stage and screen for years, Self Tape Battle is for
          you.
        </p>
        <h3>Casting Directors</h3>
        <p>
          Casting directors who are looking for fresh talent can look through a
          pool of versatile performances.
        </p>
      </>
    ),
  },
];

const voting = [
  {
    question: "What prizes can I win?",
    answer:
      "From acting-related goodies to in-app coins that can be cashed out — prizes change each battle. For our launch battles, prizes will include an annual Spotlight membership, and a professional headshot session.",
  },
  {
    question: "How do coins work and how do I cash out?",
    answer:
      "Coins are earned through winning battles and other activities. Once you hit the cash-out threshold, you can convert them to real money or spend them in-app.",
  },
];

const content = [
  {
    question: "Who can see my self tapes?",
    answer:
      " You choose! Make your profile public so anyone can view your tapes, or keep it private so only registered users can see them. Casting directors will always be able to view your content.",
  },

  {
    question: "Do I still own my content if i upload it?",
    answer:
      "Yes, you own your self tape. More details will be outlined in our terms and conditions on app signup.",
  },
];

const Home = () => {
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);

  const [email, setEmail] = useState("");

  const [view, setView] = useState(0);

  const [privacyPolicy, setPrivacyPolicy] = useState("hidden");

  const handleSlide = (direction) => {
    console.log("clicked");
    if (direction === "up" && view > 0) {
      setView(view - 1);
      console.log("up");
    }

    if (direction === "down" && view < 3) {
      setView(view + 1);
      console.log("down");
    }
  };

  const handleSignUp = async () => {
    try {
      const ref = doc(db, "mailing", email);

      await setDoc(ref, {
        email: email,
      });

      setIsUserSignedUp(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <Header />
      <div className={`privacy-policy ${privacyPolicy}`}>
              <p onClick={() => setPrivacyPolicy("hidden")}>Close</p>
              <h2>Privacy Policy</h2>
              <p>
                At Self Tape Battle, we respect your privacy and are committed
                to protecting your personal data. This Privacy Policy explains
                how we collect, use, and safeguard your information in
                accordance with UK GDPR regulations.
                <br /> <br />
                1. Information We Collect <br /> <br /> When you sign up to our
                mailing list: Your email address. We do not collect any other
                personal information on the landing page. <br />
                <br /> 2. How We Use Your Information <br /> <br />
                We use the information you provide to: Notify you about updates
                and the launch of the Self Tape Battle app, share relevant news,
                promotions, or events related to Self Tape Battle We will never
                sell your personal data to third parties. <br /> <br /> 3. Data
                Retention <br /> <br />
                We will retain your email address only as long as necessary to
                provide updates about Self Tape Battle or until you request
                deletion. <br /> <br />
                4. Your Rights <br /> <br /> Under UK GDPR, you have the right
                to: Access the personal data we hold about you, request
                corrections to your data, request deletion of your data, and
                withdraw consent to receive communications at any time. You can
                exercise these rights by contacting us at: <b>info@selftapebattle.com</b> <br /> <br />
                5. Data Security <br /> <br /> We implement appropriate
                technical and organisational measures to protect your
                information against unauthorised access, loss, or misuse. <br />{" "}
                <br />
                6. Cookies<br/><br/> Our landing page may use basic cookies for analytics
                and functionality. These do not store personal information.<br/><br/> 7.
                Changes to This Policy<br/><br/> We may update this Privacy Policy from
                time to time. Any changes will be posted on this page with an
                updated effective date.

                
              </p>
            </div>
      <main>
      
        <div className="arrow-container">
          <button onClick={() => handleSlide("up")} className="arrow-button">
            <i class="fa-solid fa-arrow-up"></i>
          </button>
          <button onClick={() => handleSlide("down")} className="arrow-button">
            <i class="fa-solid fa-arrow-down"></i>
          </button>
        </div>
        <div
          className="main-content"
          style={{ transform: `translateY(-${view * 100}%)` }}
        >
          <section className="billboard">
            {!isUserSignedUp ? (
              <>
                <h1>The ultimate acting showdown!</h1>
                <p>
                  Self Tape Battle is the world’s first competitive acting game
                  — turning self-tapes into exciting weekly battles with coins,
                  prizes, and a growing community of actors and casting
                  directors.{" "}
                </p>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button onClick={() => handleSignUp()}>go</button>
                </div>
                <div class="waitlist-container">
                  <img src={arrow} className="arrow" />
                  <p className="waitlist">Join the waitlist</p>
                </div>
              </>
            ) : (
              <>
                <ConfettiExplosion />
                <h1>You're in!</h1>
                <p>
                  We'll keep you updated via email. We can't wait to see you in
                  the Arena.
                </p>
              </>
            )}
            <p
              className="privacy-policy-cta"
              onClick={() => setPrivacyPolicy("visible")}
            >
              Read our privacy policy
            </p>

           
          </section>

          <section className="how-it-works" id="how-it-works">
            <h1>The new industry platform that works for everyone</h1>

            <div className="actors">
              <div className="box">
                <h4>1) Upload your tape</h4>
              </div>
              <div className="box">
                <h4>2) Receive Votes</h4>
              </div>
              <div className="box">
                <h4>3) Win prizes</h4>
              </div>
              <div className="box">
                <h4>4) Build your diverse showreel</h4>
              </div>
            </div>
          </section>

          <section className="about" id="about">
            <h1>About</h1>
            <p>
              Hi, I’m Emmanuel, the founder of Self Tape Battle. As an actor,
              designer, and developer, I wanted to create something fresh for
              our industry. A space where actors can compete, grow, and get
              rewarded while doing what they love. Acting can often feel
              isolating, expensive, and cut-throat. Self Tape Battle flips that
              on its head by making self tapes fun, social, and rewarding. This
              started as my passion project, but it’s really about building a
              community that inspires and supports each other. I can’t wait to
              see you in the arena.
            </p>
          </section>

          <section className="faq-container" id="faq">
            <h1>FAQ</h1>
            <p>
              These should answer some questions you probably have for now. More
              questions? No problemo! Reach out to us at info@selftapebattle.com
            </p>
            <div className="faq-inner">
              <div className="category-container">
                <h2>General</h2>
                {general.map((question) => (
                  <Accordion
                    question={question.question}
                    answer={question.answer}
                  />
                ))}
              </div>

              <div className="category-container">
                <h2>Voting & Prizes</h2>
                {voting.map((question) => (
                  <Accordion
                    question={question.question}
                    answer={question.answer}
                  />
                ))}
              </div>
              <div className="category-container">
                <h2>Copyright & Content</h2>
                {content.map((question) => (
                  <Accordion
                    question={question.question}
                    answer={question.answer}
                  />
                ))}
              </div>
            </div>
          </section>

          <div className="contact"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
