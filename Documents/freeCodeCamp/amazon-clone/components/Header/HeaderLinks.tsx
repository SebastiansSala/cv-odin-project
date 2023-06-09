import React from "react";

interface linksProps {
  text: string;
}

export default function HeaderBottomLinks({ text }: linksProps) {
  return (
    <a className="text-xs md:text-base border rounded outline-none border-slate-700 hover:border hover:border-white hover:cursor-pointer py-2 md:px-2 transition duration-100">{text}</a>
  );
}
