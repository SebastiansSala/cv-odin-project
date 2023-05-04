import React, { useState } from "react";
import { keyboardList as keyboardsList } from "../../database";
import Header from "../Home/Header";
import Footer from "../../Footer";

const Shop = () => {
  const [keyboardList, setKeyboardList] = useState([...keyboardsList]);
  return (
    <div>
      <Header></Header>
      <div className="flex-1 flex flex-wrap gap-10 mt-20 justify-center">
        {keyboardList.map((keyboard) => (
          <div className="rounded-xl w-80 h-90 p-10 bg-gray-800">
            <img
              src={keyboard.img}
              className="rounded w-full h-40 object-cover"
            ></img>
            <p className="text-white mt-6 text-3xl font-bold">Name{keyboard.name}</p>
            <p className="text-white mt-6 text-2xl">arst{keyboard.desc}</p>
            <p className="mt-6 text-2xl text-rose-200 font-bold">${keyboard.price}</p>
            <button className="bg-blue-400 hover:bg-blue-100 -ml-2 mt-4 px-8 py-2 rounded-md text-2xl">
              Add
            </button>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;
