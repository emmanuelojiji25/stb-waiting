import "./Anna.css";
import Typewriter from "typewriter-effect";

const Anna = ({ close, hasUserOpenedAnna }) => {
  return (
    <div className="anna-modal-container">
      <div className="anna-modal">
        <h2>Hi! I'm Anna</h2>

        {!hasUserOpenedAnna ? (
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  " You're finally here. I'll be your in-game agent and mentor, here to guide you through all your battles. The battle arena is under construction, but that’s no excuse to sit back. Use this time wisely—sharpen your swords, hone your skills, and get ready to win. I'll see you soon!",
                ],
                autoStart: true,
                loop: false,
                pauseFor: 100000000,
                delay: 80,
              }}
            />
          </div>
        ) : (
          <p className="anna-p">
            You're finally here. I'll be your in-game agent and mentor, here to
            guide you through all your battles. The battle arena is under
            construction, but that’s no excuse to sit back. Use this time
            wisely—sharpen your swords, hone your skills, and get ready to win.
            I'll see you soon!
          </p>
        )}

        <button onClick={close}>Got it!</button>

        <p></p>
      </div>
    </div>
  );
};

export default Anna;
