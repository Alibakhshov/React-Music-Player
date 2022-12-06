import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Iga kate nakl kinum",
      artist: "Safo Alifshoev",
      img_src: "./images/Safo Alifshoev.jpg",
      src: "./music/Muqom - Iga kate nakl kinum.mp3",
    },
    {
      title: "Nayatat tu",
      artist: "Safo Alifshoev",
      img_src: "./images/Safo Alifshoev.jpg",
      src: "./music/Muqom - Nayatat tu.mp3",
    },
    {
      title: "Kina yakak",
      artist: "Sashi Zaifi",
      img_src: "./images/Sashi Zaifi.jpeg",
      src: "./music/Sashi Zaifi - Kina yakak.mp3",
    },
    {
      title: "Chizjat",
      artist: "Lidush Habib",
      img_src: "./images/Lidush Habib.jpeg",
      src: "./music/Lidush Habib - Chizjat.mp3",
    },
    {
      title: "Be soibe",
      artist: "Sashi Zaifi",
      img_src: "./images/Sashi Zaifi.jpeg",
      src: "./music/Sashi Zaifi - Be soibe.mp3",
    },
    {
      title: "Ar marde dithod",
      artist: "Sashi Zaifi",
      img_src: "./images/Sashi Zaifi 1.jpg",
      src: "./music/Sashi Zaifi - Ar marde dithod.mp3",
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
