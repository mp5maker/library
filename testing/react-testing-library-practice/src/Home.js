import React, { useState } from "react";
import Button from "./components/button";

const Home = () => {
  const [text, setText] = useState("Hello World!");

  // Changes header text after interval of 500ms
  const handleClick = () => {
    setTimeout(() => {
      setText("Goodbye!");
    }, 500);
  };

  return (
    <div>
      <h1>{text}</h1>
      <Button onClick={handleClick}>click me</Button>
    </div>
  );
};

export default Home;
