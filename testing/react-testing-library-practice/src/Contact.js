import React from "react";
import Button from './components/button'

const Contact = () => {
  const handleClick = () => {
    setTimeout(() => {
      document.querySelector("h1").remove();
    }, 250);
  };

  return (
    <div>
      <h1>Hey Everybody</h1>
      <Button onClick={handleClick}>Remove Header</Button>
    </div>
  );
};

export default Contact;
