import React from "react";
import { render, screen } from '@testing-library/react'
import { Thought } from '../components/thought';


test("Display the Thought component", () => {
  const thought = { text: "learn react testing library" };
  render(<Thought thought={thought} removeThought={() => {}} />);
  screen.debug(); // Debug the screen
});