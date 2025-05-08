import { useState } from "react";
import "./Intro.css";

export default function Intro() {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => s + 1);

  return (
    <div className="intro-container">
      {step === 0 && (
        <>
          <p>Hey babe, can you believe it’s been 5 months already?.</p>
          <p>
            I planned something fun: this Sunday, 11th May, is our Game Night
            Date! I even built this little site to kick things off. Want to join
            me?
          </p>
          <div className="button-group">
            <button onClick={next}>Yes, let’s go!</button>
            <button onClick={next}>Absolutely, yes!</button>
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <p>
            🎉 Yay! Thanks for choosing “Yes!” You’re the best. I knew you would
            choose Yes :P
          </p>
          <button onClick={next}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <p>
            Here’s the plan: We’ll spin a fun Wheel of Mini‑Games, play 5
            different games with 3 rounds each.
          </p>
          <button onClick={next}>Next</button>
        </>
      )}

      {step === 3 && (
        <>
          <p>
            I’ll send you a little snack box so you’ve got yummy treats while we
            play.
          </p>
          <button onClick={next}>Next</button>
        </>
      )}

      {step === 4 && (
        <>
          <p>
            And of course, the ultimate loser has to surprise the winner with a
            heartfelt compliment and a big virtual hug for the rest of the day.
          </p>
          <button onClick={next}>Next</button>
        </>
      )}

      {step === 5 && (
        <>
          <p>
            I can’t wait to spend this special night with you—thanks for being
            my Maus, even when life’s hectic.
          </p>
          <p>
            I promise to improve this little site a bit more each month as our
            journey continues!
          </p>
          {/* Hier fügt das Bild ein */}
          <img src="/public/us.jpeg" alt="Us" className="intro-image" />
        </>
      )}
    </div>
  );
}
