// src/components/Wheel.tsx
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./Wheel.css";

const segments = [
  { option: "Connect Four" },
  { option: "skribbl.io" },
  { option: "GeoGuessr" },
  { option: "Battleship" },
  { option: "Gartic Phone" },
  { option: "Crazy Guys" },
  { option: "Squid Game" },
  { option: "Goober Dash" },
];

export default function SpinWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * segments.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="wheel-wrapper">
      <h2>Spin the Wheel</h2>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={segments}
        fontSize={18} // Text größer machen
        backgroundColors={["#FCE3BB", "#D5A077"]}
        textColors={["#333"]}
        outerBorderColor="#333"
        outerBorderWidth={5}
        innerBorderColor="#fff"
        innerBorderWidth={15}
        radiusLineColor="#eee"
        radiusLineWidth={2}
        textDistance={70} // Texte weiter nach außen
        onStopSpinning={() => {
          setMustSpin(false);
          setResult(segments[prizeNumber].option);
        }}
      />
      <button onClick={handleSpinClick} disabled={mustSpin}>
        {mustSpin ? "Spinning..." : "Spin"}
      </button>
      {result && <p className="result">You’ll play: {result}</p>}
    </div>
  );
}
