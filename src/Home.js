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
      " Self Tape Battle is the first weekly self-tape competition app where actors compete in fun challenges, earn votes, and win prizes. It’s part competition, part portfolio builder, and part networking tool — designed to keep your craft sharp and your profile visible.",
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
          you. "
        </p>
        <h3>Casting Directors</h3>
        <p>
          Any actor based in the UK (for now). Whether you’re just starting out
          or you’ve been on stage and screen for years, Self Tape Battle is for
          you. "
        </p>
      </>
    ),
  },
];

const voting = [
  {
    question: "What prizes can I win?",
    answer:
      "From acting-related goodies to in-app coins that can be cashed out — prizes change each battle. Our launch battles prizes will be an annual Spotlight membership, and a professional headshot session.",
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
      " You choose. Make your profile public so anyone can view your tapes, or keep it private so only registered users can see them. Casting directors will always be able to view your content",
  },

  {
    question: "Do I still own my content if i upload it?",
    answer:
      "Yes, you own your self tape. By uploading, you grant Self Tape Battle the right to use it for promotion, marketing, and showcasing winners — but ownership stays with you. More details will be outlined in our terms and conditions on app signup. ",
  },
];

const Home = () => {
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);

  const [email, setEmail] = useState("");

  const [view, setView] = useState(0);

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
      <main>
        <div className="arrow-container">
          <button onClick={() => handleSlide("up")}>Up</button>
          <button onClick={() => handleSlide("down")}>Down</button>
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
                  — turning self-tapes into exciting battles with coins, prizes,
                  and a growing community of actors and casting directors.{" "}
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
                  <img src={arrow} />
                  <p className="waitlist">Join the waitlist</p>
                </div>
              </>
            ) : (
              <>
                <ConfettiExplosion />
                <h1>You're in!</h1>
                <p>We'll keep you updated via email.</p>
              </>
            )}
          </section>

          <section className="how-it-works">
            <h1>The new industry platform that works for everyone</h1>

            <div className="actors">
              <div className="box">
                <h4>Upload your tape</h4>
                <p>
                  The first weekly self-tape competition app where actors
                  compete, grow, and get rewarded.
                </p>
              </div>
              <div className="box">
                <h4>Receive Votes</h4>
                <p>
                  The first weekly self-tape competition app where actors
                  compete, grow, and get rewarded.
                </p>
              </div>
              <div className="box">
                <h4>Win prizes</h4>
                <p>
                  The first weekly self-tape competition app where actors
                  compete, grow, and get rewarded.
                </p>
              </div>
              <div className="box">
                <h4>Build your diverse showreel</h4>
                <p>
                  The first weekly self-tape competition app where actors
                  compete, grow, and get rewarded.
                </p>
              </div>
            </div>
          </section>

          <section className="about">
            <h1>About</h1>
            <p>
              Hey, I'm Emmanuel Ojiji. Founder of Self Tape Battle, and
              currently wearing all other hats.
              <br />
              <br />
              As an actor, product designer and developer - My aim has always
              been to develop something new and exciting for the industry.{" "}
              <br />
              <br />
              This industry can be extremely cut-throat, expensive, and
              non-rewarding. I felt there weren't enough outlets for actors to
              just have fun and get something back.
              <br />
              <br />
              This is an exciting passion project for me, and I look forward to
              you using it.
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
