import React from "react";
import Header from "./Header";
import Main from "./Main";

const Home = () => {
  return (
    <div className="container mx-auto w-full h-screen flex flex-col">
      <Header></Header>
      <Main></Main>
    </div>
  );
};

export default Home;
