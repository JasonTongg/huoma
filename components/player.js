// components/AudioPlayer.js
import { useEffect, useRef } from "react";

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            console.log("runnig");
          })
          .catch((error) => {
            console.error("Autoplay failed:", error);
          });
      }
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src={audioSrc}
      autoPlay
      loop
      style={{ display: "none" }}
    />
  );
};

export default AudioPlayer;
