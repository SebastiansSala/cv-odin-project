import React from "react";
import HeaderBottomLinks from "./HeaderLinks";
import InputButton from "./InputButton"
import Logo from "@/components/Logo"

export default function Header() {
  return (
    <header>
      <div className="flex flex-col">
        <section className="flex bg-gray-800 space-x-5 px-6 py-2">
          <Logo />
          <InputButton />
        </section>
        <section className="flex bg-gray-700">
          <div className="flex flex-1 justify-start items-center">
            <nav className="text-white text-lg space-x-2 md:space-x-5 px-0 md:px-6 py-2 mx-auto">
              <HeaderBottomLinks text={"Today's Deals"} />
              <HeaderBottomLinks text={"Customer Service"} />
              <HeaderBottomLinks text={"Registry"} />
              <HeaderBottomLinks text={"Gift Cards"} />
              <HeaderBottomLinks text={"Sell"} />
            </nav>
          </div>
          <div></div>
        </section>
      </div>
    </header>
  );
}
