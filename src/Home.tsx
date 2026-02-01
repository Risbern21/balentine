import { MoveLeft, MoveRight } from "lucide-react";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  const [position, setPosition] = useState({
    top: "50%",
    left: "50%",
  });
  const navigate=useNavigate()
  const [escaped, setEscaped] = useState(false);

  const changeSrc = () => {
    const img = document.getElementById("no-img") as HTMLImageElement;
    img.src = "monkey.jpeg";
    img.height = 200;
    img.width = 200;
  };

  const changeYesSrc = () => {
    const img = document.getElementById("yes-img") as HTMLImageElement;
    img.src = "monkey-surprised.jpeg";
    img.height = 100;
    img.width = 100;
  };

  const moveButton = () => {
    const buttonWidth = 120;
    const buttonHeight = 60;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    setEscaped(true);

    setPosition({
      left: `${Math.random() * maxX}px`,
      top: `${Math.random() * maxY}px`,
    });
  };

  return (
    <div className="bg-pink-50 h-screen w-screen p-5 flex justify-center items-center">
      <div className="bg-pink-300 h-[90%] w-[95%] rounded-2xl shadow-2xl p-10 flex flex-col justify-baseline items-center gap-10 relative">
        <h1 className="text-red-500 font-extrabold text-4xl text-center">
          Can we hangout on 14th feb for no reason as friends?
        </h1>
        <img
          src="download.webp"
          alt="Neymar with bouquet"
          width={200}
          height={200}
        />
        <div className="flex justify-center items-center gap-4">
          <div className="flex flex-row-reverse justify-center items-center gap-10">
            <button
              onMouseEnter={() => changeYesSrc()}
              className="bg-red-500 px-10 py-8 rounded-2xl text-white cursor-pointer"
              onClick={()=>navigate("/yes")}
            >
              Yes
            </button>
            <MoveRight />
            <img
              id="yes-img"
              src="expect.jpeg"
              alt="m&m"
              width={50}
              height={50}
            />
          </div>
          <div
            onMouseEnter={moveButton}
            className="flex justify-center items-center gap-10"
            style={{
              position: escaped ? "absolute" : "static",
              top: escaped ? position.top : undefined,
              left: escaped ? position.left : undefined,
              cursor: "pointer",
            }}
          >
            <button
              onClick={() => changeSrc()}
              className="bg-white px-5 py-2 rounded-2xl"
            >
              No
            </button>
            <MoveLeft />
            <img
              id="no-img"
              src="angry.jpeg"
              alt="m&m"
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
