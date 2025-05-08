// src/App.tsx
import { useState } from "react";
import Intro from "@/components/Intro";
import SpinWheel from "@/components/Wheel"; // geänderter Import
import Playlist from "@/components/Playlist";
import UpcomingDates from "@/components/UpcomingDates";
import "./App.css";

const tabs = ["Intro", "Wheel", "Playlist", "Dates"] as const;

function App() {
  const [active, setActive] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <div className="app-container">
      <h1>Our Cozy Corner🛋️</h1>
      <nav className="tabs">
        {tabs.map((t) => (
          <button
            key={t}
            className={active === t ? "active" : ""}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </nav>
      <section className="tab-content">
        {active === "Intro" && <Intro />}
        {active === "Wheel" && <SpinWheel />}
        {active === "Playlist" && <Playlist />}
        {active === "Dates" && <UpcomingDates />}
      </section>
    </div>
  );
}

export default App;
