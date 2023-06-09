"use client";
import React from "react";

export default function InputButton() {
  return (
    <form className="flex flex-1">
      <input
        type="text"
        placeholder="Search Amazon"
        className="pb-3 pt-1 px-2 outline-none w-full"
      />
      <button
        type="submit"
        className="p-2 bg-orange-300 rounded-r hover:bg-orange-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
}
