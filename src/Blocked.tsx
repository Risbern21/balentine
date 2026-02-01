import { useEffect, useRef } from "react";

const BlockedMobile: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  const handlePlay = (): void => {
    audioRef.current?.play();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src="/police.jpeg"
        alt="Not supported"
        style={{ maxWidth: "90%", marginBottom: "20px" }}
      />

      <p>This site is only supported on laptops/desktops.</p>

      <button onClick={handlePlay} className="border border-white bg-red-600 px-5 py-2 rounded-2xl">
        Click here
      </button>

      <audio ref={audioRef} src="/faaah.mp3" />
    </div>
  );
};

export default BlockedMobile;
