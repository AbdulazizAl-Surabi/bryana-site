// src/components/Playlist.tsx
import "./Playlist.css"; // optional: eigene Styles

export default function Playlist() {
  return (
    <div className="playlist-container">
      <h2>Sounds that make me think about You</h2>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/5ksAQiezF0vcJMr6nbet1r?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
