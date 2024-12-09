import "./Anna.css";
import Typewriter from "typewriter-effect";

const Anna = ({ close, hasUserOpenedAnna }) => {
  return (
    <div className="anna-modal-container">
      <div className="anna-modal">
        <h2>Hey, I'm Anna</h2>

        {!hasUserOpenedAnna ? (
          <Typewriter
            options={{
              strings: [
                "I'll be your in-game agent and mentor, here to guide you through all your battles. The battle arena is under construction, but don't sit idle—sharpen your swords, hone your skills, and get ready to win. I'll see you in the arena soon!",
              ],
              autoStart: true,
              loop: false,
              pauseFor: 100000000,
            }}
          />
        ) : (
          <p className="anna-p">
            I'll be your in-game agent and mentor, here to guide you through all
            your battles. The battle arena is under construction, but don't sit
            idle—sharpen your swords, hone your skills, and get ready to win.
            I'll see you in the arena soon!,
          </p>
        )}

        <button onClick={close}>Got it!</button>

        <p></p>
      </div>
    </div>
  );
};

export default Anna;
