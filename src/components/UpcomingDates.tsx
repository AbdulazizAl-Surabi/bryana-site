// src/components/UpcomingDates.tsx
import { useState, useEffect } from "react";
import "./UpcomingDates.css";

const gameNight = {
  date: "2025-05-11T22:00:00",
  activity: "Game Night Date",
};

function getTimeRemaining(endtime: string) {
  const total = Date.parse(endtime) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function UpcomingDates() {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeRemaining(gameNight.date)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeRemaining(gameNight.date);
      setTimeLeft(updated);
      if (updated.total <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="upcoming-dates">
      <h2>Next: {gameNight.activity}</h2>
      {timeLeft.total > 0 ? (
        <div className="countdown">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </div>
      ) : (
        <div className="countdown finished">Let’s play now! 🎲</div>
      )}
    </div>
  );
}
