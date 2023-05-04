import React from "react";
import { useState } from "react";

const Main = () => {
  const [keyboardsButton, setKeyboardsButton] = useState(false);
  const [switchesButton, setSwitchesButton] = useState(false);
  const [keycapsButton, setKeycapsButton] = useState(false);
  const [cableButton, setCableButton] = useState(false);

  return (
    <main className="w-full flex-1 bg-cover flex flex-wrap mt-48 text-white items-center">
      <div
        className="flex justify-center items-center rounded-lg w-1/2 h-[600px] xl:w-1/4 xl:h-96 hover:blur-sm hover:backdrop-blur-none bg-keyboards bg-center bg-cover hover:cursor-pointer transition-all duration-300"
        onMouseEnter={() => setKeyboardsButton(true)}
        onMouseLeave={() => setKeyboardsButton(false)}
      >
        {keyboardsButton && <p className="text-white blur-0 text-4xl">Keyboards</p>}
      </div>
      <div
        className="flex justify-center items-center rounded-lg w-1/2 h-[600px] xl:w-1/4 xl:h-96 bg-switches bg-center bg-cover hover:cursor-pointer transition-all duration-300"
        onMouseEnter={() => setSwitchesButton(true)}
        onMouseLeave={() => setSwitchesButton(false)}
      >
        {switchesButton && <p className="text-white text-4xl">Swiches</p>}
      </div>
      <div
        className="flex justify-center items-center rounded-lg w-1/2 h-[600px] xl:w-1/4 xl:h-96 bg-keycaps bg-center bg-cover  hover:cursor-pointer transition-all duration-300"
        onMouseEnter={() => setKeycapsButton(true)}
        onMouseLeave={() => setKeycapsButton(false)}
      >
        {keycapsButton && <p className="text-white text-4xl">Keycaps</p>}
      </div>
      <div
        className="flex justify-center items-center rounded-lg w-1/2 h-[600px] xl:w-1/4 xl:h-96 bg-cables bg-center bg-cover hover:cursor-pointer transition-all duration-300"
        onMouseEnter={() => setCableButton(true)}
        onMouseLeave={() => setCableButton(false)}
      >
        {cableButton && <p className="text-white text-4xl">Cables</p>}
      </div>
    </main>
  );
};

export default Main;
