import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
      width={100}
      height={100}
      alt="Amazon Logo"
      className="w-auto h-auto object-contain"
    />
  );
}
